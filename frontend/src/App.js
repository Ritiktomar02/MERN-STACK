import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import Home from './component/Home'
import AllPost from './component/AllPost'

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all' element={<AllPost></AllPost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
