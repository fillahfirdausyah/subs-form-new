import { Switch, Route } from "react-router-dom";

// Component
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import FormPage from "./Page/FormPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/dashboard" exact>
          <HomePage />
        </Route>
        <Route path="/form" exact>
          <FormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
