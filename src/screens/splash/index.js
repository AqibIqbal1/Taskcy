import {useEffect} from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('getstarted');
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F6FF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
