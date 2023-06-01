import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SavedArticles from "./pages/SavedArticles";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="saved-articles" element={<SavedArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
