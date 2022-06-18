import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import ItemList from '../../components/itemlist';
import ItemListFake from '../../components/itemlistfake';

const Bricks = () => {
  const navigation = useNavigation();
  const data = [
    {title: 'Bricks by Volume'},
    {title: 'Wall Bricks'},
    {title: 'Circle Wall Bricks'},
  ];
  const dataFake = [{title: 'Total Room Bricks'}, {title: 'Arch Wall Bricks'}];
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

export default Bricks;
