import React, { useEffect, useRef } from 'react';
import { Keyboard, ScrollView } from "react-native";
import { Container } from "./styles";
import Messages from "../messages";

export default function Conversation({ messages }) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Rolagem para o final após a renderização
    (scrollRef.current as ScrollView)?.scrollToEnd({ animated: false });
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      // Scroll para o final sem animação
      if (scrollRef.current) {
        scrollRef.current.scrollToEnd({ animated: false });
      }
    });
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  
  return (
    <ScrollView ref={scrollRef}>
      <Container>
        {messages.map((message) => (
          <Messages
            key={message.id}
            type={message.sender.name}
            text={message.content}
          />
        ))}
      </Container>
    </ScrollView>
  );
}