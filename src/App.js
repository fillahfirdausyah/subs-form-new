import { Switch, Route } from "react-router-dom";

// Context
import { AuthProvider } from "./Context/AuthContext";

// Component
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import FormPage from "./Page/FormPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;