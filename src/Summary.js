import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  containerText: {
    fontFamily: 'Lato',
    fontSize: 11
  }
});

const Summary = () => (
  <View style={styles.container}>
    <Title>Summary</Title>
    <View>
      <Text style={styles.containerText}>
      A software engineer and open source contributor with 4+ years experience on software development, web design and development, git, writing unit and end-to-end tests, deployment and setup CI server. Actively contributing to open source and listed as one of the top 10 JavaScript GitHub developer in Indonesia by git-awards.com
      </Text>
    </View>
  </View>
);

export default Summary;
