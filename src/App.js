import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from './redux/Store';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
// import ManageFood from './pages/ManageFood';

const App = () => {
  const Stack = createStackNavigator();
  console.log(store.getState());
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Checkout" component={Checkout} />
          {/* <Stack.Screen name="ManageFood" component={ManageFood} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
