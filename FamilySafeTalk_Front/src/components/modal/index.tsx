import React from "react";
import { Image } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  CancelButton,
  DeleteButton,
  ImageContainer,
  MessageContainer,
  MessageText,
  MessageTextBold,
  ModalBox,
  ModalContainer,
} from "./styles";

interface ModalProps {
  onClose: () => void;
  onSubmit?: () => void;
  deleteMessage: string;
}

export default function Modal({
  onClose,
  onSubmit,
  deleteMessage,
}: ModalProps) {
  return (
    <ModalContainer>
      <ModalBox>
        <ImageContainer>
          <Image source={require("../../../assets/ponto-de-exclamacao.png")} />
        </ImageContainer>
        <MessageContainer>
          <MessageTextBold>Você tem certeza?</MessageTextBold>
          <MessageText>
            Deseja realmente {deleteMessage.toLowerCase()} esse contato?
          </MessageText>
        </MessageContainer>
        <ButtonContainer>
          <CancelButton onPress={onClose}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
          <DeleteButton onPress={onSubmit}>
            <ButtonText>{deleteMessage}</ButtonText>
          </DeleteButton>
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
}
