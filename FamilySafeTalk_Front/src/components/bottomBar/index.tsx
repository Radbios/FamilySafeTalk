import React, { useState, useEffect } from "react";
import { Image, ScrollView, Keyboard, Platform } from "react-native";
import { Bar, ButtonSend, InputsBox, InputsContainer } from "./styles";
import api from "../../services/api";
import CardAudio from "../cardAudio";

export default function BottomBar({ chatId, onSendMessage }) {
  const [message, setMessage] = useState("");
  const [inputHeight, setInputHeight] = useState(60); // Altura inicial da caixa de input
  const numberOfLines = 4; // Número inicial de linhas visíveis

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardDidShow" : "keyboardWillShow",
      (e) => {
        // Ajuste a altura da entrada de mensagem para acomodar o espaço disponível restante na tela
        setInputHeight(60 + e.endCoordinates.height); // 40 é a altura do componente sem o teclado
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardDidHide" : "keyboardWillHide",
      () => {
        // Retorne a altura da entrada de mensagem ao estado original
        setInputHeight(60);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
    setMessage("");
  }

  return (
    <Bar>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <InputsContainer style={{ height: inputHeight }}>
          {/* <CardAudio /> */}
          <InputsBox
            onChangeText={setMessage}
            value={message}
            placeholder={"Sua mensagem..."}
            multiline={true} // Permite várias linhas de texto
            numberOfLines={numberOfLines} // Número inicial de linhas visíveis
            style={{ height: inputHeight }} // Ajusta dinamicamente a altura da caixa de input
          />
          <ButtonSend onPress={sendMessage}>
            <Image
              source={require("../../../assets/arrow-right.png")}
              style={{ width: 35, height: 35 }}
            />
          </ButtonSend>
        </InputsContainer>
      </ScrollView>
    </Bar>
  );
}
