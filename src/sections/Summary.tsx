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
    width: '55%'
  },
});

const Summary = () => (
  <View style={styles.container}>
    <Title>Summary</Title>
    <View>
      <Text style={styles.containerText}>
        A software engineer with 9+ years experience on web development from various industry (HRIS, E-Commerce, Fintech, CRM, Omni-channel).
 Also been an open source contributor for CLI and frontend libraries on GitHub.
      </Text>
    </View>
  </View>
);

export default Summary;
