import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ExtensionConProvider from "./contexts/ExtensionConProvider";




function App() {
  return (
    <>
      <Header />
      <ExtensionConProvider>
        <Main />
      </ExtensionConProvider>
      <Footer />
    </>
  );
}

export default App;
