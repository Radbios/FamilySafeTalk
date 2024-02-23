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
} from "./styles";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

export default function Preferences() {
  const [checked, setChecked] = useState("sim");
  const [checked2, setChecked2] = useState("livre");
  const [checkedPermission, setCheckedPermission] = useState("não");

  return (
    <Container>
      <TitleBox>
        <TitleText>Preferências</TitleText>
      </TitleBox>
      <SubtitleBox>
        <SubtitleText>Conta de Fabiano</SubtitleText>
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
        <ContentBox>
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
        </ContentBox>
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
            <RadioBox>
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
            </RadioBox>
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
