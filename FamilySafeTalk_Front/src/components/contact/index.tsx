import { View, Image } from "react-native";
import { ButtonContainer, Container } from "./styles";
import CardContacts from "../cardContacts";

export default function Contatos() {
  return (
    <Container>
      <ButtonContainer>
        <Image source={require("../../../assets/plusicon.png")} />
      </ButtonContainer>
      <CardContacts />
    </Container>
  );
}
