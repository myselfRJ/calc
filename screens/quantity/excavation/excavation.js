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
import LengthView from '../../../components/length';
import ConcretePerPart1 from '../../../components/concreteperpart1';
import ConcretePart1 from '../../../components/concretepart1';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Excavation1 = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [calclength, setcalcLength] = React.useState('1');
  const [calcwidth, setcalcWidth] = React.useState('1');
  const [calcthick, setcalcThick] = React.useState('1');
  const [length, setLength] = React.useState('5');
  const [width, setWidth] = React.useState('5');
  const [thick, setThick] = React.useState('5');
  const [volume, setVolume] = React.useState('5');
  const [calcvolume, setcalcVolume] = React.useState('1');
  const [cement, setCement] = React.useState('1');
  const [sand, setSand] = React.useState('2');
  const [aggregate, setAggregate] = React.useState('4');
  const [tripVolume, settripVolume] = React.useState('50');
  const [calctripVolume, setcalctripVolume] = React.useState('1');
  const [excavationPrice, setexcavationPrice] = React.useState('0');
  const [calcexcavationPrice, setcalcexcavationPrice] = React.useState('1');
  const [dryvolume, setDryVolume] = React.useState('1.54');
  const [quantity, setQuantity] = React.useState('1');
  const [tripVolumeprice, settripVolumeprice] = React.useState('0');
  const [cementratio, setCementratio] = React.useState('0.5');

  React.useEffect(() => {
    setVolume(length * width * thick*quantity);
    setcalcVolume(calclength * calcwidth * calcthick);
    console.log('changed');
  }, [length, width, thick, calclength, calcwidth, calcthick,quantity]);

  const [openl, setOpenl] = React.useState(false);
  const [openw, setOpenw] = React.useState(false);
  const [opent, setOpent] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [text2, setText2] = React.useState('');
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [value2, setValue2] = React.useState(null);
  const [toggle, setToggle] = React.useState('m');

  //const {title} = route.params;
  const [text1, setText1] = React.useState('');
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
    <ScrollView style={{backgroundColor: '#DDDDDD', height: '100%'}}>
      <ViewShot
        style={styles.container}
        ref={viewShot}
        options={{format: 'jpg', quality: 0.9}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E8F6EF',
          }}>
          <View style={{width: '94%', alignItems: 'center'}}>
            <TouchableOpacity
              style={{...styles.card}}
              onPress={() => console.warn('pressed')}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />
              <Text style={styles.text}>Bad Excavation</Text>
            </TouchableOpacity>
            <View
              style={{
                marginBottom: 5,
                justifyContent: 'center',
                width: '100%',
              }}>
              <Text style={{color: '#00ADB5'}}>Dimensions of Ground :</Text>
              <LengthView
                label={'Length L'}
                value={calclength}
                text={length}
                open={openl}
                setOpen={setOpenl}
                setText={setLength}
                setValue={setcalcLength}
              />
            </View>
            <View
              style={{
                marginBottom: 5,
                justifyContent: 'center',
                width: '100%',
              }}>
              <LengthView
                label={'Width W'}
                value={calcwidth}
                text={width}
                open={openw}
                setOpen={setOpenw}
                setText={setWidth}
                setValue={setcalcWidth}
              />
            </View>
            <View
              style={{
                marginBottom: 10,
                justifyContent: 'center',
                width: '100%',
              }}>
              <LengthView
                label={'Depth d'}
                value={calcthick}
                text={thick}
                open={opent}
                setOpen={setOpent}
                setText={setThick}
                setValue={setcalcThick}
              />
            </View>
            <Divider
              style={{
                borderWidth: 1,
                width: '100%',
                zIndex: -1,
                marginBottom: 5,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                zIndex: -1,
              }}>
              <Text style={{color: '#00ADB5'}}>Excavation Quantity and Trip Volume :</Text>

              <Divider style={{width: '150%',  marginVertical: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <ConcretePart1
                  label={'1 Trip Volume'}
                  text={tripVolume}
                  open={open2}
                  value={calctripVolume}
                  setOpen={setOpen2}
                  setText={settripVolume}
                  setValue={setcalctripVolume}
                  view={'50%'}
                />
                <ConcretePerPart1
                  label={'Excavation Price'}
                  right={'per/'}
                  value={calcexcavationPrice}
                  text={excavationPrice}
                  open={open3}
                  setOpen={setOpen3}
                  setText={setexcavationPrice}
                  setValue={setcalcexcavationPrice}
                  view={'50%'}
                />
              </View>
              <Divider style={{width: '100%', marginVertical: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '80%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Quantity'}
                  value={quantity}
                  onChangeText={text => setQuantity(parseFloat(text))}
                />
              </View>

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
                <Button
                  compact={true}
                  style={{backgroundColor: '#00ADB5'}}
                  icon="calculator"
                  mode="contained"
                  onPress={() => {
                    if (
                      volume &
                      cement &
                      sand &
                      aggregate &
                      quantity &
                      tripVolume &
                      cementratio
                    ) {
                      setToggle('m');
                    }
                  }}>
                  Calculate
                </Button>
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
                source={require('../../../resources/images/promo.png')}
              />
              <Divider
                style={{width: '100%', marginTop: 10, marginBottom: 10}}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                {toggle === 'm' ? (
                  <DataTable style={{backgroundColor: '#EFFFFD'}}>
                    <DataTable.Header>
                      <DataTable.Title sortDirection="descending">
                        Material
                      </DataTable.Title>
                      <DataTable.Title numeric>Quantity</DataTable.Title>
                      <DataTable.Title numeric>Unit</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Trips</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume /tripVolume
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>trips</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(
                          volume *
                          calcvolume *
                          excavationPrice *
                          calcexcavationPrice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>₹</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                ) : (
                  <></>
                )}
                {toggle === 'ft' ? (
                    <DataTable style={{backgroundColor: '#EFFFFD'}}>
                    <DataTable.Header>
                      <DataTable.Title sortDirection="descending">
                        Material
                      </DataTable.Title>
                      <DataTable.Title numeric>Quantity</DataTable.Title>
                      <DataTable.Title numeric>Unit</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume*35.3147).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Trips</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume /tripVolume
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>trips</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(
                          volume *
                          calcvolume *
                          excavationPrice *
                          calcexcavationPrice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>₹</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                ) : (
                  <></>
                )}
                {toggle === 'yrd' ? (
                    <DataTable style={{backgroundColor: '#EFFFFD'}}>
                    <DataTable.Header>
                      <DataTable.Title sortDirection="descending">
                        Material
                      </DataTable.Title>
                      <DataTable.Title numeric>Quantity</DataTable.Title>
                      <DataTable.Title numeric>Unit</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume*1.30795).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Trips</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume /tripVolume
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>trips</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(
                          volume *
                          calcvolume *
                          excavationPrice *
                          calcexcavationPrice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>₹</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                ) : (
                  <></>
                )}
                {toggle === 'brass' ? (
                    <DataTable style={{backgroundColor: '#EFFFFD'}}>
                    <DataTable.Header>
                      <DataTable.Title sortDirection="descending">
                        Material
                      </DataTable.Title>
                      <DataTable.Title numeric>Quantity</DataTable.Title>
                      <DataTable.Title numeric>Unit</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume*0.353).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Trips</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume /tripVolume
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>trips</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Total Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(
                          volume *
                          calcvolume *
                          excavationPrice *
                          calcexcavationPrice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>₹</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                ) : (
                  <></>
                )}
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <ToggleButton.Row
                  style={{width: '100%', justifyContent: 'center'}}
                  onValueChange={toggle => setToggle(toggle)}
                  value={toggle}>
                  <ToggleButton
                    icon={require('../../../resources/images/meter.png')}
                    color="#00ADB5"
                    value="m"
                  />
                  <ToggleButton
                    icon={require('../../../resources/images/foot.png')}
                    color="#00ADB5"
                    value="ft"
                  />
                  <ToggleButton
                    icon={require('../../../resources/images/yard.png')}
                    color="#00ADB5"
                    value="yrd"
                  />
                  <ToggleButton
                    icon={require('../../../resources/images/brass.png')}
                    color="#00ADB5"
                    value="brass"
                  />
                </ToggleButton.Row>
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
    height: 90,
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
export default Excavation1;
