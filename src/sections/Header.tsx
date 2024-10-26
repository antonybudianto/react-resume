import React from "react";
import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    backgroundColor: "#6C7A89",
    alignItems: "stretch",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 4,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 24,
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Lato",
  },
  subtitle: {
    fontSize: 10,
    color: "white",
    justifySelf: "flex-end",
    textTransform: "uppercase",
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "white",
    textDecoration: "none",
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
});

export default ({ data }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{data.fullName}</Text>
      <Text style={styles.subtitle}>{data.subTitle}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link src={`mailto:${data.email}`} style={styles.link}>
        <Text>{data.email}</Text>
      </Link>
      <Link src={data.github} style={styles.link}>
        <Text>{data.github}</Text>
      </Link>
    </View>
  </View>
);
