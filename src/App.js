
import './App.css';
import Post from './post';
import Header from './Header';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={
         <main>
         <Header/> 
         <Post/>
         <Post/>
         <Post/>
      </main>
      }/>
      <Route path={'./login'}element={
        <div>login</div>
      }/>
     </Routes>
  );
}

export default App;
