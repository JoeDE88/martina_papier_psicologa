import "./App.css";
import { Route, Routes } from "react-router";
import { routesConfig } from "./routesConfig/routesConfig";

function App() {
  return (
    <>
      <Routes>
        {routesConfig.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
