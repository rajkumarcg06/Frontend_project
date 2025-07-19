import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, 
  createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import HomeScreen from './screens/homeScreen';
import AboutUs from './screens/AboutUs';
import Admission from './screens/Admission';
import Result from './screens/Result';


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route index ={HomeScreen} path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/admission' element={<Admission />}/>


        <Route path='/result' element={<Result/>}/>
      </Route>
    )
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
