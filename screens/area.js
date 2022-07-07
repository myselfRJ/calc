import * as React from 'react';
import {View, FlatList} from 'react-native';
import Cover from '../components/cover';
import {useNavigation} from '@react-navigation/native';
const AreaView = () => {
  const navigation = useNavigation();
  console.log(navigation, '@@@@@@@@@@@2');
  const data = [
    {title: 'Circle' ,uri:require("../resources/images/circle.png")},
    {title: 'Square' ,uri:require("../resources/images/square.png")},
    {title: 'Rectangle' ,uri:require("../resources/images/rectangle.png")},
    {title: 'Triangle' ,uri:require("../resources/images/triangle.png")},
    {title: 'Trapezoid' ,uri:require("../resources/images/trapezoid.png")},
    {title: 'Ellipse' ,uri:require("../resources/images/ellipse.png")},
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

export default AreaView;
