import {
  Container,
  TitleBox,
  TitleText,
  SubtitleBox,
  SubtitleText,
  ContentsContainer,
  ContentBox,
  ContentText,
  InputContainer,
  RadioButtonText,
  RadioBox,
  BackContainer,
} from "./styles";
import { IconButton, RadioButton } from "react-native-paper";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function Preferences({ navigation }) {
  const [checked, setChecked] = useState("sim");
  const [checked2, setChecked2] = useState("livre");
  const [checkedPermission, setCheckedPermission] = useState("não");

  const handleArrowPress = () => {
    navigation.pop();
  };

  return (
    <Container>
      <BackContainer onPress={handleArrowPress}>
        <IconButton
          icon={() => <Feather name="arrow-left" size={30} color="#000" />}
        />
      </BackContainer>
      <TitleBox>
        <TitleText>Preferências</TitleText>
      </TitleBox>
      <SubtitleBox>
        <SubtitleText>Conta de Fulano</SubtitleText>
      </SubtitleBox>
      <ContentsContainer>
        <ContentBox>
          <ContentText>Identificação de palavras-chave</ContentText>
          <InputContainer>
            <RadioBox>
              <RadioButton
                value="sim"
                status={checked === "sim" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setChecked("sim")}
              />
              <RadioButtonText onPress={() => setChecked("sim")}>
                Sim
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value="nao"
                status={checked === "nao" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setChecked("nao")}
              />
              <RadioButtonText onPress={() => setChecked("nao")}>
                Não
              </RadioButtonText>
            </RadioBox>
          </InputContainer>
        </ContentBox>
        {/* <ContentBox>
          <ContentText>Restrição de Horário</ContentText>
          <InputContainer>
            <RadioBox>
              <RadioButton
                value="opcao1"
                status={checked2 === "opcao1" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setChecked2("opcao1")}
              />
              <RadioButtonText onPress={() => setChecked2("opcao1")}>
                22h ás 07h
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value="opcao2"
                status={checked2 === "opcao2" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setChecked2("opcao2")}
              />
              <RadioButtonText onPress={() => setChecked2("opcao2")}>
                21h ás 06h
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value="livre"
                status={checked2 === "livre" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setChecked2("livre")}
              />
              <RadioButtonText onPress={() => setChecked2("livre")}>
                Livre
              </RadioButtonText>
            </RadioBox>
          </InputContainer>
        </ContentBox> */}
        <ContentBox>
          <ContentText>Permissão para adicionar contato</ContentText>
          <InputContainer>
            <RadioBox>
              <RadioButton
                value="sim"
                status={checkedPermission === "sim" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setCheckedPermission("sim")}
              />
              <RadioButtonText onPress={() => setCheckedPermission("sim")}>
                Sim
              </RadioButtonText>
            </RadioBox>
            {/* <RadioBox>
              <RadioButton
                value="opcao2"
                status={
                  checkedPermission === "simWpermission"
                    ? "checked"
                    : "unchecked"
                }
                color="black"
                onPress={() => setCheckedPermission("simWpermission")}
              />
              <RadioButtonText
                onPress={() => setCheckedPermission("simWpermission")}
              >
                Sim, mas solicitar aprovação
              </RadioButtonText>
            </RadioBox> */}
            <RadioBox>
              <RadioButton
                value="não"
                status={checkedPermission === "não" ? "checked" : "unchecked"}
                color="black"
                onPress={() => setCheckedPermission("não")}
              />
              <RadioButtonText onPress={() => setCheckedPermission("não")}>
                Não
              </RadioButtonText>
            </RadioBox>
          </InputContainer>
        </ContentBox>
      </ContentsContainer>
    </Container>
  );
}
