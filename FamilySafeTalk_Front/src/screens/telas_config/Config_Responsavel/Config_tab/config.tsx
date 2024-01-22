import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { InputsBox, Container, ContentsBox, InputsContainer, SubTitleText, TitleContainer, TitleText } from './styles';

export function AddContact() {

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <IconButton
              icon={() => <Feather name="plus" size={54} color="#FF69B4" />}
              style={{
                backgroundColor: '#ffb6c1',
                borderRadius: 8,  // Ajuste este valor para a borda arredondada desejada
                padding: 8,
                width: 80,
                height: 80       // Ajuste este valor para o espaço interno desejado
              }}
            />
            <TitleText>Adicionar contato</TitleText>
            <SubTitleText>Perfil de Bernardo</SubTitleText>
          </TitleContainer>
          <InputsContainer>
            <InputsBox placeholder="Nome" />
            <InputsBox placeholder="Sobrenome" />
            <InputsBox placeholder="Telefone Celular" />
            <InputsBox placeholder="E-mail" />
          </InputsContainer>
          <View 
            style={{ 
              position: 'absolute', 
              left: 6, 
              bottom: -60,
            }}>
            <IconButton
              icon={() => <Feather name="arrow-left" size={30} color="#000" />}
            />
          </View>
          <View 
            style={{ 
              position: 'absolute', 
              right: 6, 
              bottom: -60,
            }}>
            <IconButton
              icon={() => <Feather name="check" size={30} color="#4169E1" />}
            />
          </View>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
};

export default AddContact;
