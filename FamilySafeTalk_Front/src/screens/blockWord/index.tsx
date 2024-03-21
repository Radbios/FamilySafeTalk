import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native"


import {
  InputsBox,
  Container,
  ContentsBox,
  InputsContainer,
  TitleContainer,
  TitleText,
} from "./styles";
import api from "../../services/api";

export default function BlockWord() {
  const navigation = useNavigation();
  
  const handleArrowPress = () => {navigation.pop();};


  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}> 
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ContentsBox>
              <TitleContainer>
              <IconButton
                icon={() => (
                  <Feather name="x-circle" size={54} color="#FF69B4" />
                )}
                style={{
                  backgroundColor: "#ffb6c1",
                  borderRadius: 8,
                  width: 80,
                  height: 80,
                }}
              />
                <TitleText>Qual a palavra você quer bloquear?</TitleText>
              </TitleContainer>
              <InputsContainer>
                <InputsBox 
                  placeholder="Palavra" 
                />

                <View 
                  style={{ 
                    alignSelf: 'flex-end', 
                    position: 'absolute', 
                    flexDirection: 'row',
                    left: -10,
                    bottom: -55
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
                    alignSelf: 'flex-end', 
                    position: 'absolute', 
                    flexDirection: 'row',
                    right: -10,
                    bottom: -55
                    }}
                >               
                <TouchableOpacity onPress={() => {}}>
                  <IconButton
                    icon={() => (
                      <Feather name="check" size={30} color="#4169E1" />
                    )}
                  />
                </TouchableOpacity>
                </View>
              </InputsContainer>
            </ContentsBox>
          </Container>
        </ScrollView>
    </GestureHandlerRootView>
  );
}
