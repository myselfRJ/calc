import * as React from 'react';
import {CardViewWithImage} from 'react-native-simple-card-view';
import {TouchableOpacity, useColorScheme} from 'react-native';


const Cover = props => {
  const scheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={() => {
        props.navigation.navigate(props.title);
      }}>
      <CardViewWithImage
        width={'100%'}
        imageWidth={'70%'}
        source={props.uri}
        title={props.title}
        roundedImage={false}
        titleFontSize={16}
        style={{bgColor: '#E8F6EF'}}
      />
    </TouchableOpacity>
  );
};
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8F6EF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 6,
    width: '30%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default Cover;
