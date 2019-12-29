import React from 'react';
import ArticleList from './components/ArticleList';
import { articles } from './fixtures';
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;