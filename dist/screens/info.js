import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
export class InfoScreen extends React.Component {
    render() {
        return (<View style={styles.container}>
        <Text>Info page</Text>
      </View>);
    }
}
InfoScreen.navigationOptions = {
    title: "Info",
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
