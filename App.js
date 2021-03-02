import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Axios from 'axios';
import {Button, Spinner} from 'native-base';
import axios from 'axios';
import Joke from './components/Joke';

const URL = 'https://api.chucknorris.io/jokes/random';

const App = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const {data} = await axios.get(URL);

      // console.warn(data);

      const details = data;

      // console.warn(details);

      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  if (!details) {
    return (
      <View style={styles.container}>
        <Spinner color="red" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Joke details={details} />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonStyle} onPress={() => fetchDetails()}>
            <Text style={styles.text}>Joke</Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  text: {
    color: '#eeeeee',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
