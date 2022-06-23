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
import AreaView from '../../../components/area';
import LengthView from '../../../components/length';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Bricks2 = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [calclength, setcalcLength] = React.useState('1');
  const [calcwidth, setcalcWidth] = React.useState('1');
  const [calcthick, setcalcThick] = React.useState('1');
  const [length, setLength] = React.useState('5');
  const [width, setWidth] = React.useState('5');
  const [thick, setThick] = React.useState('5');
  const [calclengthW, setcalcLengthW] = React.useState('1');
  const [calcwidthW, setcalcWidthW] = React.useState('1');
  const [calcthickW, setcalcThickW] = React.useState('1');
  const [lengthW, setLengthW] = React.useState('5');
  const [widthW, setWidthW] = React.useState('5');
  const [thickW, setThickW] = React.useState('5');
  const [volume, setVolume] = React.useState('5');
  const [calcvolume, setcalcVolume] = React.useState('1');
  const [wallvolume, setWallVolume] = React.useState('5');
  const [calcwallvolume, setcalcWallVolume] = React.useState('1');
  const [cement, setCement] = React.useState('1');
  const [sand, setSand] = React.useState('5');
  const [aggregate, setAggregate] = React.useState('1');
  const [brickprice, setBrickPrice] = React.useState('0');
  const [numbricks, setNumBricks] = React.useState('0');
  const [subarea, setSubArea] = React.useState('0');
  const [calcsubarea, setcalcSubArea] = React.useState('1');

  React.useEffect(() => {
    const numdata = (
      (parseFloat(lengthW*widthW*thickW*calclengthW*calcthickW*calcwidthW)-parseFloat(subarea*calcsubarea*thickW*calcthickW)) /
      ((parseFloat(length * calclength) + 0.01) *
        (parseFloat(width * calcwidth) + 0.01) *
        (parseFloat(thick * calcthick) + 0.01))
    ).toFixed(1);
    setNumBricks(numdata);
    setWallVolume(parseFloat(lengthW*widthW*thickW*calclengthW*calcthickW*calcwidthW)-parseFloat(subarea*calcsubarea*thickW*calcthickW));
    console.log('changed', calclengthW, lengthW);
  }, [
    length,
    width,
    thick,
    calclength,
    calcwidth,
    calcthick,
    wallvolume,
    calcwallvolume,
    lengthW,calclengthW,widthW,calcwidthW,thickW,calcthickW,subarea,calcsubarea
  ]);
  const [openA, setOpenA] = React.useState(false);
  const [openl, setOpenl] = React.useState(false);
  const [openw, setOpenw] = React.useState(false);
  const [opent, setOpent] = React.useState(false);
  const [openlW, setOpenlW] = React.useState(false);
  const [openwW, setOpenwW] = React.useState(false);
  const [opentW, setOpentW] = React.useState(false);
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
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#00ADB5'}}>Volume of Wall :</Text>
                <LengthView
                  label={'Width W'}
                  value={calcwidthW}
                  text={widthW}
                  open={openwW}
                  setOpen={setOpenwW}
                  setText={setWidthW}
                  setValue={setcalcWidthW}
                />
              </View>
              <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#00ADB5'}}>Dimension of Brick :</Text>
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
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                marginTop: 3,
              }}>
                <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                }}>
                <LengthView
                  label={'Thickness t'}
                  value={calcthickW}
                  text={thickW}
                  open={opentW}
                  setOpen={setOpentW}
                  setText={setThickW}
                  setValue={setcalcThickW}
                />
              </View>
              <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                }}>
                <LengthView
                  label={'Thickness t'}
                  value={calcthick}
                  text={thick}
                  open={opent}
                  setOpen={setOpent}
                  setText={setThick}
                  setValue={setcalcThick}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                display: 'flex',
                flexDirection: 'row',
                marginVertical: 3,
              }}>
                <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                }}>
                <LengthView
                  label={'Length L'}
                  value={calclengthW}
                  text={lengthW}
                  open={openlW}
                  setOpen={setOpenlW}
                  setText={setLengthW}
                  setValue={setcalcLengthW}
                />
              </View>
              <View
                style={{
                  width: '48%',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
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
              <Text style={{color: '#00ADB5'}}>
                Mortar Ratio and Quantity :
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '30%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Cement'}
                  value={cement}
                  onChangeText={text => setCement(parseFloat(text))}
                />
                <TextInput
                  style={{width: '30%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Sand'}
                  value={sand}
                  onChangeText={text => setSand(parseFloat(text))}
                />
                <TextInput
                  style={{width: '30%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Quantity'}
                  value={aggregate}
                  onChangeText={text => setAggregate(parseFloat(text))}
                />
              </View>
              <Divider style={{width: '150%', marginTop: 5}} />
              <Text style={{color: '#00ADB5'}}>
                Deduction Window or Door Area :
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                    <AreaView
                    label={'Subtract Area'}
                    value={calcsubarea}
                    text={subarea}
                    open={openA}
                    setOpen={setOpenA}
                    setText={setSubArea}
                    setValue={setcalcSubArea}/>
                <TextInput
                  style={{width: '80%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Bricks Price'}
                  value={brickprice}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="per 1" />}
                  onChangeText={text => setBrickPrice(parseFloat(text))}
                />
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
                <Button
                  compact={true}
                  style={{backgroundColor: '#00ADB5'}}
                  icon="calculator"
                  mode="contained"
                  onPress={() => {
                    if (
                      wallvolume &
                      cement &
                      sand &
                      aggregate &
                      length &
                      width &
                      thick
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
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Wall Volume
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {(wallvolume * calcwallvolume).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {'m\u00B3'}
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Number of Bricks
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {numbricks}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        bricks
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Bricks Cost
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {(numbricks * brickprice).toFixed(1)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        ₹
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Dry Motor
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {(
                          1.33 *
                          (parseFloat(wallvolume * calcwallvolume) -
                            parseFloat(
                              numbricks *
                                calclength *
                                calcthick *
                                calcwidth *
                                length *
                                width *
                                thick,
                            ))
                        )
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {'m\u00B3'}
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Cement
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {((
                          1.33 *
                          (parseFloat(wallvolume * calcwallvolume) -
                            parseFloat(numbricks *
                              calclength *
                                calcthick *
                                calcwidth *
                                length *
                                width *
                                thick))
                        )*cement/(parseFloat(cement)+parseFloat(sand)))
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {'m\u00B3'}
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Sand
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {((
                          1.33 *
                          (parseFloat(wallvolume * calcwallvolume) -
                            parseFloat(numbricks *
                              calclength *
                                calcthick *
                                calcwidth *
                                length *
                                width *
                                thick))
                        )*sand/(parseFloat(cement)+parseFloat(sand)))
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {'m\u00B3'}
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize: 10}}>
                        Cement Bags
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        {((
                          1.33 *
                          (parseFloat(wallvolume * calcwallvolume) -
                            parseFloat(numbricks *
                              calclength *
                                calcthick *
                                calcwidth *
                                length *
                                width *
                                thick))
                        )*28.8//1440/50
                        /(parseFloat(cement)+parseFloat(sand)))
                          .toFixed(3)
                          .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                        bags
                      </DataTable.Cell>
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
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Wall Volume
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(wallvolume * calcwallvolume*35.315).toFixed(3)}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {'ft\u00B3'}
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Number of Bricks
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {numbricks}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      bricks
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Bricks Cost
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(numbricks * brickprice).toFixed(1)}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      ₹
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Dry Motor
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(
                        1.33 *35.315*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(
                            numbricks *
                              calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick,
                          ))
                      )
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {'ft\u00B3'}
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Cement
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *35.315*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*cement/(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {'ft\u00B3'}
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Sand
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *35.315*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*sand/(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {'ft\u00B3'}
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Cement Bags
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*28.8//1440/50
                      /(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      bags
                    </DataTable.Cell>
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
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Wall Volume
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {(wallvolume * calcwallvolume*1.308).toFixed(3)}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {'yrd\u00B3'}
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Number of Bricks
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {numbricks}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       bricks
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Bricks Cost
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {(numbricks * brickprice).toFixed(1)}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       ₹
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Dry Motor
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {(
                         1.33 *1.308*
                         (parseFloat(wallvolume * calcwallvolume) -
                           parseFloat(
                             numbricks *
                               calclength *
                               calcthick *
                               calcwidth *
                               length *
                               width *
                               thick,
                           ))
                       )
                         .toFixed(3)
                         .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                     {'yrd\u00B3'}
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Cement
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {((
                         1.33 *1.308*
                         (parseFloat(wallvolume * calcwallvolume) -
                           parseFloat(numbricks *
                             calclength *
                               calcthick *
                               calcwidth *
                               length *
                               width *
                               thick))
                       )*cement/(parseFloat(cement)+parseFloat(sand)))
                         .toFixed(3)
                         .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                     {'yrd\u00B3'}
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Sand
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {((
                         1.33 *1.308*
                         (parseFloat(wallvolume * calcwallvolume) -
                           parseFloat(numbricks *
                             calclength *
                               calcthick *
                               calcwidth *
                               length *
                               width *
                               thick))
                       )*sand/(parseFloat(cement)+parseFloat(sand)))
                         .toFixed(3)
                         .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                     {'yrd\u00B3'}
                     </DataTable.Cell>
                   </DataTable.Row>
 
                   <DataTable.Row>
                     <DataTable.Cell textStyle={{fontSize: 10}}>
                       Cement Bags
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       {((
                         1.33 *
                         (parseFloat(wallvolume * calcwallvolume) -
                           parseFloat(numbricks *
                             calclength *
                               calcthick *
                               calcwidth *
                               length *
                               width *
                               thick))
                       )*28.8//1440/50
                       /(parseFloat(cement)+parseFloat(sand)))
                         .toFixed(3)
                         .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                     </DataTable.Cell>
                     <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                       bags
                     </DataTable.Cell>
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
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Wall Volume
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(wallvolume * calcwallvolume*0.35).toFixed(3)}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      brass
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Number of Bricks
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {numbricks}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      bricks
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Bricks Cost
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(numbricks * brickprice).toFixed(1)}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      ₹
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Dry Motor
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(
                        1.33 *0.35*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(
                            numbricks *
                              calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick,
                          ))
                      )
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      brass
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Cement
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *0.35*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*cement/(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      brass
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Sand
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *0.35*
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*sand/(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      brass
                    </DataTable.Cell>
                  </DataTable.Row>

                  <DataTable.Row>
                    <DataTable.Cell textStyle={{fontSize: 10}}>
                      Cement Bags
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {((
                        1.33 *
                        (parseFloat(wallvolume * calcwallvolume) -
                          parseFloat(numbricks *
                            calclength *
                              calcthick *
                              calcwidth *
                              length *
                              width *
                              thick))
                      )*28.8//1440/50
                      /(parseFloat(cement)+parseFloat(sand)))
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      bags
                    </DataTable.Cell>
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
export default Bricks2;
