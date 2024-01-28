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

export default function Cadastro3() {
  const { navigate } = useAppRoute().navigation;
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
                <InputsBox placeholder="Nome Completo" />
                <InputsBox placeholder="E-mail" />
                <InputsBox placeholder="Senha" />
                <InputsBox placeholder="Parentesco" />
              </InputsContainer>
              <BirthInputsContainer>
                <BirthInputsBox placeholder="Data de Nascimento" />
                <IconInputsContainer>
                  <Icon
                    source={require("../../../../assets/icons8-calendário-32.png")}
                  />
                </IconInputsContainer>
              </BirthInputsContainer>
              <ButtonsContainer>
                <ButtonBox1>
                  <ButtonText onPress={() => navigate("Register2")}>
                    Voltar
                  </ButtonText>
                </ButtonBox1>
                <ButtonBox2>
                  <ButtonText>Próximo</ButtonText>
                </ButtonBox2>
              </ButtonsContainer>
            </ContentsBox>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
