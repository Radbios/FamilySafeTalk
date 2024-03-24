import React, { useEffect, useState, useRef } from 'react';
import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import {
  ItemContainer,
  Avatar,
  TextContainer,
  Name,
  LastMessage,
  Time,
  BackContainer,
} from './styles';
import { chatData } from '../../data/chatData';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { useRoute } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { Feather } from "@expo/vector-icons";


interface LastMessageProps {
  content: string;
  date: Date;
  sender: object;
}

interface ChatItemProps {
  lastMessage: LastMessageProps;
  userId: string;
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

const ChatItem: React.FC<ChatItemProps> = ({ id, userId, lastMessage, navigation, name }) => {
  const [userImage, setUserImage] = useState<string | null>(null);

  const getUserImage = async (userId: string) => {
    try {
      const response = await api.get(`/user/${userId}`);
      return response.data.image; // Supondo que a resposta inclua a URL da imagem do usuário
    } catch (error) {
      //console.error('Erro ao obter a imagem do usuário:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserImage = async () => {
      const image = await getUserImage(userId);
      setUserImage(image);
    };
    fetchUserImage();
  }, [userId]);

  return (
    <ItemContainer onPress={() => navigation.push("Chat", { chatId: id })}>
      <Avatar source={userImage ? { uri: userImage } : require("../../../assets/usericon.png")} />
      <TextContainer>
        {lastMessage ? (
          <Text>
            <Name>{"  " + name}</Name>
            {"\n"}
            <LastMessage>{"  " + lastMessage.sender.name + ": " + lastMessage.content}</LastMessage>
          </Text>
        ) : (
          <Name>{name}</Name> // Caso não haja última mensagem, apenas o nome é renderizado
        )}
      </TextContainer>
      <Time>{lastMessage ? renderDateTime(lastMessage.date) : ""}</Time>
    </ItemContainer>
  );
};

export default function ListTalksDependents({navigation}) {

  const {socket} = useAuth();
  const [chats, setChats] = useState(null);

  const handleArrowPress = () => {
    navigation.pop();
  };


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
      <BackContainer onPress={handleArrowPress}>
        <IconButton
          icon={() => <Feather name="arrow-left" size={30} color="#000" />}
        />
      </BackContainer>
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
