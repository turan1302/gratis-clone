import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { View, Platform, Text, StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import CartNavigator from './CartNavigator';
import CampaignsNavigator from './CampaignsNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TAB_COLOR = '#5C2D91';
const TAB_COLOR_INACTIVE = '#5C2D91';

const TAB_CONFIG = {
    HomeNavigator: { label: 'Anasayfa', icon: 'home' },
    CategoriesNavigator: { label: 'Kategoriler', icon: 'grid' },
    CartNavigator: { label: 'Sepet', icon: 'shopping-bag' },
    CampaignsNavigator: { label: 'Kampanyalar', icon: 'volume-2' },
    ProfileNavigator: { label: 'Profil', icon: 'user' },
};

const PlaceholderScreen = ({ title }) => (
    <View style={placeholderStyles.container}>
        <Text style={placeholderStyles.text}>{title}</Text>
    </View>
);

const placeholderStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 16,
        color: '#5C2D91',
        fontWeight: '600',
    },
});

const WelcomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = ['Menu'];
                const tabConfig = TAB_CONFIG[route.name];

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: focused ? '600' : '500',
                                color: TAB_COLOR,
                                marginTop: 2,
                            }}
                        >
                            {tabConfig?.label}
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => {
                        const iconName = tabConfig?.icon ?? 'circle';
                        const color = focused ? TAB_COLOR : TAB_COLOR_INACTIVE;

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Feather name={iconName} size={22} color={color} />
                                {focused && (
                                    <View
                                        style={{
                                            width: 5,
                                            height: 5,
                                            borderRadius: 2.5,
                                            backgroundColor: TAB_COLOR,
                                            marginTop: 3,
                                        }}
                                    />
                                )}
                            </View>
                        );
                    },
                    tabBarStyle: tabBarHidden.includes(routeName)
                        ? { display: 'none' }
                        : {
                            backgroundColor: '#FFFFFF',
                            borderTopWidth: 1,
                            borderTopColor: '#E8E8E8',
                            height: Platform.OS === 'ios' ? 84 : 64,
                            paddingTop: 6,
                            paddingBottom: Platform.OS === 'ios' ? 24 : 8,
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                    tabBarItemStyle: {
                        paddingVertical: 2,
                    },
                };
            }}
        >
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
            <Tab.Screen
                name="CategoriesNavigator"
                component={CategoriesNavigator}
            />
            <Tab.Screen
                name="CartNavigator"
                component={CartNavigator}
            />
            <Tab.Screen
                name="CampaignsNavigator"
                component={CampaignsNavigator}
            />
            <Tab.Screen
                name="ProfileNavigator"
                component={ProfileNavigator}
            />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;
