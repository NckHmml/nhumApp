import * as React from "react";

import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  RegisteredStyle
} from "react-native";

interface ICheckboxProps {
  title: string;
  style?: RegisteredStyle<{}>;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  animation?: CheckboxAnimation;
}

export enum CheckboxAnimation {
  None,
  Back,
  Bounce,
  Ease,
  Elastic,
  Exponential,
  Linear // Default
}

interface ICheckboxState {
  checked: boolean;
  slideAnimation: Animated.Value;
}

export class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  state: ICheckboxState = {
    checked: this.props.checked || false,
    slideAnimation: new Animated.Value(0),
    
  };

  private isAnimating: boolean = false;

  private getEasing(): (value: number) => number {
    switch (this.props.animation) {
      case CheckboxAnimation.Back: {
        return Easing.back(1.7);
      }
      case CheckboxAnimation.Bounce: {
        return Easing.bounce;
      }
      case CheckboxAnimation.Ease: {
        return Easing.ease;
      }
      case CheckboxAnimation.Elastic: {
        return Easing.elastic(1);
      }
      case CheckboxAnimation.Exponential: {
        return Easing.exp;
      }
      case CheckboxAnimation.None: {
        return Easing.step0;
      }
      default: {
        return Easing.linear;
      }
    }
  }

  private onFinishAnimation = () => {
    this.isAnimating = false;
  };

  private onPress = () => {
    const { onCheckedChange } = this.props;
    const { checked, slideAnimation } = this.state;

    if (this.isAnimating)
      return;

    this.setState({
      checked: !checked
    }, () => {
      if (onCheckedChange)
        onCheckedChange(this.state.checked);
      // Animation
      this.isAnimating = true;
      if (this.state.checked)
        Animated.timing(
          slideAnimation,
          {
            toValue: (size * 2 - margin * 3) - size,
            easing: this.getEasing(),
            duration: duration
          }
        ).start(this.onFinishAnimation);
      else
        Animated.timing(
          slideAnimation,
          {
            toValue: 0,
            easing: this.getEasing(),
            duration: duration
          }
        ).start(this.onFinishAnimation);
    });
  }

  render() {
    const { title } = this.props;
    const { checked, slideAnimation } = this.state;

    const slideStyle = [
      styles.slide, 
      { left: slideAnimation }
    ];
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
          <Animated.View style={slideStyle} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const size = 22;
const margin = 2;
const duration = 300;

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
    backgroundColor: "#00B270",
  }
});