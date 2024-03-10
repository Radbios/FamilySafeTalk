import {
  Container,
  TitleBox,
  TitleText,
  SubtitleBox,
  SubtitleText,
  ContentsContainer,
  ImageContainer,
} from "./styles";

import { Image } from "react-native";
import CardBlock from "../../components/cardBlock";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

export default function ListBlocks() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = (contact) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [contacts, setContacts] = useState([]);

  const navigation = useNavigation();

  const route = useRoute();
  const dependent = route.params.dependent;

  async function getBlockedContacts(id) {
    const response = await api.get("/guardian/dependent/" + id + "/blockedContacts");
    setContacts(response.data.data);
  }

  async function unblockContact(contact) {
    const response = await api.put('/contact/' + contact.id, 
    {
      is_blocked: false,
      name: contact.name
    });
  }

  useEffect( () => {
    getBlockedContacts(dependent.id);
  }, [])

  return (
    <Container>
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
        <CardBlock contacts={contacts} openModal={openModal} />
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
