import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Page Imports
import Dashboard from './Pages/Dashboard.jsx';
import AddEvent from './Pages/AddEvent.jsx';
import Register from './Pages/Register.jsx'
import Help from './Pages/Help.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/AddEvent",
        element: <AddEvent />
    },
    {
        path: "/NewAccount",
        element: <Register />
    },
    {
        path: "/Help",
        element: <Help />
    }
]);


function App() {
    return (
        <>
            <h1>Navigation</h1>
            <RouterProvider router={router} />
            <hr />
        </>
    );
}

export default App;
