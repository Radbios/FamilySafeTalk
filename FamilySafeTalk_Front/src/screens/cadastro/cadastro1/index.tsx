import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../../routes/hooks/types";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
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
import api from "../../../services/api";
import { useAuth } from "../../../contexts/auth";

export default function Cadastro1() {
  const { navigate } = useAppRoute().navigation;

  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {singIn} = useAuth();
  
  async function register(){
    const response = await api.post("/register",{
      name: name,
      tel: tel,
      email: email,
      password: password,
      role_id: 1
    });

    if(response.data)
    {
      // navigate("Register2",{
      //   name: name,
      //   password: password
      // })
      singIn(email, password);
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#a0c4ff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={50}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                <InputsBox 
                  placeholder={"Nome Completo"}
                  onChangeText={setName}
                  value={name}
                />
                <InputsBox 
                  onChangeText={setTel}
                  value={tel}
                  placeholder={"Telefone Celular"}
                />
                <InputsBox
                  onChangeText={setEmail}
                  value={email}
                  placeholder={"E-mail"}
                />
                <InputsBox 
                  placeholder={"Senha"}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                />
              </InputsContainer>
              <ButtonsContainer>
                <ButtonBox1>
                  <ButtonText onPress={() => navigate("Login")}>
                    Voltar
                  </ButtonText>
                </ButtonBox1>
                <ButtonBox2>
                  <ButtonText onPress={() => {
                    register();
                  }}>
                    Concluir
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
