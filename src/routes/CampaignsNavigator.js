import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Campaigns from '../screens/Campaigns';

const Stack = createNativeStackNavigator();

const CampaignsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Campaigns"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Campaigns" component={Campaigns} />
        </Stack.Navigator>
    );
};

export default CampaignsNavigator;