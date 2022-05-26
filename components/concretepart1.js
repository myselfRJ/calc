import * as React from 'react';
import {StyleSheet,View} from 'react-native';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
const ConcretePart1 = ({text,label,value,setText,setValue,open,setOpen,view}) => {

    
    const [items, setItems] = React.useState([
      {label:'m\u00B3', value: '1'},
      {label: 'ft\u00B3', value: '10'},
      {label: 'yrd\u00B3', value: '100'},
      {label: 'brass', value: '1000'}
    ]);
return(
<View style={{display:'flex',flexDirection:'row',width:view,justifyContent:'flex-start',alignItems:'center'}}>
<View style={{width:'72%'}}>
<TextInput 
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={label}
      value={text}
      onChangeText={text => setText(text)}
   / ></View>
<View style={{width:'18%',marginLeft:3}}>
<DropDownPicker 
      open={open}
      disableBorderRadius={false}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={"m\u00B3"}
      containerStyle={{width:45}}
      showArrowIcon={false}
      showTickIcon={false}
      listMode={"SCROLLVIEW"}
      style={{
  backgroundColor: "#99C4C8",
}}

      textStyle={{
  fontSize: 12,color: "black",
}}
dropDownContainerStyle={{
  backgroundColor: "#dfdfdf"
}}
    /></View>
</View>
);
}

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 15,
    width: '30%',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default ConcretePart1;