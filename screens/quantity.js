import * as React from 'react';
import {View, FlatList} from 'react-native';
import Cover from '../components/cover';
import {useNavigation} from '@react-navigation/native';
const Quantity = () => {
  const navigation = useNavigation();
  console.log(navigation, '@@@@@@@@@@@2');
  const data = [
    {title: 'Concrete' ,uri:require("../resources/images/concrete.png")},
    {title: 'Bricks' ,uri:require("../resources/images/brick.png")},
    {title: 'Blocks' ,uri:require("../resources/images/blocks.png")},
    {title: 'Soil' ,uri:require("../resources/images/soil.png")},
    {title: 'Elevation' ,uri:require("../resources/images/elevation.png")},
    {title: 'Helix Bar' ,uri:require("../resources/images/helix.png")},
    {title: 'Plaster' ,uri:require("../resources/images/plaster.png")},
    {title: 'Filling' ,uri:require("../resources/images/filling.png")},
    {title: 'Excavation' ,uri:require("../resources/images/excavation.png")},
    {title: 'Paint' ,uri:require("../resources/images/paint.png")},
    {title: 'Slop Filling' ,uri:require("../resources/images/slop.png")},
    {title: 'Asphalt' ,uri:require("../resources/images/asphalt.png")},
    {title: 'Tiles' },
    {title: 'Terrazzo'},
    {title: 'Floor Bricks'},
    {title: 'Anti Termite'},
    {title: 'Foam Work'},
    {title: 'Water Tank'},
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

export default Quantity;
