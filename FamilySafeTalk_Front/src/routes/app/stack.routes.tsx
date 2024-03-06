import { createStackNavigator } from '@react-navigation/stack';
import Contatos from '../../components/contact';
import SeeContact from '../../components/seeContact';
import AddContact from '../../screens/addContact';
import Conversa from '../../screens/conversa';
import Chat from '../../components/talks';
import { useRoute } from '@react-navigation/native';
import Responsavel1 from '../../screens/Responsavel_1';
import Responsavel3 from '../../screens/Responsavel_3';
import Cadastro3 from '../../screens/cadastro/cadastro3';

const Stack = createStackNavigator();

// Defina a navegação para as abas Configurações
export function ContatoStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Contatos"
            component={Contatos}
        />
        <Stack.Screen
            name="AddContact"
            component={AddContact}
        />
        </Stack.Navigator>
    );
}

export function ConversasStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Conversas"
                component={Chat}
            />
            <Stack.Screen
                name="Chat"
                component={Conversa}
            />
        </Stack.Navigator>
    );
}

export function DependenteStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Dependentes"
                component={Responsavel1}
            />
            <Stack.Screen
                name="Ver Dependente"
                component={Responsavel3}
            />
             <Stack.Screen
                name="Criar Dependente"
                component={Cadastro3}
            />
        </Stack.Navigator>
    );
}