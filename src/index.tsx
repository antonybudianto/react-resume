import React from "react";
import {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import path from "path";
import Header from "./sections/Header";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Summary from "./sections/Summary";
import Profile from "./sections/Profile";
import { data } from "./store/data";
import { fileURLToPath } from "url";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 180,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 20,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 20,
  },
  footer: {
    fontSize: 8,
    fontFamily: "Lato",
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 1,
    color: "gray",
    borderColor: "lightgray",
    borderStyle: "dashed",
  },
});

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename) + '/../src'; // get the name of the directory

Font.register({
  family: "Open Sans",
  src: `${__dirname}/fonts/Open_Sans/OpenSans-Regular.ttf`,
});
Font.register({
  family: "Lato",
  src: `${__dirname}/fonts/Lato/Lato-Regular.ttf`,
});
Font.register({
  family: "Lato Italic",
  src: `${__dirname}/fonts/Lato/Lato-Italic.ttf`,
});
Font.register({
  family: "Lato Bold",
  src: `${__dirname}/fonts/Lato/Lato-Bold.ttf`,
});

const Resume = ({ data }) => (
  <Document>
    <Page size="A4">
      <Header data={data.header} />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image src={data.imageUrl} style={styles.image} />
          <Profile />
          <Education data={data.education} />
          <Skills data={data.skills} />
        </View>
        <View style={styles.rightColumn}>
          <Summary />
          <Experience data={data.experience} />
          <Project data={data.project} />
        </View>
      </View>
      <Text style={styles.footer}>
        Generated by https://github.com/antonybudianto/react-resume,{" "}
        {new Date().getFullYear()}.
      </Text>
    </Page>
  </Document>
);

ReactPDF.render(
  <Resume data={data} />,
  `${path.resolve(process.cwd())}/cv.pdf`
);
