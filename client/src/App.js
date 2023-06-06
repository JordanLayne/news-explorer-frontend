import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SavedArticles from "./pages/SavedArticles";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="saved-articles" element={
          <ProtectedRoute>
        <SavedArticles />
        </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
