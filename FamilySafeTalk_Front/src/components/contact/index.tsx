import { View, Image, Text } from "react-native";
import { ButtonContainer, Container } from "./styles";
import CardContacts from "../cardContacts";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const Contatos = ({navigation}) => {
  const [contacts, setContacts] = useState(null);

  async function getContacts(){
    const response = await api.get("/contact");
    setContacts(response.data)
  }

  function handlePlusPress(){
    navigation.push("AddContact")
  }


  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Container>
      <View
        style={{
          position: "absolute",
          right: 10,
          top: -5,
        }}
      >
          <TouchableOpacity onPress={(handlePlusPress)}>
            <IconButton
              icon={() => <Feather name="plus" size={45} color="#888" />}
            />
          </TouchableOpacity>
        </View>
        <View
            style={{
              position: "absolute",
              left: 10,
              top: -5,
            }}
          >
          <TouchableOpacity onPress={(getContacts)}>
            <IconButton
              icon={() => <Feather name="rotate-ccw" size={34} color="#888" />}
            />
          </TouchableOpacity>
        </View>
      <CardContacts contacts={contacts} navigation={navigation} />
    </Container>
  );
}

export default Contatos;