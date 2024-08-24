import {Image, SafeAreaView, StatusBar, View} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#8F6FFF" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F6FF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('./src/assets/Logo.png')} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
