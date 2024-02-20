import React, { useEffect, useRef, useState } from "react";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Container, Talks } from "./styles";
import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import Conversation from "../../components/conversation";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import io from 'socket.io-client';


export default function Conversa({navigation}) {

  const route = useRoute();
  const chatId = route.params.chatId;

  const socketRef = useRef(null);
  
  const [chat, setChat] = useState(null);


  async function getChat(){
    const response = await api.get("/chat/" + chatId);
    setChat(response.data)
  }

  function sendMessage(message)
  {
    socketRef.current.emit("message", message)
  }

  useEffect(() => {
    socketRef.current = io("https://radbios.com:3000");

    socketRef.current.on("message", msg => {
      getChat();
      console.log(msg)
    });

    getChat();

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      { chat ? 
          <Container>
            <TopBar name={chat.name} image={chat.image} navigation={navigation}/>
            <Talks>
              <Conversation messages={chat.messages}/>
            </Talks>
            <BottomBar chatId={chat.id} onSendMessage={sendMessage}/>
          </Container>
        : 
        <View></View>
      }
    </GestureHandlerRootView> 
  );
}
