import "./App.scss";
import Header from "./MainComponents/Header/Header";
import SubHeader from "./MainComponents/SubHeader/SubHeader";
import Main from "./MainComponents/Main/Main";

function App() {
  return (
    <div className="app-root">
      <div className="app-wrapper">
        <Header />
        <SubHeader />
        <Main />
      </div>
    </div>
  );
}

export default App;
