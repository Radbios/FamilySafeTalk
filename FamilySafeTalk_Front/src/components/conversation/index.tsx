import { ScrollView } from "react-native";
import { Container } from "./styles";
import { messagesData } from "../../data/messagesData";
import Messages from "../messages";

export default function Conversation() {
  return (
    <ScrollView>
      <Container>
        {messagesData.map((message) => (
          <Messages
            key={message.id}
            type={message.type}
            text={message.message}
          />
        ))}
      </Container>
    </ScrollView>
  );
}
