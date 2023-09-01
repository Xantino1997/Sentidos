import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPages from "./routes/IndexPages";
import Videos from "./routes/Videos";
import Testimoniales from "./routes/Testimoniales";
import LoginPage from "./routes/LoginPage";
import Profesionales from "./routes/Profesionales";
import About from "./routes/Contactanos";
// import Contactanos from "./routes/Contactanos";
import Post from "./routes/Post";
import MissionComponent from "./routes/Mision";
import Layout from "./Layout";
import Error404 from "./routes/Error404";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPages />} />

          <Route path="/" element={<Layout />}>
            <Route path="/videos" element={<Videos />} />
            <Route path="/testimoniales" element={<Testimoniales />} />
            <Route path="/profesionales" element={<Profesionales />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/nosotros" element={<About />} />
            {/* <Route path="/contactanos" element={<Contactanos />} /> */}
            <Route path="/post" element={<Post />} />
            <Route path="/mision" element={<MissionComponent />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* teacher videos categoria  cursos markeing diseño*/
}
