import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
const AreaView = ({
  text,
  label,
  value,
  setText,
  setValue,
  open,
  setOpen,
  view,
  left,right
}) => {
  const [items, setItems] = React.useState([
    {label: 'inch\u00B2', value: '0.000645'},
    {label: 'm\u00B2', value: '1'},
    {label: 'ft\u00B2', value: '0.0929'},
    {label: 'yrd\u00B2', value: '0.836'},
  ]);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: view,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View style={{width: '75%'}}>
        <TextInput
          mode={'outlined'}
          style={{ fontSize: 10}}
          right={right ? <TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text={right} /> : ''}
          left={left ? <TextInput.Affix text={left} /> : ''}
          dense={true}
          activeOutlineColor="#00ADB5"
          keyboardType="numeric"
          label={label}
          value={text}
          onChangeText={text => setText(parseFloat(text))}
        />
      </View>
      <View style={{width: '15%', marginLeft: 3,justifyContent:'center'}}>
        <DropDownPicker
          open={open}
          disableBorderRadius={false}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'m\u00B2'}
          containerStyle={{width: 45}}
          showArrowIcon={false}
          showTickIcon={false}
          listMode={'SCROLLVIEW'}
          style={{
            backgroundColor: '#99C4C8',
            position: 'relative',
            zIndex: 999,
          }}
          textStyle={{
            fontSize: 8,
            color: 'black',textAlign:'center'
          }}
          dropDownContainerStyle={{
            backgroundColor: '#dfdfdf',
          }}
        />
      </View>
    </View>
  );
};

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
export default AreaView;
