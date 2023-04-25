import React from 'react';
import { View, Image, Text } from 'react-native';

const ImageContainer = ({  description }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/unboxing.jpg')} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 2,
    backgroundColor: '#ccc',
    borderRadius:20,
  },
  image: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 12
  },
};

export default ImageContainer;
