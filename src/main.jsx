import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import LabMain from './components/LabMain'
import LabCourse from './components/LabMain/LabCourse'
import LabDay from './components/LabMain/LabDay'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lab",
    element: <LabMain />,
  },
  {
    path: "/lab/course/:courseId",
    element: <LabCourse />,
  },
  {
    path: "/lab/course/:courseId/:dayId",
    element: <LabDay />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
