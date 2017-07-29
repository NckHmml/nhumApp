import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";

export class HomeScreen extends React.Component<NavigationScreenProps<{}>> {
  static navigationOptions = {
    title: "Home",
  };

  onNextPage = () => {
    const { navigate } = this.props.navigation;
    navigate("Info");
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.header}>Hiragana</Text>
            <Checkbox 
              title="Select all"
            />
          </View>
          <View style={styles.row}>
            <Text>Set 1</Text>
            <Checkbox title="Select all" />
          </View>
          <View style={styles.row}>
            <Text>Set 1</Text>
            <Checkbox title="Select all" />
          </View>
          <View style={styles.row}>
            <Text>Set 1</Text>
            <Checkbox title="Select all" />
          </View>
          <Text style={styles.header}>Katana</Text>
          <Button
            onPress={this.onNextPage}
            title="Start"
            style={styles.button}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  }
});
