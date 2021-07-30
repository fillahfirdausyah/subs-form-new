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
import LengkapiPage from "./Page/LengkapiPage";
import LengkapiEditPage from "./Page/LengkapiEditPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/preview/:uid/:id" exact>
            <PreviewPage />
          </Route>
          <Route path="/lengkapi/:uid/:id" exact>
            <LengkapiPage />
          </Route>
          <Route path="/lengkapi/edit/:uid/:id" exact>
            <LengkapiEditPage />
          </Route>
          <Route path="/edit/:id" exact>
            <EditPage />
          </Route>
          <ProtectedRoute path="/dashboard" component={HomePage} />
          <ProtectedRoute path="/marketing" component={MarketingPage} />
          <ProtectedRoute path="/form" component={FormPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
