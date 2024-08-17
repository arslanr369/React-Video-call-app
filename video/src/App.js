import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import VideoPage from './components/Videopage';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
   },
   {
    path:"/room/:id",
    element:<VideoPage/>
   }
])
  return (
    <div className="App">
     <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
