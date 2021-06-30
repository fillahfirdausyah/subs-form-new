import { Switch, Route } from "react-router-dom";

// Component
import LoginPage from "./Page/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
