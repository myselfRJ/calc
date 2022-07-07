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
import LengthView from '../../components/length';
import ConcretePerPart1 from '../../components/concreteperpart1';
import ConcretePart1 from '../../components/concretepart1';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

const Ellipse1 = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [calclength, setcalcLength] = React.useState('1');
  const [calcwidth, setcalcWidth] = React.useState('1');
  const [calcthick, setcalcThick] = React.useState('0.01');
  const [length, setLength] = React.useState('5');
  const [width, setWidth] = React.useState('5');
  const [thick, setThick] = React.useState('5');
  const [area, setarea] = React.useState('5');
  const [calcarea, setcalcarea] = React.useState('1');
  const [perimeter, setperimeter] = React.useState('50');
  const [calcperimeter, setcalcperimeter] = React.useState('1');
  const [asphaltPrice, setasphaltPrice] = React.useState('0');
  const [calcasphaltPrice, setcalcasphaltPrice] = React.useState('1');
  const [quantity, setQuantity] = React.useState('1');


  React.useEffect(() => {
    setarea(length * width * 3.14);
    setcalcarea(calclength * calcwidth);
    setperimeter(1.414 * 3.14*Math.sqrt(parseFloat(length*length*calclength*calclength)+parseFloat(width*width*calcwidth*calcwidth)));
    setcalcperimeter('1');
    console.log('changed');
  }, [length, calclength,width,calcwidth]);

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
              <Text style={styles.text}>Calculation of Ellipse Area</Text>
            </TouchableOpacity>
            <View
              style={{
                marginBottom: 5,
                justifyContent: 'center',
                width: '100%',
              }}>
              <Text style={{color: '#00ADB5'}}>Dimensions :</Text>
              <LengthView
                label={'Major Axis Radius R'}
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
                label={'Minor Axis Radius r'}
                value={calcwidth}
                text={width}
                open={openw}
                setOpen={setOpenw}
                setText={setWidth}
                setValue={setcalcWidth}
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
                      area &
                      quantity 

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
                      <DataTable.Cell textStyle={{fontSize:10}}>Area</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(area * calcarea).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B2'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Perimeter</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(perimeter * calcperimeter).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>meter</DataTable.Cell>
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
                      <DataTable.Cell textStyle={{fontSize:10}}>Area</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(area * calcarea*10.7584).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'ft\u00B2'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Perimeter</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(perimeter * calcperimeter*3.282).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>ft</DataTable.Cell>
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
                      <DataTable.Cell textStyle={{fontSize:10}}>Area</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(area * calcarea*1.19596).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'yrd\u00B2'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Perimeter</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(perimeter * calcperimeter*1.0936).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>yrd</DataTable.Cell>
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
                      <DataTable.Cell textStyle={{fontSize:10}}>Area</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                        {(area * calcarea).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>{'m\u00B2'}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell textStyle={{fontSize:10}}>Perimeter</DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>
                      {(perimeter * calcperimeter).toFixed(3)}
                      </DataTable.Cell>
                      <DataTable.Cell textStyle={{fontSize:10}} numeric>meter</DataTable.Cell>
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
                    icon={require('../../resources/images/meter.png')}
                    color="#00ADB5"
                    value="m"
                  />
                  <ToggleButton
                    icon={require('../../resources/images/foot.png')}
                    color="#00ADB5"
                    value="ft"
                  />
                  <ToggleButton
                    icon={require('../../resources/images/yard.png')}
                    color="#00ADB5"
                    value="yrd"
                  />
                  <ToggleButton
                    icon={require('../../resources/images/brass.png')}
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
export default Ellipse1;
