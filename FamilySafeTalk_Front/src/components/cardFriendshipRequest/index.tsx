import React, { useState } from "react";
import { ScrollView, Image } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  ButtonContainer,
  CancelBlockButton,
  ContentBox,
  InfosBox,
  NameText,
} from "./styles";
import { BlockData } from "../../data/blockData";

interface CardBlockProps {
  openModal: () => void;
  openModalRefuse: () => void;
}
export default function CardFriendshipRequest({contacts, openModal, openModalRefuse }: CardBlockProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {contacts.map((item: any) => (
        <ContentBox key={item.id}>
          <InfosBox>
            <Image source={require("../../../assets/usericon.png")} style={{ width: 50, height: 50 }} />
            <NameText>{item.name}</NameText>
          </InfosBox>
          <ButtonContainer>
            <CancelBlockButton onPress={() => openModalRefuse(item.user_id, item.id)}>
                <IconButton
                  icon={() => (
                    <FontAwesome name="times" size={24} color="#F1006D" />
                  )}

                />
            </CancelBlockButton>
            <CancelBlockButton onPress={() => openModal(item.user_id, item.id)}>
                <IconButton
                  icon={() => (
                    <FontAwesome name="check" size={24} color="#004ECC" />
                  )}

                />
            </CancelBlockButton>
          </ButtonContainer>
        </ContentBox>
      ))}
    </ScrollView>
  );
}
