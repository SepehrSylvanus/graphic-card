import "./App.css";
import Card from "./components/card/Card";
import Body from "./components/body/Body";
import Direction from "./components/direction/Direction";
import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import Form from "./components/form/Form";
import Gallery from "./components/gallery/Gallery";
import Item from "./components/items/Item";
import Project from "./project/Project";

function App() {
  const [enableTransition, setEnableTransition] = useState(true)
  if(!enableTransition){
    setTimeout(()=>{
      setEnableTransition(true)
    }, 100)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="gallery/:itemNumber" element={<Item setEnableTransition={setEnableTransition}/>} />
      <Route path="projects/:projectNumber" element={<Project setEnableTransition={setEnableTransition}/>} />
      <Route path="/" element={<Card setEnableTransition={setEnableTransition} enableTransition={enableTransition}/>}>
        <Route path="social" element={<Body />} />
        <Route path="direction" element={<Direction />} />
        <Route path="menu" element={<Menu />} />
        <Route path="gallery" element={<Gallery />} />
        
        <Route path="projects" element={<Projects/>} />
        <Route path="form" element={<Form/>} />
      </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
