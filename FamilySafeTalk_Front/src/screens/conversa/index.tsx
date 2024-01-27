import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, Talks } from "./styles";
import TopBar from "../../components/topBar";
import BottomBar from "../../components/bottomBar";
import Conversation from "../../components/conversation";

export default function Conversa() {
  return (
    <GestureHandlerRootView>
      <Container>
        <TopBar />
        <Talks>
          <Conversation />
        </Talks>
        <BottomBar />
      </Container>
    </GestureHandlerRootView>
  );
}
