import React from "react";
import {
  MessageContainer,
  MessageContents,
  MessagesText,
} from "./styles";

export default function Messages({ type, text } : any) {
  const backgroundColor = type === "Eu" ? "#669CF4" : "#6c757d";
  const alignItems = type === "Eu" ? "flex-end" : "flex-start";
  
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
