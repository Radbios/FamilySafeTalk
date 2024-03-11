import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, ActivityIndicator } from "react-native";
import {
  Container,
  ContentsBox,
  InfosBox1,
  InfosBox2,
  NameText,
  Separator,
} from "./styles";
import { contactsData } from "../../data/contacts";
import api from "../../services/api";

export default function CardContacts({contacts, navigation}) {

  const sortedContacts = contacts != null ? contacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name)) : null;
    
  let currentLetter = "";

  async function getChat(id)
  {
    const response = await api.get('/chat/' + id + "/contact");
    navigation.navigate("Chat", {chatId: response.data.data.id})
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {
            sortedContacts && sortedContacts.length > 0 ? (sortedContacts.map((user, index) => {
              const firstLetter = user.name[0].toUpperCase();
  
              if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                return (
                  <React.Fragment key={index}>
                    <ContentsBox>
                      <InfosBox1>
                        <NameText>{currentLetter}</NameText>
                      </InfosBox1>
                    </ContentsBox>
                    <Separator />
                    <ContentsBox key={user.id} onPress={() => getChat(user.contact.id)}>
                      <Image 
                        source={user.photo}
                        style={{ width: 37, height: 37 }} 
                      />
                      <InfosBox2>
                        <NameText>{user.name}</NameText>
                      </InfosBox2>
                    </ContentsBox>
                  </React.Fragment>
                );
              } else {
                return (
                  <ContentsBox key={user.id}>
                    <Image 
                        source={user.photo}
                        style={{ width: 37, height: 37 }} 
                    />
                    <InfosBox>
                      <NameText>{user.name}</NameText>
                    </InfosBox>
                  </ContentsBox>
                );
              }
            }))
            : (
              <View></View>
            )
          }
      </Container>
    </ScrollView>
  );
}
