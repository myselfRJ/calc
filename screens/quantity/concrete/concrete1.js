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
import ConcretePart1 from '../../../components/concretepart1';
import ConcretePerPart1 from '../../../components/concreteperpart1';
import WeightView from '../../../components/weight';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Concrete1 = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [volume, setVolume] = React.useState('5');
  const [calcvolume, setcalcVolume] = React.useState('1');
  const [cement, setCement] = React.useState('1');
  const [sand, setSand] = React.useState('2');
  const [aggregate, setAggregate] = React.useState('4');
  const [cementbag, setCementbag] = React.useState('50');
  const [calccementbag, setcalcCementbag] = React.useState('1');
  const [concreteprice, setConcretePrice] = React.useState('0');
  const [calcconcreteprice, setcalcConcretePrice] = React.useState('1');
  const [dryvolume, setDryVolume] = React.useState('1.54');
  const [quantity, setQuantity] = React.useState('1');
  const [cementbagprice, setCementbagprice] = React.useState('0');
  const [cementratio, setCementratio] = React.useState('0.5');

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [text2, setText2] = React.useState('');
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [value2, setValue2] = React.useState(null);
  const [toggle, setToggle] = React.useState('m');

  const {title} = route.params;
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
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            <View
              style={{
                marginBottom: 10,
                justifyContent: 'center',
                width: '100%',
              }}>
              <ConcretePart1
                label={'Concrete Volume'}
                value={calcvolume}
                text={volume}
                open={open}
                setOpen={setOpen}
                setText={setVolume}
                setValue={setcalcVolume}
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
              <Text style={{color: '#00ADB5'}}>Concrete Ratio :</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '30%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Cement'}
                  value={cement}
                  onChangeText={text => setCement(parseFloat(text))}
                />
                <TextInput
                  style={{width: '30%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Sand'}
                  value={sand}
                  onChangeText={text => setSand(parseFloat(text))}
                />
                <TextInput
                  style={{width: '30%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Aggregate'}
                  value={aggregate}
                  onChangeText={text => setAggregate(parseFloat(text))}
                />
              </View>
              <Divider style={{width: '150%', marginTop: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <WeightView
                  label={'1 Cement Bag'}
                  text={cementbag}
                  open={open2}
                  value={calccementbag}
                  setOpen={setOpen2}
                  setText={setCementbag}
                  setValue={setcalcCementbag}
                  view={'50%'}
                />
                <ConcretePerPart1
                  label={'Concrete Price'}
                  right={'per/'}
                  value={calcconcreteprice}
                  text={concreteprice}
                  open={open3}
                  setOpen={setOpen3}
                  setText={setConcretePrice}
                  setValue={setcalcConcretePrice}
                  view={'50%'}
                />
              </View>
              <Divider style={{width: '100%', marginTop: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '47%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Dry Volume'}
                  value={dryvolume}
                  onChangeText={text => setDryVolume(parseFloat(text))}
                />
                <TextInput
                  style={{width: '47%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Quantity'}
                  value={quantity}
                  onChangeText={text => setQuantity(parseFloat(text))}
                />
              </View>
              <Divider style={{width: '100%', marginTop: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '47%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Cement Bag Price'}
                  value={cementbagprice}
                  onChangeText={text => setCementbagprice(parseFloat(text))}
                />
                <TextInput
                  style={{width: '47%', height: 40, fontSize: 10}}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Water Cement Ratio'}
                  value={cementratio}
                  onChangeText={text => setCementratio(parseFloat(text))}
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
                      cementbag &
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
                      <DataTable.Cell textStyle={{fontSize:10}}>Dry Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(dryvolume * volume * calcvolume).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>kg</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Sand</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * sand) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Aggregate</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * aggregate) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Water</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {cementratio *
                          (
                            (dryvolume * volume * calcvolume * cement * 1440) /
                            (parseFloat(cement) +
                              parseFloat(sand) +
                              parseFloat(aggregate))
                          )
                            .toFixed(3)
                            .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>Liter</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bags</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag *
                            calccementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>bags</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bag Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            cement *
                            1440 *
                            cementbagprice) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume *
                          concreteprice *
                          calcconcreteprice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume * 2400).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>kg</DataTable.Cell>
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
                        {(volume * calcvolume * 35.3147).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Dry Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(dryvolume * volume * calcvolume * 35.3147).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            cement *
                            1440 *
                            2.20462) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>lb</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 35.3147) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Sand</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * sand * 35.3147) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Aggregate</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            aggregate *
                            35.3147) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Water</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {cementratio *
                          (
                            (dryvolume * volume * calcvolume * cement * 1440) /
                            (parseFloat(cement) +
                              parseFloat(sand) +
                              parseFloat(aggregate))
                          )
                            .toFixed(3)
                            .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>Liter</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bags</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>bags</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bag Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            cement *
                            1440 *
                            cementbagprice) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume *
                          concreteprice *
                          calcconcreteprice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume * 2400 * 2.20462)
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>lb</DataTable.Cell>
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
                        {(volume * calcvolume * 1.30795).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Dry Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(dryvolume * volume * calcvolume * 1.30795).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>kg</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1.30795) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Sand</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * sand * 1.30795) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Aggregate</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            aggregate *
                            1.30795) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B3'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Water</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {cementratio *
                          (
                            (dryvolume * volume * calcvolume * cement * 1440) /
                            (parseFloat(cement) +
                              parseFloat(sand) +
                              parseFloat(aggregate))
                          )
                            .toFixed(3)
                            .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>Liter</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bags</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>bags</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bag Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            cement *
                            1440 *
                            cementbagprice) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {volume *
                          calcvolume *
                          concreteprice *
                          calcconcreteprice}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(volume * calcvolume * 2400).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>kg</DataTable.Cell>
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
                        {(volume * calcvolume * 0.353).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'brass'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Dry Volume</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(dryvolume * volume * calcvolume * 0.353).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'brass'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          1000 /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>ton</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 0.353) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'brass'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Sand</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * sand * 0.353) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'brass'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Aggregate</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            aggregate *
                            0.353) /
                          (parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'brass'}</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Water</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {cementratio *
                          (
                            (dryvolume * volume * calcvolume * cement * 1440) /
                            (parseFloat(cement) +
                              parseFloat(sand) +
                              parseFloat(aggregate))
                          )
                            .toFixed(3)
                            .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>Liter</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bags</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume * volume * calcvolume * cement * 1440) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>bags</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Cement Bag Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          (dryvolume *
                            volume *
                            calcvolume *
                            cement *
                            1440 *
                            cementbagprice) /
                          ((parseFloat(cement) +
                            parseFloat(sand) +
                            parseFloat(aggregate)) *
                            cementbag)
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Cost</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(
                          volume *
                          calcvolume *
                          concreteprice *
                          calcconcreteprice
                        ).toFixed(2)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>$</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Concrete Weight</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {((volume * calcvolume * 2400) / 1000)
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>ton</DataTable.Cell>
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
export default Concrete1;
