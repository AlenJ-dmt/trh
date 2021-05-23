import "./App.css";
import PlantProfilePage from "./routes/PlantProfilePage/PlantProfilePage";
import Main from "./routes/MainPage/Main";
import AddNewPlant from "./routes/AddNewPlant/AddNewPlant";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/plantProfile/:plantId">
          <PlantProfilePage />
        </Route>
        <Route exact path="/addNewPlant">
          <AddNewPlant />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
