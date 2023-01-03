import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import Title from "../components/Title";
import List, { Item } from "../components/List";

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
  date: {
    fontSize: 6,
    fontFamily: "Lato Italic",
    height: 8,
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 8,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato",
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Experience = ({ data }) => (
  <View style={styles.mainContainer}>
    <Title>{data.title}</Title>
    {data.list.map((exp, i) => (
      <ExperienceEntry
        key={i}
        company={exp.company}
        date={exp.date}
        details={exp.details}
        position={exp.position}
      />
    ))}
  </View>
);

export default Experience;
