import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    color: "#166ca5",
    fontFamily: "Lato",
    fontSize: 14,
    marginBottom: 8,
    textTransform: "uppercase",
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
