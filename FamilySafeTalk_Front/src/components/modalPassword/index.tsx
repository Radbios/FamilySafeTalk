import React from "react";
import { Image } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  CancelButton,
  DeleteButton,
  ImageContainer,
  InputsBox,
  MessageContainer,
  MessageTextBold,
  ModalBox,
  ModalContainer,
} from "./styles";

interface ModalProps {
  onClose: () => void;
  onSubmit?: () => void;
}

export default function ModalPassword({
  onClose,
  onSubmit,
}: ModalProps) {
  return (
    <ModalContainer>
      <ModalBox>
        <ImageContainer>
          <Image source={require("../../../assets/ponto-de-exclamacao.png")} />
        </ImageContainer>
        <MessageContainer>
          <MessageTextBold>Digite sua senha</MessageTextBold>
          <InputsBox placeholder={"Senha"}/>
        </MessageContainer>
        <ButtonContainer>
          <CancelButton onPress={onClose}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
          <DeleteButton onPress={onSubmit}>
            <ButtonText>Confirmar</ButtonText>
          </DeleteButton>
        </ButtonContainer>
      </ModalBox>
    </ModalContainer>
  );
}
