import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    );
};

export default CategoriesNavigator;