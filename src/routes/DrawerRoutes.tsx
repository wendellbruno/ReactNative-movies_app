import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home, Movies, SeriesTV} from '../pages';
import theme from '../global/styles/theme';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    
    screenOptions={{
      drawerContentStyle: {
        backgroundColor: theme.colors.background,
      },
      title: '',
      headerTransparent: true,
      headerTintColor: theme.colors.colorYellow,
      drawerItemStyle: {
        direction: 'rtl'
      },
      drawerInactiveTintColor: theme.colors.colorWhite,
      drawerActiveTintColor: theme.colors.colorYellow,
    }}
    >
      <Drawer.Screen name="Home" component={Home} options={{
        drawerLabel: 'Inicio',
        drawerIcon: ({size, color}) => <MaterialCommunityIcons name='popcorn' size={size} color={color} />
      }}/>
      <Drawer.Screen name="Movies" component={Movies} options={{
        drawerLabel: 'Filmes',
        drawerIcon: ({focused, size, color}) => {
          if(focused){
            return <MaterialCommunityIcons name='movie' size={size} color={color} />
          }else{
            return <MaterialCommunityIcons name='movie-open-outline' size={size} color={color} />
          }
        }
        
      }}/>
      <Drawer.Screen name="SeriesTV" component={SeriesTV} options={{
        drawerLabel: 'Series de TV',
        drawerIcon: ({focused, size, color}) => {
          if(focused){
            return <Ionicons name='tv' size={size} color={color} />
          }else{
            return <Ionicons name='tv-outline' size={size} color={color} />
          }
        }
      }}/>
    </Drawer.Navigator>
  );
}
