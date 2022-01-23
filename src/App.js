import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import WordPage from "./pages/WordPage";
import WordPOSPage from "./pages/WordPOSPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/:word" element={<WordPage />} />
            <Route path="/:word/:pos" element={<WordPOSPage />} />
            {/* <Route path='/pos/:part' element={} /> */}
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
