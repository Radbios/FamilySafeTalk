import { View, Image, Text } from "react-native";
import { ButtonContainer, Container } from "./styles";
import CardContacts from "../cardContacts";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Contatos = ({navigation}) => {
  
  const [contacts, setContacts] = useState(null);

  async function getContacts(){
    const response = await api.get("/contact");
    setContacts(response.data)
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Container>
      <ButtonContainer 
        onPress={ () => {
          navigation.push("AddContact")
        }}
      >
        <Image source={require("../../../assets/plusicon.png")} />
      </ButtonContainer>
      <TouchableOpacity onPress={() => {
        getContacts();
      }}>
        <Text>Atualizar</Text>
      </TouchableOpacity>
      <CardContacts contacts={contacts} navigation={navigation} />
    </Container>
  );
}

export default Contatos;
