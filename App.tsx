import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#8B78FF" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8F6FF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30}}>Home Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
