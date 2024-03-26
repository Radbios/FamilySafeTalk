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

import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import CardFriendshipRequest from "../../components/cardFriendshipRequest";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
  
// Route::get("/guardian/dependent/{dependent_id}/contactPermissions", [DependentController::class, "getContactPermissions"]);
// Route::get("/guardian/dependent/{dependent_id}/acceptContact/{invite_id}", [DependentController::class, "acceptContact"]);
export default function FriendshipRequestList() {
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [isModalVisibleRefuse, setModalVisibleRefuse] = useState(false);

  const [contacts, setContacts] = useState([]);
  const route = useRoute();
  const dependent = route.params.dependent;

  const getRequests = async (dependent_id) => {
    const response = await api.get('/guardian/dependent/'+dependent_id+'/contactPermissions');
    setContacts(response.data.data);
  }

  const acceptRequests = async (dependent_id, item_id, status) => {
    const response = await api.post('/guardian/dependent/'+dependent_id+'/acceptContact/' + item_id,{
      status: status
    });
    
    const updatedContacts = contacts.filter((contact) => contact.id !== item_id);
    setContacts(updatedContacts);
  }

  useEffect( () => {
    getRequests(dependent.id)
  }, [])

  const openModal = (dependente_id, request_id) => {
    // console.log(dependente_id + " " + request_id)
    acceptRequests(dependente_id, request_id, 1);
  };

  const closeModal = () => {
    // setModalVisible(false);
  };

  const openModalRefuse = (dependente_id, request_id) => {
      // setModalVisibleRefuse(true);
    acceptRequests(dependente_id, request_id, 0);

    };
  
    const closeModalRefuse = () => {
      // setModalVisibleRefuse(false);
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
        <SubtitleText>Conta de Fabiano</SubtitleText>
      </SubtitleBox>
      <ContentsContainer>
        <CardFriendshipRequest contacts={contacts} openModal={openModal} openModalRefuse={openModalRefuse} />
      </ContentsContainer>
      {/* {isModalVisible && (
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
      )} */}
    </Container>
  );
}
  