import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="max-w-7xl my-0 mx-auto flex flex-col items-center gap-16">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
