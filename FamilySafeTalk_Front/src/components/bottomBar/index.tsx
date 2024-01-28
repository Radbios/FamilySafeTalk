import React from "react";
import { Image } from "react-native";
import { Bar, ButtonSend, InputsBox, InputsContainer } from "./styles";

export default function BottomBar() {
  return (
    <Bar>
      <InputsContainer>
        <InputsBox placeholder="" />
        <ButtonSend>
          <Image
            source={require("../../../assets/arrow-right.png")}
            style={{ width: 35, height: 35 }}
          />
        </ButtonSend>
      </InputsContainer>
    </Bar>
  );
}
