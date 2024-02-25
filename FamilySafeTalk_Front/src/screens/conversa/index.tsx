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


export default function Conversa({navigation}) {

  const {socket} = useAuth();

  const route = useRoute();

  const chatId = route.params.chatId;
  const [chat, setChat] = useState(null);

  async function getChat(){
    const response = await api.get("/chat/" + chatId);
    setChat(response.data)
  }

  function sendMessage(message)
  {
    socket.current.emit("message", message)
  }

  useEffect(() => {
    socket.current.on("message", msg => {
      getChat();
    });
    
    getChat();    
   
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
