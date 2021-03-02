import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, H1} from 'native-base';

const Joke = ({details}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          style={styles.image}
          source={{
            uri: details.icon_url,
          }}
        />
      </CardItem>
      <CardItem cardBody style={styles.cardItem}>
        <H1 style={styles.text}>{details.value}</H1>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
    borderRadius: 10,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});

export default Joke;
