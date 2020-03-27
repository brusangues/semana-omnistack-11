//docs.expo.com -> routes & navigation
    //utilizar reactNavigation
    //reactnavigation.org
    //Tipos de navegação
        //Navegação por abas
        //navegação por drawer
        //Stack navigator - apenas por botões

import React from 'react'; //para poder usar essa sintaxe estilo tags
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from  './pages/Incidents';
import Detail from  './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screeenOptions={{ headerShown: false, headerMode: 'screen'}}>
                <AppStack.Screen name = "Incidents" component={Incidents} />
                <AppStack.Screen name = "Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}