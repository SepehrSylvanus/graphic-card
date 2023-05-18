import "./App.css";
import Card from "./components/card/Card";
import Body from "./components/body/Body";
import Bio from "./components/bio/Bio";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Card/>}>
  <Route path="about" element={<Body/>}/>
<Route path="bio" element={<Bio/>}/>
<Route path="contact" element={<Contact/>}/>
</Route>
  ))
  return (
    <div>
     
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
