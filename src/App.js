
import './App.css';
import Navbar from './conponents/Navbar/Navbar';
import Pricing from './conponents/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className='text-3xl font-bold my-4 text-orange-700'>This is Tailwind Component</h1>
      <Pricing/>
    </div>
  );
}

export default App;
