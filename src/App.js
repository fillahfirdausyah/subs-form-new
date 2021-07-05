import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";

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
          <Route path="/" exact>
            <h1>Hallo Selamat Datang</h1>
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <ProtectedRoute path="/dashboard" component={HomePage} />
          <Route path="/form" exact>
            <FormPage />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
