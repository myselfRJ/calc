import * as React from 'react';
import {View,FlatList} from 'react-native'
import Cover from '../components/cover';
import { useNavigation } from '@react-navigation/native';
const Quantity = () => {
    const navigation = useNavigation();
    console.log(navigation,'@@@@@@@@@@@')
    const data=[
        {'title':'Concrete'},{'title':'Bricks'},{'title':'Blocks'},{'title':'Soil'},{'title':'Elevation'},{'title':'Helix Bar'},
        {'title':'Plaster'},{'title':'Filling'},{'title':'Excavation'},{'title':'Paint'},{'title':'Slop'},{'title':'Asphalt'},
        {'title':'Plaster'},{'title':'Filling'},{'title':'Excavation'},{'title':'Paint'},{'title':'Slop'},{'title':'Asphalt'}
    ];
    const renderItem = ({ item }) => (
        <Cover title={item.title} navigation={navigation}/>
      );
return(
<View >
<FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle ={{ justifyContent: 'space-around',marginVertical:10}}
        
      />
</View>
);
}

export default Quantity;