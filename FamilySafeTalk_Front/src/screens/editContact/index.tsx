import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  ButtonsContainer,
  ButtonBox1,
  PlaceholderTextButton,
  ButtonText,
} from "./styles";
import api from "../../services/api";
import { InputsBox, InputsContainer } from "../login/styles";
//import api from "../../services/api";

export default function EditContact() {
  const navigation = useNavigation();
  const route = useRoute();

  
  const contact = route.params.contact;
  const [name, setName] = useState(contact.name);

  const handleArrowPress = () => {
    navigation.pop();
  };

  const handleCheckPress = async () => {
    const response = await api.put("/contact/" + contact.id, 
    {
      name: name,
      is_blocked: false
    });
    const newContact = response.data.data;
    setName(null)
    navigation.navigate("Ver Contato", {contact: newContact});
  };

  return (
    <GestureHandlerRootView >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <ContentsBox>
            <TitleText>Editar Contato</TitleText>
            <TitleContainer>
                <TouchableOpacity>
                  <IconButton
                    icon={() => (
                      <FontAwesome name="user" size={54} color="#FFFFFF" />
                    )}
                    style={{
                      backgroundColor: "#000000",
                      borderRadius: 40,
                      padding: 8,
                      width: 80,
                      height: 80,
                    }}
                  />
                </TouchableOpacity>
            </TitleContainer>

            <InputsContainer>
                <InputsBox
                  onChangeText={setName}
                  value={name}
                />
              </InputsContainer>

            <View
              style={{
                position: "absolute",
                left: -15,
                top: 0,
              }}
            >
              <TouchableOpacity onPress={handleArrowPress}>
                <IconButton
                  icon={() => (
                    <Feather name="arrow-left" size={30} color="#000" />
                  )}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: "absolute",
                right: -15,
                top: 0,
              }}
            >
              <TouchableOpacity onPress={handleCheckPress}>
                <IconButton
                  icon={() => <Feather name="check" size={30} color="#4169E1" />}
                />
              </TouchableOpacity>
            </View>
          </ContentsBox>
        </Container>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
