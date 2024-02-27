import { ScrollView } from "react-native";
import { Container } from "./styles";
import { messagesData } from "../../data/messagesData";
import Messages from "../messages";

export default function Conversation({messages, newMessages}) {
  return (
    <ScrollView>
      <Container>
        {messages.map((message) => (
          <Messages
            key={message.id}
            type={message.sender.name}
            text={message.content}
          />
        ))}
        {
          newMessages ? 
          newMessages.map((message) => {
            <Messages
              key={message.id}
              type={message.sender.name}
              text={message.content}
            />
          }) : ""
        }
      </Container>
    </ScrollView>
  );
}
