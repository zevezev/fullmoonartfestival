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
  longnight = "longnight",
}
// | "blue"
// | "harvest"
// | "hunters"
// TODO I might need to add routing to catch weird hyperlinks that remove the "#"
function App() {
  const defaultMoon = EMoon.longnight;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout moon={defaultMoon} />} />
        {Object.values(EMoon).map((moon) => (
          <Route
            key={moon}
            path={`/${moon}`}
            element={<Layout moon={moon} />}
          />
        ))}
        <Route path="/*" element={<Layout moon={defaultMoon} />} />
      </Routes>
    </div>
  );
}
export default App;
