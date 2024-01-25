import React from "react";
import { ScrollView, Image } from "react-native";
import {
  Container,
  ContentsBox,
  InfosBox,
  NameText,
  Separator,
} from "./styles";
import { contactsData } from "../../data/contacts";

export default function CardContacts() {
  const sortedContacts = contactsData
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

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
