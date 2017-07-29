import * as React from "react";
import { StackNavigator } from "react-navigation";
import { HomeScreen } from "./screens/home";
import { InfoScreen } from "./screens/info";
export class App extends React.Component {
    render() {
        const App = StackNavigator({
            Home: { screen: HomeScreen },
            Info: { screen: InfoScreen }
        });
        return <App />;
    }
}
