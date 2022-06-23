import * as React from 'react';
import {TouchableOpacity,StyleSheet,Image,Text} from 'react-native'

const ItemList = (props) => {
    console.log(props)
return(
<TouchableOpacity  style={{...styles.card}} onPress={()=>props.navigation.navigate(props.title.replace(/\n/g, ''),{title:props.title})}>
<Image
        style={{width:50,height: 50,}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      <Text style={styles.text}>{props.title}</Text>
      <Image
        style={{width:50,height: 50,position:'absolute',right:10}}
        source={require('../resources/images/arrow-right.png')}
      />
{/* <List.Item
    title={props.title}
    titleStyle={{fontSize:22}}
    theme={{ fonts: { regular:{fontFamily:Black} } }}
    left={props => <List.Icon {...props} style={{height:70,width:70}} icon="folder" />}
    right={props => <List.Icon {...props} style={{height:70,width:70}}icon="chevron-right" />}
    onPress={()=>console.warn('pressed')}
    style={[styles.card]}
  /> */}
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: '#E8F6EF',
    borderRadius: 8,
    marginHorizontal:'3%',
    marginVertical:8,
    padding:10,
    width: '94%',
    height:90,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  text:{
    fontFamily: "Cochin",
    fontSize:16,
    marginLeft:20
  }

});
export default ItemList;