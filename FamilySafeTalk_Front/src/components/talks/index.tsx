import React, { useEffect, useState } from 'react';
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
        return createdDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
      } else {
        return createdDate.toLocaleDateString('en-US');
      }
    }
  } catch (error) {
    console.error('Erro ao processar a data:', error.message);
  }

  return "Data inválida";
};

const ChatItem: React.FC<ChatItemProps> = ({id , image, lastMessage, navigation}) => (
  // <TouchableOpacity
  //   // onPress={navigation.push("Chat", {testando: "okok"})}
  // >
    <ItemContainer onPress={() =>  navigation.push("Chat", {chatId: id})}>
      <Avatar />
      <TextContainer>
        <Name>{lastMessage.sender.name}</Name>
        <LastMessage>{lastMessage.content}</LastMessage>
      </TextContainer>
      <Time>{renderDateTime(lastMessage.date)}</Time>
    </ItemContainer>
  // </TouchableOpacity>
);

export default function Chat({navigation}) {

  const [chats, setChats] = useState(null);

  async function getChats(){
    const response = await api.get("/chat");
    setChats(response.data)
  }

  useEffect(() => {
    getChats();
  }, []);

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
