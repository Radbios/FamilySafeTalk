import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  DependentIndex,
  WordsContainer,
  WordsBox,
  WordName,
} from "./styles";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import ModalWords from "../../components/modalWords";

export default function ListBlockedWords() {
  const { user } = useAuth();

  const navigation = useNavigation();

  const [relationships, setRelationships] = useState([]);

  async function getRelationships() {
    const response = await api.get("/guardian/dependent");
    setRelationships(response.data.data);
  }

  useEffect(() => {
    getRelationships();
  }, []);

  function handlePlusPress(){
    navigation.push('Criar Dependente')
  }

  return (
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <ContentsBox>
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
              <TitleText>{user.name}</TitleText>
            </TitleContainer>

            <DependentIndex>Palavras Bloqueadas</DependentIndex>

            <WordsContainer>
              {relationships.map((e, index) => (
                <WordsBox
                  key={e.dependent.id}
                  onPress={() => {
                    navigation.push("Ver Dependente", {
                      dependent: e.dependent,
                    });
                  }}
                >
                  <WordName>
                    {index + 1}- {e.dependent.name}
                  </WordName>
                </WordsBox>
              ))}
            </WordsContainer>
          </ContentsBox>
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 160,
            }}
          >
            <TouchableOpacity onPress={handlePlusPress}>
              <IconButton
                icon={() => <Feather name="plus" size={35} color="#888" />}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: 55,
              top: 160,
            }}
          >
            <TouchableOpacity onPress={getRelationships}>
              <IconButton
                icon={() => (
                  <Feather name="rotate-ccw" size={30} color="#888" />
                )}
              />
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
