import logo from './logo.svg';
import './App.css';
import WpSend from './Pages/WpSend';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <div className='gird grid-cols-12 flex'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-9'><WpSend /></div>

      </div>
    </>
  );
}

export default App;
