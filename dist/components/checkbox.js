import * as React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
export class Checkbox extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            checked: this.props.checked || false
        };
        this.onPress = () => {
            const { onCheckedChange } = this.props;
            const { checked } = this.state;
            this.setState({
                checked: !checked
            }, () => {
                if (onCheckedChange)
                    onCheckedChange(checked);
            });
        };
    }
    render() {
        const { title } = this.props;
        const { checked } = this.state;
        const slideStyle = [styles.slide];
        if (checked)
            slideStyle.push(styles.slideChecked);
        return (<TouchableWithoutFeedback accessibilityComponentType="button" accessibilityTraits="button" accessibilityLabel={title} onPress={this.onPress}>
        <View style={styles.button}>
          <View style={slideStyle}/>
        </View>
      </TouchableWithoutFeedback>);
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
