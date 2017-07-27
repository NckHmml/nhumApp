import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

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
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.onNextPage}
          title="Next page"
        />
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
