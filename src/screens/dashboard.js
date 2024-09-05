import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Dashboard = ({navigation}) => {
  let cardData = [
    {
      taskName: 'Application Design',
      category: 'Ui Design Kit',
      Team: [
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
      ],
      isComplete: '50/80',
    },
    {
      taskName: 'Application Design',
      category: 'Ui Design Kit',
      Team: [
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
      ],
      isComplete: '50/80',
    },
    {
      taskName: 'Application Design',
      category: 'Ui Design Kit',
      Team: [
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
      ],
      isComplete: '50/80',
    },
    {
      taskName: 'Application Design',
      category: 'Ui Design Kit',
      Team: [
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
        {image: require('./../assets/apple.png')},
      ],
      isComplete: '50/80',
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}>
      <View style={{flex: 0.2}}>
        <Text style={{textAlign: 'center'}}>Signup</Text>
      </View>
      <View style={{flex: 0.3}}>
        <Text style={{fontSize: 32, color: '#002055'}}>
          Let's Make a {'\n'}xhabits together🙌
        </Text>
      </View>
      <View style={{flex: 5.5}}>
        <View style={styles.cardParent}>
          <ScrollView horizontal={true}>
            {cardData.map((val, index) => {
              return (
                <View
                  key={index}
                  style={index % 2 ? styles.cardTwo : styles.card}>
                  <Text>{val.taskName}</Text>
                  <Text>{val.category}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={val.Team[0].image}
                      style={{height: 50, width: 50, tintColor: '#fff'}}
                    />
                    <Image
                      source={val.Team[1].image}
                      style={{height: 50, width: 50, tintColor: '#fff'}}
                    />
                    <Image
                      source={val.Team[2].image}
                      style={{height: 50, width: 50, tintColor: '#fff'}}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{flex: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#002055'}}>In Progress</Text>
            <TouchableOpacity>
              <Image
                source={require('./../assets/right.png')}
                style={{height: 20, width: 20, tintColor: '#756EF3'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            {cardData.map((val, index) => {
              return (
                <View style={styles.progressCard}>
                  <Text style={{color:"#000",}}>{val.taskName}</Text>
                  <Text style={{color:"#000",fontWeight: '700'}}>{val.category}</Text>
                  <Text style={{color:"#000",}}>2 Min Ago</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#756EF3',
    height: 150,
    borderRadius: 20,
    width: 250,
    margin: 5,
    padding: 10,
  },
  cardTwo: {
    borderColor: '#fefefe',
    borderWidth: 2,
    height: 150,
    borderRadius: 20,
    width: 250,
    margin: 5,
    padding: 10,
    color: '#000',
  },
  cardParent: {
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
  },
  progressCard: {
    borderColor: '#fefefe',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 12,
  },
});
