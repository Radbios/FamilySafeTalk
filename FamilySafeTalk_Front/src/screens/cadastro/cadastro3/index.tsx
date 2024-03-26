import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../../routes/hooks/types";
import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  SubTitleBox,
  SubTitleText,
  InputsContainer,
  InputsBox,
  BirthInputsContainer,
  BirthInputsBox,
  IconInputsContainer,
  Icon,
  ButtonsContainer,
  ButtonBox1,
  ButtonBox2,
  ButtonText,
} from "./styles";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api";

export default function Cadastro3() {

  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

  async function submit(){
    const response = await api.post("/guardian/dependent",{
      name: name,
      email: email,
      password: password,
    });
    navigation.pop();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#a0c4ff" }}>
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
                <SubTitleText>CADASTRO DE DEPENDENTE:</SubTitleText>
              </SubTitleBox>
              <InputsContainer>
                <InputsBox 
                  placeholder="Nome Completo"
                  onChangeText={setName}
                  value={name}
                 />
                <InputsBox 
                  placeholder="E-mail"
                  onChangeText={setEmail}
                  value={email}
                />
                <InputsBox
                  placeholder="Senha"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                />
              </InputsContainer>
              <ButtonsContainer>
                <ButtonBox1>
                  <ButtonText onPress={() => {
                    navigation.pop();
                  }}>
                    Voltar
                  </ButtonText>
                </ButtonBox1>
                <ButtonBox2>
                  <ButtonText
                    onPress={submit}
                  >
                    Próximo
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
