
import './App.scss';
import AppInterior from './AppInterior';
import {ThemeProvider} from './contextProvider';

function App() {

  return (
    <ThemeProvider>
    <AppInterior />
    </ThemeProvider>
  );
}

export default App;