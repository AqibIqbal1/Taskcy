import {Image, Text, TouchableOpacity, View} from 'react-native';

const OnBoard1 = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 3}}>
        <Image
          source={require('./../assets/onboard1.png')}
          style={{objectFit: 'contain'}}
        />
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingTop: 20,
          gap: 10,
        }}>
        <View style={{flex: 3.5, display: 'flex', paddingHorizontal: 20}}>
          <Text style={{color: '#756EF3', fontSize: 20}}>Task Management</Text>
          <Text style={{color: '#002055', fontSize: 38, fontWeight: '500'}}>
            Let's Create a <Text style={{color: '#756EF3'}}>Space</Text> for
            your workflows.
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 20,
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('onboard1');
            }}>
            <View
              style={{
                width: 30,
                height: 10,
                borderRadius: 20,
                backgroundColor: '#5451D6',
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('onboard2');
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                backgroundColor: '#8D8D8D',
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('onboard3');
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                backgroundColor: '#8D8D8D',
              }}></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingHorizontal: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('onboard2');
            }}>
            <Image source={require('./../assets/nextbutton.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoard1;
