import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
  },
  itemLeftColumn: {
    flexDirection: "column",
    marginRight: 5,
  },
  itemRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    marginTop: 3,
    fontSize: 10,
  },
  itemContent: {
    fontSize: 10,
    fontFamily: "Lato",
    width: '60%'
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <View style={styles.itemLeftColumn}>
      <Text style={styles.bulletPoint}>•</Text>
    </View>
    <View style={styles.itemRightColumn}>
      <Text style={styles.itemContent}>{children}</Text>
    </View>
  </View>
);

export default List;
