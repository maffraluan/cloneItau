import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { Home, HelpScreen, Transitions, Services, Statement, } from './screens/'

const Tab = createBottomTabNavigator();

interface IRouteProps {
  isActiveColor?: string,
  isNotActiveColor?: string,
  visibleColor?: boolean
}

const Routes: React.FunctionComponent<IRouteProps> = 
({ isActiveColor = "#ec7404", isNotActiveColor = "#fff", visibleColor = false }) => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: '#fff',
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        style: { backgroundColor: '#ec7404', height: 90 },
        labelStyle: { fontSize: 16 },
        tabStyle: { borderRadius: 5, alignItems: 'center', },
      }} >
      <Tab.Screen
        name="inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-outline"
              type="ionicon"
              color={!visibleColor ? '#fff' : isActiveColor}
              size={32} />
          ),
        }} />
      <Tab.Screen
        name="Statement"
        component={Statement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="text"
              type="material-community"
              color={!visibleColor ? '#fff' : isActiveColor}
              size={32} />
          ),
        }} />

      <Tab.Screen
        name="Transitions"
        component={Transitions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="currency-usd-off"
              type="material-community"
              color={!visibleColor ? '#fff' : isActiveColor}
              size={32} />
          ),
        }} />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="table-account"
              type="material-community"
              color={!visibleColor ? '#fff' : isActiveColor}
              size={32} />
          ),
        }} />

      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="wechat"
              type="material-community"
              color={!visibleColor ? '#fff' : isActiveColor}
              size={32} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Routes;