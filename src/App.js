
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddnUsers from './components/AddnUsers';
import Update from './components/Update';


function App() {

    const router = createBrowserRouter([
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/users/add',
        element:<AddnUsers></AddnUsers>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) =>fetch(`http://localhost:5000/users/${params.id}`)
      }
    ])

  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
