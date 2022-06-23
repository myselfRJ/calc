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

const Soil4 = ({route, navigation}) => {
  const viewShot = React.useRef();
  const [C, setC] = React.useState('0');
  const [Nc, setNc] = React.useState('0');
  const [sD, setSD] = React.useState('0');
  const [Nq, setNq] = React.useState('0');
  const [Y, setY] = React.useState('0');
  const [B, setB] = React.useState('0');
  const [Ny, setNy] = React.useState('0');
  const [calculate, setCalculate] = React.useState(0);

  const {title} = route.params;

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
    <ScrollView style={{backgroundColor: '#E8F6EF', height: '100%'}}>
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
            <TouchableOpacity
              style={{...styles.card}}
              onPress={() => console.warn('pressed')}>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
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
              <Divider style={{width: '150%', marginTop: 5}} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Effective Cohesion'}
                  value={C}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="C" />}
                  onChangeText={text => setC(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Nc Bearing Capacity Factor'}
                  value={Nc}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text={'Nc'} />}
                  onChangeText={text => setNc(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Vertical Effective Stress'}
                  value={sD}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="δD" />}
                  onChangeText={text => setSD(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Nq Bearing Capacity Factor'}
                  value={Nq}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="Nq" />}
                  onChangeText={text => setNq(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Effective Unit Weight'}
                  value={Y}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="Y" />}
                  onChangeText={text => setY(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Weight or Diameter of Foundation'}
                  value={B}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="B" />}
                  onChangeText={text => setB(parseFloat(text))}
                />
                <TextInput
                  style={{width: '100%', fontSize: 10}}
                  dense={true}
                  mode={'outlined'}
                  activeOutlineColor="#00ADB5"
                  keyboardType="numeric"
                  label={'Nγ Bearing Capacity Factor'}
                  value={Ny}
                  right={<TextInput.Affix textStyle={{color:'#00ADB5',fontWeight:'700'}} text="Nγ" />}
                  onChangeText={text => setNy(parseFloat(text))}
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
                  onPress={() => {setCalculate(parseFloat(1.3*C*Nc)+parseFloat(sD*Nq)+parseFloat(0.3*Y*B*Ny));
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
                      Bearing Capacity
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {(calculate)
                        .toFixed(3)
                        .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1')}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{fontSize: 10}} numeric>
                      {''}
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
export default Soil4;
