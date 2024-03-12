import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Bar, ButtonSend, InputsBox, InputsContainer } from "./styles";
import api from "../../services/api";
import CardAudio from "../cardAudio";

export default function BottomBar({ chatId, onSendMessage }) {
  const [message, setMessage] = useState(null);
  async function sendMessage() {
    const response = await api.post("/message", {
      content: message,
      type: "text",
      chat_id: chatId,
    });

    const data = {
      info: {
        id: response.data.id,
        sender: {
          name: "Eu",
        },
        content: message,
      },
      users: response.data.receiver,
      chat: chatId,
      message: message,
    };

    onSendMessage(data);
    setMessage(null);
  }

  return (
    <Bar>
      <InputsContainer>
        <CardAudio />
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
