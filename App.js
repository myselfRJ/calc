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
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {a} from './resources/images/a.png';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import LottieView from 'lottie-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Appbar, Menu} from 'react-native-paper';
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Cover from './components/cover';
import Quantity from './screens/quantity';
//////
import Concrete from './screens/quantity/concrete';
import Concrete1 from './screens/quantity/concrete/concrete1';
import Concrete2 from './screens/quantity/concrete/concrete2';
import Concrete3 from './screens/quantity/concrete/concrete3';
import Concrete4 from './screens/quantity/concrete/concrete4';
import Concrete5 from './screens/quantity/concrete/concrete5';
//////
import Bricks from './screens/quantity/bricks';
import Bricks1 from './screens/quantity/bricks/bricks1';
import Bricks2 from './screens/quantity/bricks/bricks2';
import Bricks3 from './screens/quantity/bricks/bricks3';
import Blocks1 from './screens/quantity/blocks/blocks1';
import Soil from './screens/quantity/soil';
import Soil1 from './screens/quantity/soil/soil1';
import Soil2 from './screens/quantity/soil/soil2';
import Soil3 from './screens/quantity/soil/soil3';
import Soil4 from './screens/quantity/soil/soil4';
import Soil5 from './screens/quantity/soil/soiil5';
import Elevation1 from './screens/quantity/elevation/elevation';
import Helix1 from './screens/quantity/helix/helix1';
import Plaster1 from './screens/quantity/plaster/plaster1';
import Filling1 from './screens/quantity/filling/filling1';
import Excavation1 from './screens/quantity/excavation/excavation';
import Paint1 from './screens/quantity/paint/paint';
import Slop1 from './screens/quantity/slopfilling/slopfilling';
import Asphalt1 from './screens/quantity/asphalt/asphalt1';
import Conversion from './screens/conversion';
import Distance from './screens/conversion/distance';
import Area from './screens/conversion/area';
import Volume from './screens/conversion/volume';
import Weight from './screens/conversion/weight';
import Time from './screens/conversion/time';
import Pressure from './screens/conversion/pressure';
import Speed from './screens/conversion/speed';
import Fuel from './screens/conversion/fuel';
import Frequency from './screens/conversion/frequency';
import AreaView from './screens/area';
import Circle1 from './screens/area/circle';
import Square1 from './screens/area/square';
import Rect1 from './screens/area/rect';
import Triangle1 from './screens/area/triangle';
import Trapezoid1 from './screens/area/trapezoid';
import Ellipse1 from './screens/area/ellipse';
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
  const layout = useWindowDimensions();
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
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );
  const ThirdRoute = () => (
    <View style={{flex: 1, backgroundColor: '#aa4ab7'}} />
  );
  const FourthRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ba4ab7'}} />
  );
  const FifthRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4ab7'}} />
  );
  const SixthRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4afb'}} />
  );
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Quantity />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;
      case 'fourth':
        return <AreaView />;
      case 'fifth':
        return <FifthRoute />;
      case 'sixth':
        return <Conversion />;
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
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={{...styles.tabbar,display:'flex',justifyContent:'center'}}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );
  const DemoScreen = ({navigation}) => {
    

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      {key: 'first', title: 'Quantity'},
      // {key: 'second', title: 'RCC'},
      // {key: 'third', title: 'Structure'},
      {key: 'fourth', title: 'Area'},
      // {key: 'fifth', title: 'Volume'},
      {key: 'sixth', title: 'Conversion'},
    ]);
    return (
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        navigation={navigation}
      />
    );
  };
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
          name="Concrete by Volume"
          component={Concrete1}
          options={{title: 'Calculation of Concrete by Volume'}}
        />
        <Stack.Screen
          name="Slab Concrete"
          component={Concrete2}
          options={{title: 'Calculation of Slab Concrete'}}
        />
        <Stack.Screen
          name="Square Column Concrete"
          component={Concrete3}
          options={{title: 'Calculation of Square Column Concrete'}}
        />
        <Stack.Screen
          name="Round Column Concrete"
          component={Concrete4}
          options={{title: 'Calculation of Round Column Concrete'}}
        />
        <Stack.Screen
          name="Circle Tank Concrete"
          component={Concrete5}
          options={{title: 'Calculation of Circle Tank Concrete'}}
        />
        <Stack.Screen
          name="Bricks"
          component={Bricks}
          options={{title: 'Bricks Calculator'}}
        />
        <Stack.Screen
          name="Bricks by Volume"
          component={Bricks1}
          options={{title: 'Bricks Calculator'}}
        />
        <Stack.Screen
          name="Wall Bricks"
          component={Bricks2}
          options={{title: 'Bricks Calculator'}}
        />
        <Stack.Screen
          name="Circle Wall Bricks"
          component={Bricks3}
          options={{title: 'Bricks Calculator'}}
        />
        <Stack.Screen
          name="Blocks"
          component={Blocks1}
          options={{title: 'Blocks Quantity'}}
        />
        <Stack.Screen
          name="Soil"
          component={Soil}
          options={{title: 'Soil Calculator'}}
        />
        <Stack.Screen
          name="Dry Unit Weight"
          component={Soil1}
          options={{title: 'Dry Unit Weight'}}
        />
        <Stack.Screen
          name="Moisture Unit Weight"
          component={Soil2}
          options={{title: 'Moisture Unit Weight'}}
        />
        <Stack.Screen
          name="Saturated Unit Weight"
          component={Soil3}
          options={{title: 'Saturated Soil Calculator'}}
        />
        <Stack.Screen
          name="Bearing Capacity of Circle Foundation"
          component={Soil4}
          options={{title: 'Bearing Capacity of Circle Foundation'}}
        />
        <Stack.Screen
          name="Bearing Capacity of Continuous Foundation"
          component={Soil5}
          options={{title: 'Bearing Capacity of Continuous Foundation'}}
        />
        <Stack.Screen
          name="Elevation"
          component={Elevation1}
          options={{title: 'Calculation of Super Elevation'}}
        />
        <Stack.Screen
          name="Helix Bar"
          component={Helix1}
          options={{title: 'Calculation of Helix Bar'}}
        />
        <Stack.Screen
          name="Plaster"
          component={Plaster1}
          options={{title: 'Calculation of Plaster'}}
        />
        <Stack.Screen
          name="Filling"
          component={Filling1}
          options={{title: 'Calculation of Bad Filling'}}
        />
        <Stack.Screen
          name="Excavation"
          component={Excavation1}
          options={{title: 'Calculation of Bad Excavation'}}
        />
        <Stack.Screen
          name="Paint"
          component={Paint1}
          options={{title: 'Calculation of Paint'}}
        />
        <Stack.Screen
          name="Slop Filling"
          component={Slop1}
          options={{title: 'Slop Fillng'}}
        />
        <Stack.Screen
          name="Asphalt"
          component={Asphalt1}
          options={{title: 'Calculation of Asphalt'}}
        />
         <Stack.Screen
          name="Distance"
          component={Distance}
          options={{title: 'Distance Converter'}}
        />
        <Stack.Screen
          name="Area"
          component={Area}
          options={{title: 'Area Converter'}}
        />
        <Stack.Screen
          name="Volume"
          component={Volume}
          options={{title: 'Volume Converter'}}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{title: 'Weight Converter'}}
        />
        <Stack.Screen
          name="Time"
          component={Time}
          options={{title: 'Time Converter'}}
        />
        <Stack.Screen
          name="Pressure"
          component={Pressure}
          options={{title: 'Pressure Converter'}}
        />
        <Stack.Screen
          name="Speed"
          component={Speed}
          options={{title: 'Speed Converter'}}
        />
        <Stack.Screen
          name="Fuel"
          component={Fuel}
          options={{title: 'Fuel Converter'}}
        />
        <Stack.Screen
          name="Frequency"
          component={Frequency}
          options={{title: 'Frequency Converter'}}
        />
        <Stack.Screen
          name="Circle"
          component={Circle1}
          options={{title: 'Calculation of Circle Area'}}
        />
        <Stack.Screen
          name="Square"
          component={Square1}
          options={{title: 'Calculation of Square Area'}}
        />
        <Stack.Screen
          name="Rectangle"
          component={Rect1}
          options={{title: 'Calculation of Rectangle Area'}}
        />
        <Stack.Screen
          name="Triangle"
          component={Triangle1}
          options={{title: 'Calculation of Triangle Area'}}
        />
        <Stack.Screen
          name="Trapezoid"
          component={Trapezoid1}
          options={{title: 'Calculation of Trapezoid Area'}}
        />
        <Stack.Screen
          name="Ellipse"
          component={Ellipse1}
          options={{title: 'Calculation of Ellipse Area'}}
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
    fontSize: 16,
  },
  tabStyle: {
    width: 'auto',
  },
});
// {/* <LottieView source={require('./resources/animation/start.json')} autoPlay loop  /> */}
export default App;
