import { View, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Rendezvous from '../Rendezvous';
import Hopitaux from '../Hopitaux';
import Profile from '../Profile';

const BottomTabs = () => {

    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
          initialRouteName="tabs_home"
          screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerShown: false,
          }}
        >
          <Tab.Screen
            name="tabs_home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color="blue" size={23} />
              ),
            }}
          />
          <Tab.Screen
            name="Rendez-vous"
            component={Rendezvous}
            options={{
              tabBarLabel: 'Rendez-vous',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-month" color="blue" size={23} />
              ),
              // tabBarBadge: 10,
            }}
          />
           <Tab.Screen
            name="Hôpitaux"
            component={Hopitaux}
            options={{
              tabBarLabel: 'Hôpitaux',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="hospital-building" color="blue" size={23} />
              ),
              //tabBarBadge: 10,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color="blue" size={23} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default BottomTabs