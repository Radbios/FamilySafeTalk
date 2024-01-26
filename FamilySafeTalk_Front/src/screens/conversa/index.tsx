import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, Talks } from "./styles";
import TopBar from "../../components/topBar";
import { Text } from "react-native";

export default function Conversa() {
  return (
    <GestureHandlerRootView>
      <Container>
        <TopBar />
        <Talks>
          <Text>oi</Text>
        </Talks>
        <TopBar />
      </Container>
    </GestureHandlerRootView>
  );
}
