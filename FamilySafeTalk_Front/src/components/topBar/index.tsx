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

export default function TopBar({navigation, name, image}) {
  const urlImg = "../../../assets/" + image;

  const handleSeeContact = () => {
    navigation.push("Ver Contato");
  }

  return (
    <Bar>
      <LeftContents>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={require("../../../assets/navigate_before.png")} />
        </TouchableOpacity>
          <UserContent>
            <Image source={{uri:urlImg}} />
            <TextUser>{name}</TextUser>
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
