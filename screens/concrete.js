import * as React from 'react';
import {View,FlatList} from 'react-native'
import ItemList from '../components/itemlist';

const Concrete = ({navigation}) => {
    const data=[
        {'title':'Concrete by Volume'},{'title':'Slab Concrete'},{'title':'Blocks'},{'title':'Soil'},{'title':'Elevation'},{'title':'Helix Bar'},
        {'title':'Plaster'},{'title':'Filling'},{'title':'Excavation'},{'title':'Paint'},{'title':'Slop'},{'title':'Asphalt'},
        
    ];
    const renderItem = ({ item }) => (
        <ItemList title={item.title} navigation={navigation} />
      );
return(
<View >
<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        horizontal={false}
        
      />
</View>
);
}

export default Concrete;