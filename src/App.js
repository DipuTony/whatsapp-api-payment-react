import logo from './logo.svg';
import './App.css';
import WpSend from './Pages/WpSend';
import Sidebar from './Components/Sidebar';
import DynamicVar from './Pages/DynamicVar';
import WpFileUpload from './Pages/WpFileUpload';

function App() {
  return (
    <>
      <div className='gird grid-cols-12 flex'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-9 m-5 flex leading-7 space-x-5'>
          <WpSend />
          <DynamicVar />
          <WpFileUpload />
        </div>

      </div>
    </>
  );
}

export default App;
