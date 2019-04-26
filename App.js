import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import MainScreen from "./src/screens/Mainscreen";
import SearchScreen from "./src/screens/SearchScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import UserScreen from "./src/screens/UserScreen";
import RequestScreen from "./src/screens/RequestScreen";
import FeedbackScreen from "./src/screens/FeedbackScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import ListScreen from "./src/screens/ListScreen";
import WorkAroundScreen from "./src/screens/WorkAroundScreen";
import CheckFirstTimeScreen from "./src/screens/CheckFirstTimeScreen";

const CategoryStack = createStackNavigator({
  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      header: null
    }
  },
  CategoryList: {
    screen: ListScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppStackNavigator = createStackNavigator({
  home: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null
    }
  },
  category: {
    screen: CategoryStack,
    navigationOptions: {
      header: null
    }
  },
  user: {
    screen: UserScreen,
    navigationOptions: {
      header: null
    }
  },
  request: {
    screen: RequestScreen,
    navigationOptions: {
      header: null
    }
  },
  feedback: {
    screen: FeedbackScreen,
    navigationOptions: {
      header: null
    }
  },
  aboutus: {
    screen: AboutUsScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator({
    checkFirstTime: CheckFirstTimeScreen,
    WorkAround: WorkAroundScreen,
    AppContinue: AppStackNavigator
  })
);
