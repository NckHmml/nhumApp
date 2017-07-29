import * as React from "react";

import { StyleSheet, Text, TouchableOpacity, View, RegisteredStyle } from "react-native";

interface IButtonProps {
  title: string;
  onPress: () => void;
  style?: RegisteredStyle<{}>;
}

export class Button extends React.Component<IButtonProps> {
  render() {
    const { title, onPress, style } = this.props;
    
    return (
      <TouchableOpacity
        accessibilityComponentType="button"
        accessibilityTraits="button"
        accessibilityLabel={title}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View style={[styles.button, style]}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF530D",
    borderRadius: 3,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    padding: 8,
    textAlign: "center",
    fontSize: 18
  }
});