import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, HelpScreen, Transitions, Services, Statement, } from './screens/'
import { IconMenu } from './components/IconMenu';
import { BottomType } from './navigation/BottomType';


interface IRouteProps { }

const RootTab = createBottomTabNavigator<BottomType>();

const Routes: React.FunctionComponent<IRouteProps> = () => {

  const icons: { [key: string]: object | any } = {
    'inicio': {
      name: "home-outline",
      lib: 'ionicon'
    },
    'extrato': {
      name: "text",
      lib: 'material-community'
    },
    'transações': {
      name: "currency-usd-off",
      lib: 'material-community'
    },
    'serviços': {
      name: "table-account",
      lib: 'material-community'
    },
    'ajuda': {
      name: "wechat",
      lib: 'material-community'
    },
  };

  return (
      <RootTab.Navigator
        initialRouteName="inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            const { name, lib } = icons[route.name]

            return (
              <IconMenu
                focused={focused}
                name={name}
                type={lib}
                color={color}
                label={route.name}
              />
            )
          }
        })}
        tabBarOptions={{
          activeTintColor: '#ec7404',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#ec7404',
            paddingBottom: 25,
          },
        }} >
        <RootTab.Screen
          name="inicio"
          component={Home}
          options={{
            title: ''
          }} />
        <RootTab.Screen
          name="extrato"
          component={Statement}
          options={{
            title: ''
          }} />

        <RootTab.Screen
          name="transações"
          component={Transitions}
          options={{
            title: ''
          }} />

        <RootTab.Screen
          name="serviços"
          component={Services}
          options={{
            title: ''
          }} />

        <RootTab.Screen
          name="ajuda"
          component={HelpScreen}
          options={{
            title: ''
          }} />
      </RootTab.Navigator>
  );
}

export default Routes;