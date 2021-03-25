import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import { ColorProvider} from './contexts/color';

function App() {
  return (
    <div className="App">
      <ColorProvider value={{color: 'red'}}>
        <div>
          <ColorBox/> 
        </div>
      </ColorProvider>  
    </div>
  );
};

export default App;
