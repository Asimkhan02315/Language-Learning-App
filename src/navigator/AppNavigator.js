import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Pressable } from 'native-base';
const localImage = require('../assests/icons/images3.png');
const profileImage = require('../assests/icons/images5.png');
import { NativeBaseProvider, extendTheme } from 'native-base';
import LessonScreen from '../screens/LessonScreen';
import PracticeScreen from '../screens/PracticeScreen';
import DailyScreen from '../screens/DailyScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
    <Drawer.Navigator
        screenOptions={({ navigation }) => ({
            drawerStyle: { width: 390 },
            drawerPosition: 'left',
            headerLeft: () => (
                <Pressable
                    onPress={() => navigation.toggleDrawer()}
                    style={{ paddingLeft: 20 }}
                >
                    <Image source={localImage} style={{ width: 22, height: 22, tintColor: '#160B5C' }} alt="Description of the image" />
                </Pressable>
            ),
            headerRight: () => (
                <Pressable
                    // onPress={() => navigation.toggleDrawer()}
                    style={{ paddingRight: 20, paddingTop: 10 }}
                >
                    <Image source={profileImage} borderRadius={50} size={50} alt="Description of the image" />
                </Pressable>
            )
        })}
    >
        <Drawer.Screen
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#eaeaea',
                },
                headerTintColor: '#001345',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                },
            }}
            name="Home" component={HomeScreen} />
    </Drawer.Navigator>
)

const AppNavigator = () => {

    const newColorTheme = {
        brand: {
            900: '#5B8DF6',
            800: '#ffffff',
            700: '#cccccc',
        },
    };

    const theme = extendTheme({
        colors: newColorTheme,
    });

    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer >
                <Stack.Navigator
                    initialRouteName="SignUp"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="DrawerStack" component={DrawerStack} />
                    <Stack.Screen
                        options={{
                            title: 'Lesson',
                            headerStyle: {
                                backgroundColor: '#F9CB1E',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontSize: 20,
                            },
                            headerShown: true
                        }}
                        name="Lesson" component={LessonScreen} />
                    <Stack.Screen
                        options={{
                            title: 'Practice',
                            headerStyle: {
                                backgroundColor: '#F9CB1E',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontSize: 20,
                            },
                            headerShown: true
                        }}
                        name="Practice" component={PracticeScreen} />
                    <Stack.Screen
                        options={{
                            title: 'Daily',
                            headerStyle: {
                                backgroundColor: '#F9CB1E',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontSize: 20,
                            },
                            headerShown: true
                        }}
                        name="Daily" component={DailyScreen} />
                    <Stack.Screen
                        options={{
                            title: 'Account',
                            headerStyle: {
                                backgroundColor: '#F9CB1E',
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerTitleStyle: {
                                fontSize: 20,
                            },
                            headerShown: true
                        }}
                        name="Account" component={MyAccountScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

export default AppNavigator