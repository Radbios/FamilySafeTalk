import React, { useState } from "react";
import { ScrollView, Image } from "react-native";
import {
  ButtonContainer,
  ButtonText,
  CancelBlockButton,
  ContentBox,
  InfosBox,
  NameText,
} from "./styles";
import { BlockData } from "../../data/blockData";


export default function CardBlock({ unblock, contacts }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {contacts.map((item: any) => (
        <ContentBox key={item.id}>
          <InfosBox>
            <Image source={item.avatar} style={{ width: 50, height: 50 }} />
            <NameText>{item.name}</NameText>
          </InfosBox>
          <ButtonContainer>
            <CancelBlockButton onPress={() => unblock(item)}>
              <ButtonText>Desbloquear</ButtonText>
            </CancelBlockButton>
          </ButtonContainer>
        </ContentBox>
      ))}
    </ScrollView>
  );
}
