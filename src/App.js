import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/header.component";
import GlobalStyle from "./global.styles";
import { Home } from "./pages/Home/home.component";
import { Latest } from "./components/Latest/latest.component";
import { Popular } from "./pages/Popular/popular.component";
import Carousel from "./components/Carousel/carousel";
import { Single } from "./pages/Single/single.component";
import { SingleCard } from "./components/SingleCard/single-card.component";
import { Credits } from "./components/Credits/credit.component";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/popular"  element={<Popular/>}/>
        <Route path="/topfilms"  element={<Latest/>}/>
        <Route path="/movie/:id"  element={<Single/>}/>
        <Route path="/movie/:id"  element={<Credits/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
