import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";

function App() {
  return (
    <div className="App">
        <Header/>

        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Outlet/>
                </div>
            </div>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
