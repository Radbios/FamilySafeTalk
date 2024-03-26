import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
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
  SubTitleText,
  TitleContainer,
  TitleText,
} from "./styles";
import api from "../../services/api";

export default function AddContact() {
  const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  
  const handleArrowPress = () => {navigation.pop()}

  async function contactCreate(){
    const response = await api.post("/contact", 
      {
        email: email,
        name: name
      }
    );
    setName(null)
    setEmail(null)
    navigation.navigate('Contatos');
    
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}> 
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ContentsBox>
              <TitleContainer>
              <IconButton
                icon={() => (
                  <Feather name="plus" size={54} color="#FF69B4" />
                )}
                style={{
                  backgroundColor: "#ffb6c1",
                  borderRadius: 8,
                  padding: 8,
                  width: 80,
                  height: 80,
                }}
              />
                <TitleText>Adicionar contato</TitleText>
              </TitleContainer>
              <InputsContainer>
                <InputsBox 
                  placeholder="Nome" 
                  onChangeText={setName}
                  value={name}
                />
                <InputsBox 
                  placeholder="E-mail" 
                  onChangeText={setEmail}
                  value={email}
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
                <TouchableOpacity onPress={contactCreate}>
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
