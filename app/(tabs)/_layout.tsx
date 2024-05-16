import Colors from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import SignOutTouchable from '@/components/SignOutTouchable';
import NavHeaderButton from '@/components/NavHeaderButton';

const TabLayout = () => {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.primary,
        }}>
            <Tabs.Screen name='photo' options={{
                title: 'Photo',
                headerStyle: { backgroundColor: Colors.white },
                headerTitleStyle:{color: Colors.secondary, textAlign: 'center', fontWeight: 'bold'},
                tabBarLabel: 'Photo',
                tabBarStyle: {backgroundColor: Colors.white },
                tabBarIcon: ({color, size}) => 
                    <Ionicons name="camera-sharp" color={color} size={size}/>,
                headerRight: () => NavHeaderButton("images"),
            }}
            />
            <Tabs.Screen name='history' options={{
                title: 'Historique',
                headerStyle: { backgroundColor: Colors.white },
                headerTitleStyle:{color: Colors.secondary, textAlign: 'center', fontWeight: 'bold'},
                tabBarStyle: {backgroundColor: Colors.white },
                tabBarLabel: 'Historique',
                tabBarIcon: ({color, size}) => 
                    <Ionicons name="images" color={color} size={size}/>,
                headerRight:() => <SignOutTouchable/>,
                headerLeft: () => NavHeaderButton("camera-sharp"),

            }}
            />
        </Tabs>
    )
}

export default TabLayout;