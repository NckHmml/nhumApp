import { StackNavigator } from "react-navigation";

import { HomeScreen } from "./screens/home";
import { InfoScreen } from "./screens/info";

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: InfoScreen }
});

export default App;