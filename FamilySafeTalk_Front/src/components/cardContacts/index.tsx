import React, { useEffect, useState } from "react";
import { ScrollView, Image } from "react-native";
import {
  Container,
  ContentsBox,
  InfosBox,
  NameText,
  Separator,
} from "./styles";
import { contactsData } from "../../data/contacts";
import api from "../../services/api";

export default function CardContacts() {

  const [contacts, setContacts] = useState(null);

  async function getContacts(){
    const response = await api.get("/contact");
    setContacts(response.data)
  }

  useEffect(() => {
    getContacts();
  }, []);

  const sortedContacts = contacts != null ? contacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name)) : null;

    console.log(sortedContacts);

  let currentLetter = "";

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {sortedContacts.map((user, index) => {
          const firstLetter = user.name[0].toUpperCase();

          if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            return (
              <React.Fragment key={index}>
                <ContentsBox>
                  <InfosBox>
                    <NameText>{currentLetter}</NameText>
                  </InfosBox>
                </ContentsBox>
                <Separator />
                <ContentsBox key={index + 1}>
                  <Image source={user.photo} />
                  <InfosBox>
                    <NameText>{user.name}</NameText>
                  </InfosBox>
                </ContentsBox>
              </React.Fragment>
            );
          } else {
            return (
              <ContentsBox key={index}>
                <Image source={user.photo} />
                <InfosBox>
                  <NameText>{user.name}</NameText>
                </InfosBox>
              </ContentsBox>
            );
          }
        })}
      </Container>
    </ScrollView>
  );
}
