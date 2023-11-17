import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export enum EMoon {
  starfield = "starfield",
  snow = "snow",
  pink = "pink",
  strawberry = "strawberry",
  flowering = "flowering",
  buck = "buck",
  sturgeon = "sturgeon",
  worm = "worm",
  beaver = "beaver",
}
// | "blue"
// | "harvest"
// | "hunters"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout moon={EMoon.starfield} />} />
        {Object.values(EMoon).map((moon) => (
          <Route
            key={moon}
            path={`/${moon}`}
            element={<Layout moon={moon} />}
          />
        ))}
        <Route path="/*" element={<Layout moon={EMoon.starfield} />} />
      </Routes>
    </div>
  );
}
export default App;
