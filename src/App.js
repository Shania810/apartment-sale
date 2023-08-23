import './App.css'
import { Navbar } from './sections/Navbar/Navbar'
import { Main } from './sections/Main/Main'
import { Rooms } from './sections/Rooms/Rooms';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Rooms/>
    </div>
  );
}

export default App;
