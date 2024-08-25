import {Image, View} from 'react-native';
import logo from './../assets/Logo.png';

const GetStarted = () => {
  return (
    <View style={{flex: 1,backgroundColor:"#8F6FFF"}}>
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
        }}>
        <View>
          <Image source={logo} />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;
