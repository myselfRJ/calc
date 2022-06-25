import * as React from 'react';
import {View, FlatList} from 'react-native';
import Cover from '../components/cover';
import {useNavigation} from '@react-navigation/native';

const Conversion = () => {
  const navigation = useNavigation();
  console.log(navigation, '@@@@@@@@@@@2');
  const data = [
    {title: 'Distance',uri:require("../resources/images/distance.png")},
    {title: 'Area',uri:require("../resources/images/area.png")},
    {title: 'Volume',uri:require("../resources/images/volume.png")},
    {title: 'Weight',uri:require("../resources/images/weight.png")},
    {title: 'Time',uri:require("../resources/images/time.png")},
    {title: 'Pressure',uri:require("../resources/images/pressure.png")},
    {title: 'Speed',uri:require("../resources/images/speed.png")},
    {title: 'Fuel',uri:require("../resources/images/fuel.png")},
    {title: 'Frequency',uri:require("../resources/images/frequency.png")},

  ];
  const renderItem = ({item}) => (
    <Cover title={item.title} uri={item.uri} navigation={navigation} />
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default Conversion;
