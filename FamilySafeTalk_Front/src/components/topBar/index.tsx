import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import {
  Bar,
  LeftContents,
  UserContent,
  TextUser,
  RightContent,
} from "./styles";

export default function TopBar() {
  return (
    <Bar>
      <LeftContents>
        <TouchableOpacity>
          <Image source={require("../../../assets/navigate_before.png")} />
        </TouchableOpacity>
        <UserContent>
          <Image source={require("../../../assets/usericon.png")} />
          <TextUser>Pedro</TextUser>
        </UserContent>
      </LeftContents>
      <RightContent>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/botao-de-emergencia.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </RightContent>
    </Bar>
  );
}
