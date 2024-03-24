import React from "react";
import {
  Container,
  TitleBox,
  TitleText,
  SubtitleBox,
  SubtitleText,
  ContentsContainer,
  ImageContainer,
  NoBlockedContactsText,
  BackContainer,
} from "./styles";

import { Image, TouchableOpacity } from "react-native";
import CardBlock from "../../components/cardBlock";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default function ListBlocks() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const dependent = route.params.dependent;

  async function getBlockedContacts(id) {
    const response = await api.get(
      "/guardian/dependent/" + id + "/blockedContacts"
    );
    setContacts(response.data.data);
  }

  async function unblockContact(contact) {
    const response = await api.put("/contact/" + contact.id, {
      is_blocked: false,
      name: contact.name,
    });
  }
  const handleArrowPress = () => {
    navigation.pop();
  };

  useEffect(() => {
    getBlockedContacts(dependent.id);
  }, []);

  const openModal = (contact) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <BackContainer onPress={handleArrowPress}>
        <IconButton
          icon={() => <Feather name="arrow-left" size={30} color="#000" />}
        />
      </BackContainer>
      <ImageContainer>
        <Image source={require("../../../assets/iconBlocks.png")} />
      </ImageContainer>
      <TitleBox>
        <TitleText>Contatos Bloqueados</TitleText>
      </TitleBox>
      <SubtitleBox>
        <SubtitleText>Conta de {dependent.name}</SubtitleText>
      </SubtitleBox>
      <ContentsContainer>
        {contacts.length > 0 ? (
          <CardBlock contacts={contacts} openModal={openModal} />
        ) : (
          <NoBlockedContactsText>
            Nenhum contato bloqueado
          </NoBlockedContactsText>
        )}
      </ContentsContainer>
      {isModalVisible && (
        <Modal
          onClose={closeModal}
          onSubmit={() => {
            closeModal();
          }}
          deleteMessage="Desbloquear"
        />
      )}
    </Container>
  );
}
