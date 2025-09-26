import Main from "./componentes/Main.jsx";
import Searchbar from "./componentes/Searchbar.jsx";

function App() {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full p-3">
      <Searchbar />
      <Main />
    </section>
  );
}
export default App;
