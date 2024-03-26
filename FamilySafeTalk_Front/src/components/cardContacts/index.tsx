import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, ActivityIndicator } from "react-native";
import {
  Container,
  ContentsBox,
  InfosBox,
  InfosBox1,
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

  function showContact(contact)
  {
    navigation.push("Ver Contato", {contact})
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container style={{
        flex:1,
        }}>
        {
            sortedContacts && sortedContacts.length > 0 ? (sortedContacts.map((contact, index) => {
              const firstLetter = contact.name[0].toUpperCase();
  
              if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                return (
                  <React.Fragment key={contact.id}>
                    <ContentsBox>
                      <InfosBox1>
                        <NameText>{currentLetter}</NameText>
                      </InfosBox1>
                    </ContentsBox>
                    <Separator />
                    <ContentsBox key={contact.id} onPress={() => showContact(contact)}>
                      <Image 
                        source={contact.photo}
                        style={{ width: 37, height: 37 }} 
                      />
                      
                      <InfosBox>
                        <NameText>{contact.name}</NameText>
                      </InfosBox>
        
                    </ContentsBox>
                  </React.Fragment>
                );
              } else {
                return (
                  <ContentsBox key={contact.id} onPress={() => showContact(contact)}>
                    <Image 
                        source={contact.photo}
                        style={{ width: 37, height: 37 }} 
                    />
                    <InfosBox>
                      <NameText>{contact.name}</NameText>
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
