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
import { useState } from "react";
import Modal from "../../components/modal";

export default function ListBlocks() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <ImageContainer>
        <Image source={require("../../../assets/iconBlocks.png")} />
      </ImageContainer>
      <TitleBox>
        <TitleText>Contatos Bloqueados</TitleText>
      </TitleBox>
      <SubtitleBox>
        <SubtitleText>Conta de Fabiano</SubtitleText>
      </SubtitleBox>
      <ContentsContainer>
        <CardBlock openModal={openModal} />
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
