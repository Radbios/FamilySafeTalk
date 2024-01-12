import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  SubTitleBox,
  SubTitleText,
  InputsContainer,
  InputsBox,
  ButtonsContainer,
  ButtonBox1,
  ButtonBox2,
  ButtonText,
} from "./styles";
import { Image } from "react-native";

function Cadastro1() {
  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <Image source={require("C:\\Users\\ewert\\Documents\\FamilySafeTalk\\FamilySafeTalk_Front\\assets\\logo-fundo-transparente.png")} />
            <TitleText>FamilySafeTalk</TitleText>
          </TitleContainer>
          <SubTitleBox>
            <SubTitleText>CADASTRO</SubTitleText>
            <SubTitleText>Dados do Responsável:</SubTitleText>
          </SubTitleBox>
          <InputsContainer>
            <InputsBox placeholder="Nome Completo" />
            <InputsBox placeholder="Telefone Celular" />
            <InputsBox placeholder="E-mail" />
            <InputsBox placeholder="CPF" />
          </InputsContainer>
          <ButtonsContainer>
            <ButtonBox1>
              <ButtonText>Voltar</ButtonText>
            </ButtonBox1>
            <ButtonBox2>
              <ButtonText>Próximo</ButtonText>
            </ButtonBox2>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}

export default Cadastro1;
