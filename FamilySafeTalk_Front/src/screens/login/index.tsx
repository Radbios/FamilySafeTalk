import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../routes/hooks/types";
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

function Login() {
  const {navigate} = useAppRoute().navigation;

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <TitleText>Bem-vindo(a) ao FamilySafeTalk!</TitleText>
          </TitleContainer>
          <Image source={require("../../../assets/familia1.png")} />
          <SubTitleBox>
            <SubTitleText>
              Para iniciar, faça o login ou cadastre-se:
            </SubTitleText>
          </SubTitleBox>
          <InputsContainer>
            <InputsBox placeholder="Login" />
            <InputsBox placeholder="Senha" />
          </InputsContainer>
          <ButtonsContainer>
            <ButtonBox1>
              <ButtonText onPress={() => navigate("Register")}>
                Cadastrar
              </ButtonText>
            </ButtonBox1>
            <ButtonBox2>
              <ButtonText>Entrar</ButtonText>
            </ButtonBox2>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}

export default Login;
