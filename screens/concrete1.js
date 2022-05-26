import * as React from 'react';
import {TouchableOpacity,StyleSheet,Image,Text,View,ScrollView} from 'react-native'
import {Divider,TextInput,Button,DataTable,ToggleButton} from 'react-native-paper'
import ConcretePart1 from '../components/concretepart1';
import WeightView from '../components/weight';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Concrete1 = ({route,navigation}) => {
  const viewShot = React.useRef();
  const [text, setText] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [text2, setText2] = React.useState("");
    const [open2, setOpen2] = React.useState(false);
    const [value2, setValue2] = React.useState(null);
    const [toggle, setToggle] = React.useState('m');
    const { title } = route.params;
    const [text1, setText1] = React.useState("");
    const captureAndShareScreenshot = () => {
      viewShot.current.capture().then((uri) => {
        RNFS.readFile(uri, 'base64').then((res) => {
          let urlString = 'data:image/jpeg;base64,' + res;
          let options = {
            title: 'Share Title',
            message: 'Share Message',
            url: urlString,
            type: 'image/jpeg',
          };
          Share.open(options)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              err && console.log(err);
            });
        });
      });
    };
return(<ScrollView>
<ViewShot
        style={styles.container}
        ref={viewShot}
        options={{format: 'jpg', quality: 0.9}}>
    <View style={{justifyContent:'center',alignItems:'center', backgroundColor:'#E8F6EF'}}>
    <View style={{width:'94%',alignItems:'center'}}>
<TouchableOpacity  style={{...styles.card}} onPress={()=>console.warn('pressed')}>
<Image
        style={{width:50,height: 50,}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      <Text style={styles.text}>{title}</Text>

</TouchableOpacity>
<View style={{marginBottom:10,justifyContent:'center',width:'100%'}}>
<ConcretePart1 label={"Concrete Volume"} value={value}text={text}open={open}setOpen={setOpen} setText={setText} setValue={setValue}/>
</View>
<Divider style={{borderWidth:1,width:'100%',zIndex:-1,marginBottom:5}} />
<View style={{display:'flex',flexDirection:'column',width:'100%',zIndex:-1}}>
    <Text style={{color:'#00ADB5'}}>Concrete Ratio :</Text>
    <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
    <TextInput style={{width:'30%',}} 
mode={'outlined'}
activeOutlineColor='#00ADB5'

keyboardType='numeric'
      label={'Cement'}
      value={text}
      onChangeText={text => setText1(text)}
   / >
   <TextInput style={{width:'30%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Sand'}
      value={text}
      onChangeText={text => setText1(text)}
   / >
   <TextInput style={{width:'30%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Aggregate'}
      value={text1}
      onChangeText={text => setText1(text)}
   / >
    </View>
    <Divider style={{width:'100%',marginTop:5}}/>
    <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
<WeightView label={"1 Cement Bag"}text={text2}open={open2} value={value2}setOpen={setOpen2} setText={setText2} setValue={setValue2}view={'50%'}/>
<ConcretePart1 label={"Concrete Price"} value={value}text={text}open={open}setOpen={setOpen} setText={setText} setValue={setValue}view={'50%'}/>
</View>
<Divider style={{width:'100%',marginTop:5}}/>
<View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
<TextInput style={{width:'47%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Dry Volume'}
      value={text1}
      onChangeText={text => setText1(text)}
   / >
   <TextInput style={{width:'47%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Quantity'}
      value={text1}
      onChangeText={text => setText1(text)}
   / >
</View>
<Divider style={{width:'100%',marginTop:5}}/>
<View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
<TextInput style={{width:'47%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Cement Bag Price'}
      value={text1}
      onChangeText={text => setText1(text)}
   / >
   <TextInput style={{width:'47%'}}
mode={'outlined'}
activeOutlineColor='#00ADB5'
keyboardType='numeric'
      label={'Cement Ratio'}
      value={text1}
      onChangeText={text => setText1(text)}
   / >
</View>
<Divider style={{width:'100%',marginTop:10,borderWidth:1,marginBottom:10}}/>
<View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<Button compact={true} style={{backgroundColor:'#6FDFDF'}} icon="camera" mode="contained" onPress={() => captureAndShareScreenshot()}>
    Share
  </Button>
  <Button compact={true} style={{backgroundColor:'#00ADB5',}}icon="calculator" mode="contained" onPress={() => console.log('Pressed')}>
    Calculate
  </Button>
  <Button compact={true} style={{backgroundColor:'#6FDFDF'}} icon="backup-restore" mode="contained" onPress={() => console.log('Pressed')}>
    Reset
  </Button>
</View>
<Divider style={{width:'100%',marginTop:10,marginBottom:10}}/>
<View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<DataTable style={{backgroundColor:'#EFFFFD'}}>
      <DataTable.Header>
        <DataTable.Title  sortDirection='descending'>Material</DataTable.Title>
        <DataTable.Title numeric>Quantity</DataTable.Title>
        <DataTable.Title numeric>Unit</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Volume</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>{'m\u00B3'}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Dry Volume</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>kg</DataTable.Cell>
      </DataTable.Row>
</DataTable>
</View>
<View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
<ToggleButton.Row style={{width:'100%',justifyContent:'center'}}  onValueChange={toggle => setToggle(toggle)} value={toggle}>
      <ToggleButton icon={require('../resources/images/meter.png')}  color='#00ADB5' value="m" />
      <ToggleButton icon={require('../resources/images/foot.png')} color='#00ADB5'value="ft" />
      <ToggleButton icon={require('../resources/images/yard.png')} color='#00ADB5'value="yrd" />
      <ToggleButton icon={require('../resources/images/brass.png')} color='#00ADB5'value="brass" />
    </ToggleButton.Row>
    </View>
</View>
</View>
</View>
</ViewShot>
</ScrollView>
);
}

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    marginHorizontal:'3%',
    marginVertical:8,
    padding:10,
    width: '100%',
    height:90,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:5,
    borderColor:'#00ADB5'
  },
  text:{
    fontFamily: "Cochin",
    fontSize:22,
    fontWeight:'bold'
  },


});
export default Concrete1;