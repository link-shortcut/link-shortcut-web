import "./App.css";
import CreateUrlPage from "./pages/CreateUrlPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen dark:bg-gray-700">
      <Header />
      <CreateUrlPage />
      <Footer />
    </div>
  );
}

export default App;
