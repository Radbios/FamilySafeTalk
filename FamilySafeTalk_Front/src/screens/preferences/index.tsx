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
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useRoute } from "@react-navigation/native";

export default function Preferences() {
  const [checkedKeyword, setCheckedKeyword] = useState("sim");
  const [checked2, setChecked2] = useState("livre");
  const [checkedPermission, setCheckedPermission] = useState("não");
  const route = useRoute();
  const dependent = route.params.dependent;
  //guardian/dependent/{dependent_id}/preferences

  const getPreferences = async (dependent_id) => {
    const response = await api.get("/guardian/dependent/"+dependent_id+"/preferences");
    const add_contact_permission = response.data.data.add_contact_permission ? "sim" : "não";
    setCheckedPermission(add_contact_permission);
  }

  const setPreferences = async (dependent_id) => {
    const response = await api.get("/guardian/dependent/"+dependent_id+"/preferences");
    const add_contact_permission = response.data.data.add_contact_permission ? "sim" : "não";
    setCheckedPermission(add_contact_permission);
  }

  const saveKeywork = (data) => {
    setCheckedKeyword(data);
  }

  const savePermission = (data) => {
    setCheckedPermission(data);
  }

  useEffect( ()=> {
    getPreferences(dependent.id);
  }, [])

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
                status={checkedKeyword === "sim" ? "checked" : "unchecked"}
                color="black"
                onPress={() => saveKeywork("sim")}
              />
              <RadioButtonText onPress={() => saveKeywork("sim")}>
                Sim
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value="nao"
                status={checkedKeyword === "nao" ? "checked" : "unchecked"}
                color="black"
                onPress={() => saveKeywork("nao")}
              />
              <RadioButtonText onPress={() => saveKeywork("nao")}>
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
                onPress={() => savePermission("sim")}
              />
              <RadioButtonText onPress={() => savePermission("sim")}>
                Sim
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value="não"
                status={checkedPermission === "não" ? "checked" : "unchecked"}
                color="black"
                onPress={() => savePermission("não")}
              />
              <RadioButtonText onPress={() => savePermission("não")}>
                Não
              </RadioButtonText>
            </RadioBox>
          </InputContainer>
        </ContentBox>
      </ContentsContainer>
    </Container>
  );
}
