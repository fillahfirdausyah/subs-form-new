import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";

// Context
import { AuthProvider } from "./Context/AuthContext";

// Component
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import FormPage from "./Page/FormPage";
import MarketingPage from "./Page/MarketingPage";
import PreviewPage from "./Page/PreviewPage";
import EditPage from "./Page/EditPage";

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
          <Route path="/form" exact>
            <FormPage />
          </Route>
          <Route path="/preview/:id" exact>
            <PreviewPage />
          </Route>
          <Route path="/edit/:id" exact>
            <EditPage />
          </Route>
          <ProtectedRoute path="/dashboard" component={HomePage} />
          <ProtectedRoute path="/marketing" component={MarketingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
