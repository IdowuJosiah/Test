import React from "react";
import IndexPage from "./Pages/IndexPage";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
    </Routes>
  );
}

export default App;
