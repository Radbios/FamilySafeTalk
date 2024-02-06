import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Bar, ButtonSend, InputsBox, InputsContainer } from "./styles";
import api from "../../services/api";

export default function BottomBar({chatId, onSendMessage}) {
  const [message, setMessage] = useState(null);
  async function sendMessage(){
    const response = await api.post("/message", 
    {
      content: message,
      type: "text",
      chat_id: chatId
    });
    onSendMessage(message);
    setMessage(null)
  }

  return (
    <Bar>
      <InputsContainer>
        <InputsBox
          onChangeText={setMessage}
          value={message}
          placeholder={"Sua mensagem..."}
        />
        <ButtonSend onPress={sendMessage}>
          <Image
            source={require("../../../assets/arrow-right.png")}
            style={{ width: 35, height: 35 }}
          />
        </ButtonSend>
      </InputsContainer>
    </Bar>
  );
}
