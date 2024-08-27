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

const Signin = ({navigation}) => {
  const [formdata, SetFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center'}}>Signin</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 32, color: '#002055'}}>Wellcome Back</Text>
        <Text style={{fontSize: 16}}>
          Please Enter Your email address {'\n'}and password for Login
        </Text>
      </View>
      <View style={{flex: 2, gap: 20}}>
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
        <Text
          style={{textAlign: 'right', fontWeight: '600'}}
          onPress={() => {
            navigation.navigate('onboard1');
          }}>
          Forget Password
        </Text>
        <Button value={'Sign In'} />
      </View>
      <View style={{flex: 2, alignItems: 'center', gap: 30}}>
        <Text>Signin with</Text>
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
          Not Register Yet?{' '}
          <Text style={{color: '#756EF3', fontWeight: '700'}}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signin;
