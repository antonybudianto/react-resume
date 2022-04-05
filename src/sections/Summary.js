import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "../components/Title";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  containerText: {
    fontFamily: "Lato",
    fontSize: 11,
  },
});

const Summary = () => (
  <View style={styles.container}>
    <Title>Summary</Title>
    <View>
      <Text style={styles.containerText}>
        A software engineer and open source contributor with 7+ years experience
        on software development, web design and development, git, writing unit
        and end-to-end tests, deployment and setup CI server. Actively
        contributing to open source and Google Cloud certified.
      </Text>
    </View>
  </View>
);

export default Summary;
