import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Formulario from "./Formulario";
import ListaAssistir from "./ListaAssistir";
import ListaAssistidos from './ListaAssistidos';
import TelaInicial from "./TelaInicial";

const Drawer = createDrawerNavigator();

export default function AppNavegacao() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Tela inicial" >
                <Drawer.Screen name="Tela inicial" component={TelaInicial} />
                <Drawer.Screen name="Formulário" component={Formulario} />
                <Drawer.Screen name="Assistidos" component={ListaAssistidos} />
                <Drawer.Screen name="Assistir" component={ListaAssistir} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
} 