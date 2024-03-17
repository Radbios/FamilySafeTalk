import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../../routes/hooks/types";
import { FontAwesome } from "@expo/vector-icons";
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
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { IconButton } from "react-native-paper";

export default function Dependent1() {

  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [parentage, setparentage] = useState();
  const [showModal, setShowModal] = useState(false);

  async function submit(){
    const response = await api.post("/guardian/dependent",{
      name: name,
      email: email,
      password: password,
      parentage: parentage
    });
  }
  
  function ConcluirPress(){
    navigation.push('Dependentes');
    setTimeout(() => setShowModal(false), 3000);
    setShowModal(true);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#a0c4ff" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={5}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ContentsBox>
              <SubTitleBox>
                <SubTitleText>CADASTRO DE DEPENDENTE</SubTitleText>
              </SubTitleBox>
              <TitleContainer>
                <IconButton
                    icon={() => (
                        <FontAwesome name="user" size={75} color="#FFFFFF" />
                    )}
                    style={{
                        backgroundColor: "#000000",
                        borderRadius: 100,
                        width: 120,
                        height: 120,
                    }}
                    />
              </TitleContainer>
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
                <InputsBox 
                  placeholder="Parentesco"
                  onChangeText={setparentage}
                  value={parentage} 
                />

              </InputsContainer>
              <BirthInputsContainer>
                <BirthInputsBox placeholder="Data de Nascimento" />
                <IconInputsContainer>
                  <Icon
                    source={require("../../../assets/calendar_month.png")}
                  />
                </IconInputsContainer>
              </BirthInputsContainer>
              <ButtonsContainer>
                <ButtonBox1 onPress={() => {navigation.pop();}}>
                  <ButtonText>Voltar</ButtonText>
                </ButtonBox1>
                <ButtonBox2 onPress={() => {submit(); ConcluirPress()}}> 
                  <ButtonText>Concluir</ButtonText>
                </ButtonBox2>
              </ButtonsContainer>
            </ContentsBox>
          </Container>
        </ScrollView>
        <Modal
          visible={showModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onPress={() => setShowModal(false)}
          >
            <Image
              source={require("../../../assets/modal2.png")}
              style={{ width: '80%', height: '80%', borderRadius: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
