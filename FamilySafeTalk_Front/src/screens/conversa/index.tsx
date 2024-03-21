import React, { useEffect, useState } from "react";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Container, Talks } from "./styles";
import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import Conversation from "../../components/conversation";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useIsCurrentScreen } from "../../utils/context";


export default function Conversa({ navigation, showBottomBar = true }) {

  const {
    selectedCurrentScreen,
    setSelectedCurrentScreen
  } = useIsCurrentScreen()


  const {socket} = useAuth();


  const route = useRoute();

  const chatId = route.params.chatId;

  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [newMessages, setNewMessages] = useState(null);

  async function getChat(){
    const response = await api.get("/chat/" + chatId);
    setChat(response.data)
    setMessages(response.data.messages)
  }

  async function getLastMessage(){
    const response = await api.get("/chat/" + chatId + "/lastMessage");
    setMessages((prevMessages) => [...prevMessages, response.data.data])
  }

  function sendMessage(data)
  {
    socket.current.emit("message", data);
  }
  useEffect(() => {
    setSelectedCurrentScreen("Chat");

    return () => {
      setSelectedCurrentScreen("Other");
    };
  }, []);


  useEffect(() => {

    getChat();

    socket.current.on("message", data => {
      getLastMessage()
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#fffafa' }}>
      { (chat && messages) ? 
          <Container>
            <TopBar name={chat.name} image={chat.image} navigation={navigation}/>
            <Talks style={{ height: showBottomBar ? '80%' : '90%'}}>
              <Conversation messages={messages}/>
            </Talks>
            {showBottomBar ? <BottomBar chatId={chat.id} onSendMessage={sendMessage}/> : null}
          </Container>
        : 
        <View></View>
      }
    </GestureHandlerRootView> 
  );
}
