import * as React from 'react';
import {View,FlatList,ScrollView} from 'react-native'
import ItemList from '../components/itemlist';
import ItemListFake from '../components/itemlistfake';

const Concrete = ({navigation}) => {
    const data=[
        {'title':'Concrete by Volume'},{'title':'Slab Concrete'},{'title':'Square Column Concrete'},{'title':'Round Column Concrete'},{'title':'Circle Tank Concrete'},
        
    ];
    const dataFake=[
      {'title':'Dam Body Concrete'},{'title':'Retaining Wall Concrete'},{'title':'Square Column Concrete'},{'title':'Round Column Concrete'},{'title':'Circle Tank Concrete'},
      
  ];
    const renderItem = ({ item }) => (
        <ItemList title={item.title} navigation={navigation} />
      );
      const renderItemFake = ({ item }) => (
        <ItemListFake title={item.title} navigation={navigation} />
      );
return(
<View >
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
        
      /></ScrollView>
</View>
);
}

export default Concrete;