import { createStackNavigator } from '@react-navigation/stack';
import Contatos from '../../components/contact';
import SeeContact from '../../components/seeContact';
import AddContact from '../../screens/addContact';
import Conversa from '../../screens/conversa';
import Chat from '../../components/talks';

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