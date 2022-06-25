import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  Divider,
  TextInput,
  Button,
  DataTable,
  ToggleButton,
} from 'react-native-paper';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import FuelView from '../../components/fuel';

const Fuel = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [fuel, setFuel] = React.useState('1');
  const [calcfuel, setcalcFuel] = React.useState('1');
  const [calculate, setCalculate] = React.useState(0);

  const [openh, setOpenH] = React.useState(false);
  //const {title} = route.params;

  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then(uri => {
      RNFS.readFile(uri, 'base64').then(res => {
        let urlString = 'data:image/jpeg;base64,' + res;
        let options = {
          title: 'Share Title',
          message: 'Share Message',
          url: urlString,
          type: 'image/jpeg',
        };
        Share.open(options)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            err && console.log(err);
          });
      });
    });
  };
  return (
    <ScrollView style={{backgroundColor: '#E8F6EF', fuel: '100%'}}>
      <ViewShot
        style={styles.container}
        ref={viewShot}
        options={{format: 'jpg', quality: 0.9}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E8F6EF'
          }}>
          <View style={{width: '94%', alignItems: 'center'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                zIndex: -1,
              }}>
              <Divider style={{width: '150%', marginTop: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems:'center'
                }}>
                    <Divider style={{width: '0%', marginTop: 5}} />
                <FuelView
                  label={'Fuel'}
                  value={calcfuel}
                  text={fuel}
                  open={openh}
                  setOpen={setOpenH}
                  setText={setFuel}
                  setValue={setcalcFuel}
                />
                <Divider style={{width: '0%', marginTop: 5}} />
  
              </View>
              <Divider style={{width: '150%', marginTop: 5}} />

              <Divider
                style={{
                  width: '100%',
                  marginTop: 10,
                  borderWidth: 1,
                  marginBottom: 10,
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <Button
                  compact={true}
                  style={{backgroundColor: '#6FDFDF'}}
                  icon="camera"
                  mode="contained"
                  onPress={() => captureAndShareScreenshot()}>
                  Share
                </Button>
                {/* <Button
                  compact={true}
                  style={{backgroundColor: '#00ADB5'}}
                  icon="calculator"
                  mode="contained"
                  onPress={() => setCalculate()>
                  Calculate
                </Button> */}
                <Button
                  compact={true}
                  style={{backgroundColor: '#6FDFDF'}}
                  icon="backup-restore"
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  Reset
                </Button>
              </View>
              <Divider
                style={{width: '100%', marginTop: 10, marginBottom: 10}}
              />
              <Image
                style={{width: '100%'}}
                source={require('../../resources/images/promo.png')}
              />
              <Divider
                style={{width: '100%', marginTop: 10, marginBottom: 10}}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems:'center'
                }}>
                <DataTable style={{backgroundColor: '#EFFFFD'}}>
                  <DataTable.Header>
                    <DataTable.Title style={{justifyContent:'center'}} textStyle={{fontSize: 16}} sortDirection="descending">
                     Conversion Value
                    </DataTable.Title>

                  </DataTable.Header>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 16}} style={{justifyContent:'flex-end'}} >
                      {(fuel*calcfuel*1000)
                        .toFixed(5)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 16}}>
                      {'   m/L'}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 16}} style={{justifyContent:'flex-end'}} >
                      {(fuel*calcfuel*1)
                        .toFixed(5)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 16}}>
                      {'   km/L'}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 16}} style={{justifyContent:'flex-end'}} >
                      {(fuel*calcfuel*2.3529)
                        .toFixed(5)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 16}}>
                      {'   miles/US Galoon'}
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 16}} style={{justifyContent:'flex-end'}} >
                      {(fuel*calcfuel*2.8259)
                        .toFixed(5)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 16}}>
                      {'   miles/UK Galoon'}
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            </View>
          </View>
        </View>
      </ViewShot>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DDDDDD',
    borderRadius: 8,
    marginHorizontal: '3%',
    marginVertical: 8,
    padding: 10,
    width: '100%',
    fuel: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#00ADB5',
  },
  text: {
    fontFamily: 'Cochin',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default Fuel;