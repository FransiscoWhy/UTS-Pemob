import React from "react";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
// import FunctionalComponent from "./screens/functional_component";
// import ClassComponent from "./screens/class_component";
import News from "./screens/news";
import NewsDetail from "./screens/newsdetail";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor="#AA0002" />
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Fransisco Wahyu S (1203210045)</Text>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Raeact Native Networking",
            ...headerStyle,
          }}
        />

        {/* <Stack.Screen
          name="FunctionalComponent"
          component={FunctionalComponent}
          options={{
            title: "Functional Component",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="ClassComponent"
          component={ClassComponent}
          options={{
            title: "Class Component",
            ...headerStyle,
          }}
        /> */}

        <Stack.Screen
          name="News"
          component={News}
          options={{
            title: "Techno News",
            ...headerStyle,
          }}
        />

        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            title: "News Detail",
            ...headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
