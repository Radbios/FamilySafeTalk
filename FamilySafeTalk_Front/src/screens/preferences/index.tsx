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
  const [checkedKeyword, setCheckedKeyword] = useState(1);
  const [checked2, setChecked2] = useState("livre");
  const [checkedPermission, setCheckedPermission] = useState(0);
  const route = useRoute();
  const dependent = route.params.dependent;

  const getPreferences = async (dependent_id) => {
    const response = await api.get("/guardian/dependent/"+dependent_id+"/preferences");
    const add_contact_permission = response.data.data.add_contact_permission;
    const keyword_permission = response.data.data.keywords;
    setCheckedPermission(add_contact_permission);
    setCheckedKeyword(keyword_permission);
  }

  const setPreferences = async (dependent_id, key, perm) => {
    const response = await api.put("/guardian/dependent/"+dependent_id+"/preferences", {
      'keywords': key,
      'add_contact_permission': perm
    });
    const add_contact_permission = response.data.data.add_contact_permission;
    setCheckedPermission(add_contact_permission);

    const keyword_permission = response.data.data.keywords;
    setCheckedKeyword(keyword_permission);
  }

  const saveKeywork = (data) => {
    setPreferences(dependent.id, data, checkedPermission);
  }

  const savePermission = (data) => {
    setPreferences(dependent.id, checkedKeyword, data);
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
                value={1}
                status={checkedKeyword === 1 ? "checked" : "unchecked"}
                color="black"
                onPress={() => saveKeywork(1)}
              />
              <RadioButtonText onPress={() => saveKeywork(1)}>
                Sim
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value={0}
                status={checkedKeyword === 0 ? "checked" : "unchecked"}
                color="black"
                onPress={() => saveKeywork(0)}
              />
              <RadioButtonText onPress={() => saveKeywork(0)}>
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
                value={"}opcao1"
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
                value={"}opcao2"
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
                value={"}livre"
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
                value={1}
                status={checkedPermission === 1 ? "checked" : "unchecked"}
                color="black"
                onPress={() => savePermission(1)}
              />
              <RadioButtonText onPress={() => savePermission(1)}>
                Sim
              </RadioButtonText>
            </RadioBox>
            <RadioBox>
              <RadioButton
                value={0}
                status={checkedPermission === 0 ? "checked" : "unchecked"}
                color="black"
                onPress={() => savePermission(0)}
              />
              <RadioButtonText onPress={() => savePermission(0)}>
                Não
              </RadioButtonText>
            </RadioBox>
          </InputContainer>
        </ContentBox>
      </ContentsContainer>
    </Container>
  );
}
