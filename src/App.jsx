import "./App.css";
import Card from "./components/card/Card";
import Body from "./components/body/Body";
import Direction from "./components/direction/Direction";

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
import SaveContact from "./components/saveContact/SaveContact";
import Share from "./components/share/Share";
import Item from "./components/items/Item";
import Project from "./project/Project";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/share" element={<Share/>}/>
      <Route path="/contact-save" element={<SaveContact/>}/>
      <Route path="gallery/:itemNumber" element={<Item />} />
      <Route path="projects/:projectNumber" element={<Project />} />
      <Route path="/" element={<Card />}>
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
