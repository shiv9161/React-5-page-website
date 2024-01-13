import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Router from "./Router"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;