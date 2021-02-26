// import ReactDOM from 'react-dom'
import * as React from "react";
import AppNavigator from './src/router/navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import rootReducer from './src/redux/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
    </Provider>
  )

}
export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: 'black',
  },
});

