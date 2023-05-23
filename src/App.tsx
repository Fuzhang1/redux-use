
import { Provider } from 'react-redux';
import './App.css';
import ABC from './ABC';
import { store } from './utils/store';

function App() {

  return (
    <Provider store={store}>
      <ABC></ABC>
    </Provider>
  );
}

export default App;
