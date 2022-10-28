import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Board } from './src/Components/Board';

export default function App() {
  return (
    <Provider store={store}>
      <Board/>
    </Provider>
  );
}
