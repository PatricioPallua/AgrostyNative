import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./Redux/store/index"
import Login from "./screens/login.js";
import Profile from "./screens/profile.js"

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState("")
  const userLog = useSelector((state) => state.user);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {
          userLog.user ? 
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator> 
          : 
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />            
          </Stack.Navigator>
        }
      </NavigationContainer>
    </Provider>
  );
};

export default App;
