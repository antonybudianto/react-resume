import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "../components/Title";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  containerText: {
    fontFamily: "Lato",
    fontSize: 10,
  },
});

const Profile = () => (
  <View style={styles.container}>
    <Title>Profile</Title>
    <View>
      <Text style={styles.containerText}>Name: Antony Budianto</Text>
      <Text style={styles.containerText}>From: Pontianak, Indonesia</Text>
    </View>
  </View>
);

export default Profile;
