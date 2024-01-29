import React, { useState } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import useAppRoute from "../../routes/hooks/types";
import {useAuth} from "../../contexts/auth";

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
import { Image, KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  const { navigate } = useAppRoute().navigation;

  const { signed, singIn, user } = useAuth();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    
    function handleSignIn(){
        singIn(email, password);
    }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#a0c4ff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1}}
        keyboardVerticalOffset={50}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                <InputsBox
                  onChangeText={setEmail}
                  value={email}
                  placeholder={'email'}
                />
                <InputsBox 
                  placeholder={'password'}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                />
              </InputsContainer>
              <ButtonsContainer>
                <ButtonBox1>
                  <ButtonText onPress={() => navigate("Register")}>
                    Cadastrar
                  </ButtonText>
                </ButtonBox1>
                <ButtonBox2>
                  <ButtonText onPress={handleSignIn} >
                    Entrar
                  </ButtonText>
                </ButtonBox2>
              </ButtonsContainer>
            </ContentsBox>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

