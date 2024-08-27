import {Text, TouchableOpacity} from 'react-native';

export default Button = props => {
  const {value} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5451D6',
        width: '100%',
        height: 50,
        borderRadius: 20,
        shadowColor: '#8D8D8D',
        shadowRadius: '50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
