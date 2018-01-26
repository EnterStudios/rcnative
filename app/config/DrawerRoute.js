import React from 'react'
import { Platform } from 'react-native'
import { Constants } from 'expo'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import HomeScreen from '../screens/Home'
import About from '../screens/About'
import DrawerContainer from '../components/Container/DrawerContainer'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  header: {
    backgroundColor: '$primary',
    justifyContent: 'center'
  },
  hamburgerIcon: {
    color: 'white',
    paddingLeft: 10
  },
  customAndroidHeader: {
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  }
})

const DrawerNav = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: About
    }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
)

// I use this to define the global header of all screen how use DrawerNavigator that is above
const DrawerRoute = StackNavigator(
  {
    NextNavigation: { screen: DrawerNav }
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: styles.header,
      title: 'Home',
      headerTintColor: 'white',
      headerLeft: (
        <Icon
          style={styles.hamburgerIcon}
          ios="ios-menu"
          android="md-menu"
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      ),
      gesturesEnabled: false
    })
  }
)

export default DrawerRoute
