import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import { Suspense, lazy } from "react";
import { PersonalInfo } from "./components/forms/PersonalInfo.js";
import { Education } from "./components/forms/Education.js";
import { Experience } from "./components/forms/Experience.js";
import { Skills } from "./components/forms/Skills.js";
import CVContext from "./context/CVContext.js";

const Home = lazy(() => import("./pages/Home.js"));
const Preview = lazy(() => import("./pages/Preview.js"));
const Admin = lazy(() => import("./pages/Admin.js"));

function App() {
  const [cvInfo, setCVInfo] = useState({
    personal: {},
    education: {},
    experience: {},
    skill: {}
});

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CVContext.Provider value={{ cvInfo, setCVInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="preview" element={<Preview />} />
          <Route path="admin" element={<Admin />}>
            <Route path="personal" index element={<PersonalInfo />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skill" element={<Skills />} />
          </Route>
        </Routes>
      </CVContext.Provider>
    </Suspense>
  );
}

export default App;