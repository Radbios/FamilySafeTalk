import React, { useState } from "react";
import {
  MessageContainer,
  MessageContents,
  MessagesAudioButton,
} from "./styles";
import { FontAwesome } from "@expo/vector-icons";

export default function MessagesAudio({ type }: any) {
  const [isPlay, setIsPlay] = useState(false);

  const handlePress = () => {
    setIsPlay((prevIsPlay) => !prevIsPlay);
  };

  const backgroundColor = type === "Eu" ? "#669CF4" : "#6c757d";
  const alignItems = type === "Eu" ? "flex-end" : "flex-start";

  return (
    <MessageContainer style={{ alignItems }}>
      <MessageContents style={{ backgroundColor }}>
        <MessagesAudioButton onPress={handlePress}>
          <FontAwesome
            name={isPlay ? "pause-circle-o" : "caret-right"}
            size={isPlay ? 30 : 30}
            color="white"
          />
        </MessagesAudioButton>
      </MessageContents>
    </MessageContainer>
  );
}
