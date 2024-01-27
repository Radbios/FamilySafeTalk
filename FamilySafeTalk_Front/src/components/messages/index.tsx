import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native";
import {
  MessageContainer,
  MessageContents,
  MessagesText,
} from "./styles";

export default function Messages({ type, text } : any) {
  const backgroundColor = type === "receiver" ? "#669CF4" : "#6c757d";
  const alignItems = type === "receiver" ? "flex-end" : "flex-start";
  
  return (
    <MessageContainer style={{ alignItems }}>
      <MessageContents style={{ backgroundColor }}>
        <MessagesText>
          {text}
        </MessagesText>
      </MessageContents>
    </MessageContainer>
  );
}
