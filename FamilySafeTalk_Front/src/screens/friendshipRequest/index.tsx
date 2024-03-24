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

  import { useState } from "react";
  import Modal from "../../components/modal";
import CardFriendshipRequest from "../../components/cardFriendshipRequest";
  
  export default function FriendshipRequestList() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleRefuse, setModalVisibleRefuse] = useState(false);
  
    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };

    const openModalRefuse = () => {
        setModalVisibleRefuse(true);
      };
    
      const closeModalRefuse = () => {
        setModalVisibleRefuse(false);
      };
  
    return (
      <Container>
        <ImageContainer>
          <Image source={require("../../../assets/iconFriend.png")} />
        </ImageContainer>
        <TitleBox>
          <TitleText>Solicitações de Amizade</TitleText>
        </TitleBox>
        <SubtitleBox>
          <SubtitleText>Conta de Fulano</SubtitleText>
        </SubtitleBox>
        <ContentsContainer>
          <CardFriendshipRequest openModal={openModal} openModalRefuse={openModalRefuse} />
        </ContentsContainer>
        {isModalVisible && (
          <Modal
            onClose={closeModal}
            onSubmit={() => {
              closeModal();
            }}
            deleteMessage="Aceitar"
          />
        )}
         {isModalVisibleRefuse && (
          <Modal
            onClose={closeModalRefuse}
            onSubmit={() => {
                closeModalRefuse();
            }}
            deleteMessage="Recusar"
          />
        )}
      </Container>
    );
  }
  