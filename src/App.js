import './App.css'
import { Navbar } from './sections/Navbar/Navbar'
import { Main } from './sections/Main/Main'
import { Rooms } from './sections/Rooms/Rooms'
import { Bathrooms } from './sections/Bathrooms/Bathrooms'
import { Places } from './sections/Places/Places'
import { View } from './sections/View/View'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Rooms />
      <Bathrooms />
      <Places />
      <View />
    </div>
  );
}

export default App;
