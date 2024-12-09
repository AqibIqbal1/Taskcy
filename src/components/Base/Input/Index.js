import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = props => {
  const {placeholder, SetFormData} = props;
  const [onfocus, SetOnFocus] = useState();
  return (
    <TextInput
      placeholder={placeholder}
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8D8D8D',
    fontSize: 14,
  },
  InputFocus: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#756EF3',
    fontSize: 14,
    fontWeight: '700',
  },
});
