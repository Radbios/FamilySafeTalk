import React from "react";
import { ScrollView, Image } from "react-native";
import {
  AgeText,
  ButtonBox,
  ButtonText,
  ButtonsContainer,
  Container,
  ContentsBox,
  InfosBox,
  NameText,
} from "./styles";
import { dependentsData } from "../../data/dependents";

export default function CardDependents() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {dependentsData.map((user, index) => (
          <ContentsBox key={index}>
            <Image source={user.photo} />
            <InfosBox>
              <NameText>{user.name}</NameText>
              <AgeText>{user.age} anos</AgeText>
            </InfosBox>
          </ContentsBox>
        ))}
        <ButtonsContainer>
          <ButtonBox>
            <Image source={require("../../../assets/pluscircle.png")} />
            <ButtonText>Adicionar Dependente</ButtonText>
          </ButtonBox>
        </ButtonsContainer>
      </Container>
    </ScrollView>
  );
}
