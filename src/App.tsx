import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export enum EMoon {
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
// | "beaver";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/fullmoonartfestival"
          element={<Layout moon={EMoon.beaver} />}
        />
        {Object.values(EMoon).map((moon) => (
          <Route
            key={moon}
            path={`/fullmoonartfestival/${moon}`}
            element={<Layout moon={moon} />}
          />
        ))}
      </Routes>
    </div>
  );
}
export default App;
