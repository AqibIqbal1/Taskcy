import {Image, Text, TouchableOpacity, View} from 'react-native';
import logo from './../assets/Logo.png';

const GetStarted = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#6C5CFF'}}>
      <View style={{flex: 3}}>
        <Image
          source={require('./../assets/getstarted.png')}
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
        <View
          style={{
            flex: 0.5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 12,
              borderRadius: 20,
              backgroundColor: '#5451D6',
            }}></View>
          <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 20,
                backgroundColor: '#8D8D8D',
              }}></View>
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 20,
                backgroundColor: '#8D8D8D',
              }}></View>
          </View>
        </View>
        <View style={{flex: 0.5, display: 'flex', alignItems: 'center'}}>
          <Image source={logo} />
        </View>
        <View
          style={{
            flex: 3,
            display: 'flex',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: '700',
              color: '#2F394B',
              textAlign: 'center',
            }}>
            Building Better Workplaces
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#8D8D8D',
              textAlign: 'center',
            }}>
            Create a unique emotional story that describes better than words
          </Text>
        </View>
        <View style={{flex: 2, display: 'flex', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5451D6',
              width: '80%',
              height: '50%',
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('onboard1');
            }}>
            <Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
