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

interface CardBlockProps {
  openModal: () => void;
}
export default function CardBlock({ openModal }: CardBlockProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {BlockData.map((item: any) => (
        <ContentBox key={item.id}>
          <InfosBox>
            <Image source={item.avatar} style={{ width: 50, height: 50 }} />
            <NameText>{item.name}</NameText>
          </InfosBox>
          <ButtonContainer>
            <CancelBlockButton onPress={openModal}>
              <ButtonText>Desbloquear</ButtonText>
            </CancelBlockButton>
          </ButtonContainer>
        </ContentBox>
      ))}
    </ScrollView>
  );
}
