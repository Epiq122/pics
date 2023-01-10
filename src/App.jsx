import ImageShow from "./components/ImageShow.jsx";
import ImageList from "./components/ImageList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <div>
      <SearchBar />
      <ImageList />
      <ImageShow />
    </div>
  );
}

export default App;
