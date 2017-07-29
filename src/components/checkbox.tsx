import * as React from "react";

import { StyleSheet, Text, TouchableWithoutFeedback, View, RegisteredStyle } from "react-native";

interface ICheckboxProps {
  title: string;
  style?: RegisteredStyle<{}>;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

interface ICheckboxState {
  checked: boolean;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  state: ICheckboxState = {
    checked: this.props.checked || false
  };
  
  onPress = () => {
    const { onCheckedChange } = this.props;
    const { checked } = this.state; 

    this.setState({
      checked: !checked
    }, () => {
      if (onCheckedChange)
        onCheckedChange(checked);
    });
  }

  render() {
    const { title } = this.props;
    const { checked } = this.state; 

    const slideStyle = [styles.slide];
    if (checked)
      slideStyle.push(styles.slideChecked);
    
    return (
      <TouchableWithoutFeedback
        accessibilityComponentType="button"
        accessibilityTraits="button"
        accessibilityLabel={title}
        onPress={this.onPress}
      >
        <View style={styles.button}>
          <View style={slideStyle}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const size = 20;
const margin = 2;

const styles = StyleSheet.create({
  button: {
    borderRadius: (size + (margin * 2)) / 2,
    overflow: "hidden",
    borderWidth: 1,
    height: size + (margin * 2),
    width: size * 2,
    justifyContent: "center",
    position: "relative",
  },
  slide: {
    height: size,
    width: size,
    borderRadius: size / 2,
    margin: margin,
    backgroundColor: "#FF530D",
    position: "absolute",
  },
  slideChecked: {
    right: 0,
    backgroundColor: "#00B270",
  }
});