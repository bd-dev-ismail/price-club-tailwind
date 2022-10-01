
import './App.css';
import AssignmentMarks from './conponents/AssignmentMarks/AssignmentMarks';

import Navbar from './conponents/Navbar/Navbar';
import PhoneBar from './conponents/PhoneBar/PhoneBar';
import Pricing from './conponents/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className='text-3xl font-bold my-4 text-orange-700'>This is Tailwind Component</h1>
      <Pricing/>
      <AssignmentMarks/>
      <PhoneBar/>
    </div>
  );
}

export default App;
