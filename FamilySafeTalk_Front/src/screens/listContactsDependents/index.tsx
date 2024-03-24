import { View, Image, Text } from "react-native";
import { BackContainer, Container } from "./styles";

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import CardContacts from "../../components/cardContacts";

export default function ListContactsDependents({ navigation }) {
  const [contacts, setContacts] = useState(null);

  async function getContacts() {
    const response = await api.get("/contact");
    setContacts(response.data);
  }
  const handleArrowPress = () => {
    navigation.pop();
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <Container>
        <BackContainer onPress={handleArrowPress}>
          <IconButton
            icon={() => <Feather name="arrow-left" size={30} color="#000" />}
          />
        </BackContainer>
      <CardContacts contacts={contacts} navigation={navigation} />
    </Container>
  );
}
