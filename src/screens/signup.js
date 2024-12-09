import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../components/Base/Input/Index';
import {useState} from 'react';
import Button from '../components/Base/Button';

const Signup = ({navigation}) => {
  const [formdata, SetFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center'}}>Signup</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 32, color: '#002055'}}>Create Account</Text>
        <Text style={{fontSize: 16}}>
          Please Enter Your Information and {'\n'}create your account
        </Text>
      </View>
      <View style={{flex: 2, gap: 20}}>
        <Input
          placeholder={"Enter You'r Name"}
          SetFormData={SetFormData}
          formdata={formdata.name}
        />
        <Input
          placeholder={"Enter You'r Email"}
          SetFormData={SetFormData}
          formdata={formdata.email}
        />
        <Input
          placeholder={"Enter You'r Password"}
          SetFormData={SetFormData}
          formdata={formdata.password}
        />
        <Button
          value={'Sign up'}
          onPress={() => {
            navigation.navigate('dashboard');
          }}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center', gap: 30}}>
        <Text>Signup with</Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 40}}>
          <View
            style={{
              borderColor: '#8d8d8d',
              borderWidth: 1,
              padding: 5,
              borderRadius: 20,
            }}>
            <Image
              style={{objectFit: 'contain', width: 40, height: 40}}
              source={require('./../assets/google.png')}
            />
          </View>
          <View
            style={{
              borderColor: '#8d8d8d',
              borderWidth: 1,
              padding: 5,
              borderRadius: 20,
            }}>
            <Image
              style={{objectFit: 'contain', width: 40, height: 40}}
              source={require('./../assets/apple.png')}
            />
          </View>
        </View>
        <Text>
          Have an Account?{' '}
          <Text style={{color: '#756EF3', fontWeight: '700'}}>Sign In</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
