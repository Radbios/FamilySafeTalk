import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../../@types/navigation";

import { Image } from "react-native";
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

function Cadastro1() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <Image source={require("../../../../assets/logo.png")} />
            <TitleText>FamilySafeTalk</TitleText>
          </TitleContainer>
          <SubTitleBox>
            <SubTitleText>CADASTRO</SubTitleText>
          </SubTitleBox>
          <InputsContainer>
            <SubTitleText>Dados do Responsável:</SubTitleText>
            <InputsBox placeholder="Nome Completo" />
            <InputsBox placeholder="Telefone Celular" />
            <InputsBox placeholder="E-mail" />
            <InputsBox placeholder="CPF" />
          </InputsContainer>
          <ButtonsContainer>
            <ButtonBox1>
              <ButtonText onPress={() => navigation.navigate("Login")}>
                Voltar
              </ButtonText>
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
