import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const [onfocus, SetOnFocus] = useState();
  return (
    <TextInput
      style={onfocus ? style.InputFocus : style.Input}
      onFocus={() => {
        SetOnFocus(true);
      }}
      onBlur={() => {
        SetOnFocus(false);
      }}
      onChangeText={e => {
        console.log(e);
      }}
    />
  );
};

export default Input;

const style = StyleSheet.create({
  Input: {
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8D8D8D',
    fontSize: 14,
  },
  InputFocus: {
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#756EF3',
    fontSize: 14,
    fontWeight: '700',
  },
});
