
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Conponents/Routs/Routs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FromModel from './Conponents/From/FromModel/FromModel';
import PostModel from './Conponents/Home/PostItem/Post/PostModel';

function App() {
  return (
    <div className='App bg-black'>
    <RouterProvider router={router}/>
    <FromModel></FromModel>
    <PostModel></PostModel>
    <ToastContainer />
    </div>
  );
}

export default App;
