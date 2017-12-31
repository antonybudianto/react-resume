import React from 'react';
import { PropTypes } from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/core';
import Title from '../components/Title';
import List, { Item } from '../components/List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 5,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 5,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View style={{
    marginBottom: 5
  }}>
    <Text style={styles.title}>{name}</Text>
    <List>{skills.map((skill, i) => <Item key={i}>{skill}</Item>)}</List>
  </View>
);

const Skills = ({ data }) => (
  <View>
    <Title>{data.title}</Title>
    {
      data.list.map((skill, i) => (
        <SkillEntry
          key={i}
          name={skill.name}
          skills={skill.list}
        />
      ))
    }
  </View>
);

SkillEntry.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
};

export default Skills;
