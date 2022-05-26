/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, useWindowDimensions ,Dimensions
} from 'react-native';
import {a} from './resources/images/a.png'
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import LottieView from 'lottie-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Appbar, Menu} from 'react-native-paper';
import { TabView, SceneMap,TabBar,
  SceneRendererProps, } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Cover from './components/cover';
import Quantity from './screens/quantity';
import Concrete from './screens/concrete';
import Concrete1 from './screens/concrete1';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  const scheme = useColorScheme();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function HomeScreen({navigation}) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
        onPress={() => navigation.navigate('Demo')}>
        <LottieView
          source={require('./resources/animation/start.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => navigation.navigate('Demo')}
        />
      </TouchableOpacity>
    );
  }
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#aa4ab7' }} />
  );
  const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ba4ab7' }} />
  );
  const FifthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4ab7' }} />
  );
  const renderScene = ({ route}) => {
    switch (route.key) {
      case 'first':
        return <Quantity />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;
      case 'fourth':
        return <FourthRoute />;
      case 'fifth':
        return <FifthRoute />;
      default:
        return null;
    }
  };
  // const renderScene=SceneMap({
  //   first: Quantity,
  //   second: SecondRoute,
  //   third: ThirdRoute,
  //   fourth: FourthRoute,
  //   fifth: FifthRoute,
  // });
  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );
const DemoScreen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'Quantity'},
    { key: 'second', title: 'RCC' },
    { key: 'third', title: 'Structure' },
    { key: 'fourth', title: 'Area' },
    { key: 'fifth', title: 'Volume' },
  ]);
    return (

      <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: '50%'}}
      navigation={navigation}
      
    />
    );
  }
  function CustomNavigationBar({navigation, back, options}) {
    console.log(options.title);
    return (
      <Appbar.Header style={{backgroundColor: '#00adb5'}}>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={options.title} />
      </Appbar.Header>
    );
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: props => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{title: 'Calculator'}}
        />
        <Stack.Screen
          name="Concrete"
          component={Concrete}
          options={{title: 'Concrete Calculator'}}
        />
        <Stack.Screen
          name="Concrete1"
          component={Concrete1}
          options={{title: 'Calculation of Concrete by Volume'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#00ADB5',
  },
  indicator: {
    backgroundColor: '#222831',
  },
  label: {
    fontWeight: 'bold',
    fontSize:22
  },
  tabStyle: {
    width: 'auto',
  },
});
// {/* <LottieView source={require('./resources/animation/start.json')} autoPlay loop  /> */}
export default App;
