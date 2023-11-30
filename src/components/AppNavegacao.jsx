// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import * as React from 'react';
import { Button, View } from 'react-native';
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
            <Drawer.Navigator initialRouteName="Tela inicial">
                <Drawer.Screen name="Tela inicial" component={TelaInicial} />
                <Drawer.Screen name="Formulário" component={Formulario} />
                <Drawer.Screen name="Assistidos" component={ListaAssistidos} />
                <Drawer.Screen name="Para assistir" component={ListaAssistir} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}   

{/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}