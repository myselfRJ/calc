import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import ItemList from '../../components/itemlist';
import ItemListFake from '../../components/itemlistfake';

const Soil = () => {
  const navigation = useNavigation();
  const data = [
    {title: 'Dry Unit Weight'},
    {title: 'Moisture Unit Weight'},
    {title: 'Saturated Unit Weight'},
    {title: 'Bearing Capacity of \nCircle Foundation'},
    {title: 'Bearing Capacity of \nContinuous Foundation'},
  ];
  const dataFake = [{title: 'Porosity'}, {title: 'Specific Weight'}, {title: 'Thermal Diffusivity'}];
  const renderItem = ({item}) => (
    <ItemList title={item.title} navigation={navigation} />
  );
  const renderItemFake = ({item}) => (
    <ItemListFake title={item.title} navigation={navigation} />
  );
  return (
    <View>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(_, index) => index}
          horizontal={false}
        />
        <FlatList
          data={dataFake}
          renderItem={renderItemFake}
          keyExtractor={(_, index) => index}
          horizontal={false}
        />
      </ScrollView>
    </View>
  );
};

export default Soil;
