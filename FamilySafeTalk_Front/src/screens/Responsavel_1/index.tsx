import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
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
  ButtonsContainer,
  ButtonBox,
  ButtonName,
  DependentIndex
} from "./styles";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

export default function Responsavel1() {

  const {user} = useAuth();

  const navigation = useNavigation();

  const [relationships, setRelationships] = useState([]);

  async function getRelationships(){
    const response = await api.get("/guardian/dependent");
    setRelationships(response.data.data)
  }

  function handlePlusPress(){
    navigation.push('Criar Dependente')
  }

  useEffect( () => {
    getRelationships();
  }, []);
  

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

            <DependentIndex>
              Dependentes
            </DependentIndex>

            <ButtonsContainer>
              {
              relationships.map((e) => (
                <ButtonBox key={e.dependent.id} 
                  onPress={ () => {
                    navigation.push("Ver Dependente", {dependent: e.dependent})
                  }}
                >
                    <IconButton
                      icon={() => <FontAwesome name="user" size={25} color="#FFFFFF" />}
                      style={{
                        backgroundColor: "#000000",
                        borderRadius: 20,
                        padding: 1,
                        width: 35,
                        height: 35,
                        marginLeft: 15,
                      }}
                    />
                    <ButtonName>{e.dependent.name}</ButtonName>
                </ButtonBox>
              ))}
            </ButtonsContainer>
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
                  icon={() => <Feather name="loader" size={30} color="#888" />}
                />
              </TouchableOpacity>
            </View>
        </Container>
        
      </ScrollView>
    </GestureHandlerRootView>
  );
}
