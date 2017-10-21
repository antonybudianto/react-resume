import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/core';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
});

export default ({ data }) => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>{data.school}</Text>
    <Text style={styles.degree}>{data.degree}</Text>
    <Text style={styles.candidate}>{data.year}</Text>
  </View>
);
