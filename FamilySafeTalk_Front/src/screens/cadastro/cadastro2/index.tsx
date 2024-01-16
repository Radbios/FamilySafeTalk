import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
  ButtonBox3,
  ButtonText,
  ButtonText2,
} from "./styles";
import { Image } from "react-native";

function Cadastro2() {

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
          <ButtonsContainer>
            <ButtonBox3>
              <Image source={require("../../../../assets/pluscircle.png")} />
              <ButtonText>Adicionar Dependente</ButtonText>
            </ButtonBox3>
          </ButtonsContainer>
          <ButtonsContainer>
            <ButtonBox1>
              <ButtonText2>Voltar</ButtonText2>
            </ButtonBox1>
            <ButtonBox2>
              <ButtonText2>Próximo</ButtonText2>
            </ButtonBox2>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}

export default Cadastro2;
