import { useEffect, useState } from "react";
import Main from "./componentes/Main.jsx";
import Searchbar from "./componentes/Searchbar.jsx";

function App() {
  const [query, setQuery] = useState("nature");
  return (
    <section className="flex flex-col justify-center items-center h-full w-full p-3">
      <Searchbar setQuery={setQuery} />
      <Main query={query} />
    </section>
  );
}
export default App;
