import React from 'react';
import {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/core';
import ReactPDF from '@react-pdf/node';
import path from 'path';
import Header from './sections/Header';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Summary from './sections/Summary';
import Profile from './sections/Profile'
import { data } from './store/data'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 20,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 20,
  },
  footer: {
    fontSize: 8,
    fontFamily: 'Lato Bold',
    align: 'center',
    marginTop: 5,
    marginHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
});

Font.register(`${__dirname}/fonts/Open_Sans/OpenSans-Regular.ttf`, {
  family: 'Open Sans',
});
Font.register(`${__dirname}/fonts/Lato/Lato-Regular.ttf`, {
  family: 'Lato',
});
Font.register(`${__dirname}/fonts/Lato/Lato-Italic.ttf`, {
  family: 'Lato Italic',
});
Font.register(`${__dirname}/fonts/Lato/Lato-Bold.ttf`, {
  family: 'Lato Bold',
});

const Resume = ({ data }) => (
  <Document>
    <Page size="A4">
      <Header data={data.header} />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image
            src={data.imageUrl}
            style={styles.image}
          />
          <Profile />
          <Education data={data.education} />
          <Skills data={data.skills} />
        </View>
        <View style={styles.rightColumn}>
          <Summary />
          <Experience data={data.experience} />
        </View>
      </View>
      <Text style={styles.footer}>
        Generated using https://github.com/antonybudianto/react-resume
      </Text>
    </Page>
  </Document>
);

ReactPDF.render(<Resume data={data} />, `${path.resolve(process.cwd())}/output.pdf`);
