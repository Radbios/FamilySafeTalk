import React, { useEffect, useState, useRef } from 'react';
import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import {
  ItemContainer,
  Avatar,
  TextContainer,
  Name,
  LastMessage,
  Time,
} from './styles';
import { chatData } from '../../data/chatData';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { useRoute } from '@react-navigation/native';


interface LastMessageProps {
  content: string;
  date: Date;
  sender: object;
}

interface ChatItemProps {
  lastMessage: LastMessageProps;
  image: string;
}

const renderDateTime = (createdAt) => {
  try {
    const createdDate = new Date(createdAt);
    if (!isNaN(createdDate.getTime())) {
      const now = new Date();
      
      if (
        now.getDate() === createdDate.getDate() &&
        now.getMonth() === createdDate.getMonth() &&
        now.getFullYear() === createdDate.getFullYear()
      ) {
        return createdDate.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric'});
      } else {
        return createdDate.toLocaleDateString('pt-BR');
      }
    }
  } catch (error) {
    console.error('Erro ao processar a data:', error.message);
  }

  return "Data inválida";
};

const ChatItem: React.FC<ChatItemProps> = ({id , image, lastMessage, navigation, name}) => (
  // <TouchableOpacity
  //   // onPress={navigation.push("Chat", {testando: "okok"})}
  // >
    <ItemContainer onPress={() =>  navigation.push("Chat", {chatId: id})}>
      <Avatar />
      <TextContainer>
        <Name>{name}</Name>
        {lastMessage ? <LastMessage>{lastMessage.sender.name + ": " + lastMessage.content}</LastMessage> : ""}
      </TextContainer>
      <Time>{lastMessage ? renderDateTime(lastMessage.date) : ""}</Time>
    </ItemContainer>
  // </TouchableOpacity>
);

export default function Chat({navigation}) {

  const {socket} = useAuth();
  const [chats, setChats] = useState(null);

  function orderData(data)
  {
    const d = data ? data.sort((a, b) => {
      return new Date(b.lastMessage.date) - new Date(a.lastMessage.date);
    }): null;

    setChats(d)
  }

  const updateChats = (id, chat) => {
    setChats(prevChats => {
      const updatedIndex = prevChats.findIndex(chat => chat.id === id);
      if (updatedIndex === -1) return [chat, ...prevChats];
  
      const updatedChat = chat;
      const newChats = [
        updatedChat,
        ...prevChats.slice(0, updatedIndex),
        ...prevChats.slice(updatedIndex + 1)
      ];
      return newChats;
    });
  };

  async function getChats(){
    const response = await api.get("/chat");

    orderData(response.data.data);
  }

  async function getChat(chatId){
    const response = await api.get("/chat/" + chatId);
    updateChats(chatId, response.data)
  }

  useEffect( () => {
    socket.current.on('message', data => {
      getChat(data.chat)
    });

    setTimeout(() => {
      getChats();
    });
  }, [])
  return (
    <View>
      {chats ? (
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id.toString()} // Certifique-se de converter o ID para string
          renderItem={({ item }) => <ChatItem {...item} navigation={navigation} />}
        />
      ) : (
        <View>
            <Text>
              Loading
            </Text>
        </View>
      )}
    </View>
  );
}
