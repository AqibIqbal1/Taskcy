import {Text, TouchableOpacity, View} from 'react-native';
import Input from '../components/Base/Input/Index';

const Signin = ({navigation}) => {
  return (
    <View>
      <Text>Signin</Text>
      <Input />
      <TouchableOpacity
        style={{paddingHorizontal: 20}}
        onPress={() => {
          navigation.navigate('signup');
        }}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
