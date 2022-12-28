
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Conponents/Routs/Routs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App bg-black'>
    <RouterProvider router={router}/>
    <ToastContainer />
    </div>
  );
}

export default App;
