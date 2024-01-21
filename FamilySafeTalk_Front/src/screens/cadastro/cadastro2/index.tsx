import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../../routes/hooks/types";
import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  SubTitleBox,
  SubTitleText,
  ButtonsContainer,
  ButtonBox1,
  ButtonBox2,
  ButtonText,
} from "./styles";
import { Image } from "react-native";
import CardDependents from "../../../components/cardDependents";

function Cadastro2() {
  const { navigate } = useAppRoute().navigation;
  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <Image source={require("../../../../assets/logo.png")} />
            <TitleText>FamilySafeTalk</TitleText>
          </TitleContainer>
          <SubTitleBox>
            <SubTitleText>CADASTRO DE DEPENDENTE</SubTitleText>
          </SubTitleBox>
          <CardDependents />
          <ButtonsContainer>
            <ButtonBox1>
              <ButtonText onPress={() => navigate("Register")}>
                Voltar
              </ButtonText>
            </ButtonBox1>
            <ButtonBox2>
              <ButtonText onPress={() => navigate("Register3")}>
                Próximo
              </ButtonText>
            </ButtonBox2>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}

export default Cadastro2;
