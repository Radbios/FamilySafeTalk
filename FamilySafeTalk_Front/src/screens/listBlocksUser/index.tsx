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

export default function ListBlocksUser() {

  const unblock = (contact) => {
    unblockContact(contact)
  };

  const [contacts, setContacts] = useState([]);

  const navigation = useNavigation();

  async function getBlockedContacts(id) {
    const response = await api.get("/blockedContacts");
    setContacts(response.data.data);
  }

  async function unblockContact(contact) {
    const response = await api.put('/contact/' + contact.id, 
    {
      is_blocked: false,
      name: contact.name
    });

    const updatedContacts = contacts.filter((cont) => cont.id !== contact.id);

    setContacts(updatedContacts)

  }

  useEffect( () => {
    getBlockedContacts();
  }, [])

  return (
    <Container>
      <ImageContainer>
        <Image source={require("../../../assets/iconBlocks.png")} />
      </ImageContainer>
      <TitleBox>
        <TitleText>Contatos Bloqueados</TitleText>
      </TitleBox>
      <ContentsContainer>
        <CardBlock contacts={contacts} unblock={unblock} />
      </ContentsContainer>
    </Container>
  );
}
