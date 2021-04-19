import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import ScrollToTop from "./components/footer/scrollToTop.jsx";
import Pages from "./helpers/Pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
