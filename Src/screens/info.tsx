import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export class InfoScreen extends React.Component {
  static navigationOptions = {
    title: "Info",
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Info page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
