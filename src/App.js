import './App.css';
import { ContextProvider } from './context/context';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Bantuan from './pages/Bantuan/Bantuan';
import ObatPage from './pages/ObatPage/ObatPage';
import DetailObat from './pages/DetailObat/DetailObat';
import Anamnesis from './pages/Anamnesis/Anamnesis';
import Keranjang from './pages/Keranjang/Keranjang';
import ListArtikel from './pages/ListArtikel/ListArtikel';
import Artikel from './pages/Artikel/Artikel';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/bantuan"
            component={Bantuan}
          />
          <Route
            exact
            path="/obat"
            component={ObatPage}
          />
          <Route
            exact
            path="/detail/:id"
            component={DetailObat}
          />
          <Route
            exact
            path="/anamnesis"
            component={Anamnesis}
          />
          <Route
            exact
            path="/keranjang"
            component={Keranjang}
          />
          <Route
            exact
            path="/artikel/:id"
            component={Artikel}
          />
          <Route
            exact
            path="/listartikel"
            component={ListArtikel}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
