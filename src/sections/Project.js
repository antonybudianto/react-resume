import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/core';
import Title from '../components/Title';
import List, { Item } from '../components/List';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  link: {
    fontSize: 8,
    fontFamily: 'Lato Italic',
    height: 8
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const ProjectEntry = ({ name, link, details }) => {
  const title = `${name}`;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.link}>{link}</Text>
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

const Project = ({ data }) => (
  <View>
    <Title>{data.title}</Title>
    {
      data.list.map((exp, i) => (
        <ProjectEntry
          key={i}
          name={exp.name}
          link={exp.link}
          details={exp.details}
        />
      ))
    }
  </View>
);

ProjectEntry.propTypes = {
  name: PropTypes.string,
  details: PropTypes.array
};

export default Project;
