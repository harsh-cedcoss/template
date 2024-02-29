import { useState } from 'react'
import Main from './components/movieTable/main';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App
