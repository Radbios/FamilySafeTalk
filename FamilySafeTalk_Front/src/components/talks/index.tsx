// ChatItem.js
import React from 'react';
import { View, FlatList, ImageSourcePropType } from 'react-native';
import {
  ItemContainer,
  Avatar,
  TextContainer,
  Name,
  LastMessage,
  Time,
} from './styles'; // Importe os componentes de estilo
import { chatData } from '../../data/chatData';

interface ChatItemProps {
  name: string;
  lastMessage: string;
  time: string;
  avatar: ImageSourcePropType;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, lastMessage, time, avatar }) => (
  <ItemContainer>
    <Avatar source={avatar} />
    <TextContainer>
      <Name>{name}</Name>
      <LastMessage>{lastMessage}</LastMessage>
    </TextContainer>
    <Time>{time}</Time>
  </ItemContainer>
);

export default function Chat() {
  return (
    <FlatList
      data={chatData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatItem {...item} />}
    />
  );
}
