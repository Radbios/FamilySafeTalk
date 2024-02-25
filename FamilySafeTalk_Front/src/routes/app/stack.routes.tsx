import { createStackNavigator } from '@react-navigation/stack';
import Contatos from '../../components/contact';
import SeeContact from '../../components/seeContact';
import AddContact from '../../screens/addContact';
import Conversa from '../../screens/conversa';
import Chat from '../../components/talks';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

// Defina a navegação para as abas Configurações
export function ContatoStackNavigator() {
    const route = useRoute();
    const {socket} = route.params;
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
    const route = useRoute();
    const {socket} = route.params;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Conversas"
                initialParams={{socket:socket}}
                component={Chat}
            />
            <Stack.Screen
                name="Chat"
                initialParams={{socket:socket}}
                component={Conversa}
            />
        </Stack.Navigator>
    );
}