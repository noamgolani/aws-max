import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import WordPage from "./pages/WordPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* 
      /:word - dynamic route - word is dynamic URL parameter, used to request backend api
/:word/:partOfSpeech - dynamic route - word is dynamic URL parameter, used to request backend api
/part-of-speech/:part - part is enum URL parameter, used to request backend api */}
        <Routes>
          <Route path="/:word" element={<WordPage />} />
          {/* <Route path='/:word/:pos' element={} /> */}
          {/* <Route path='/pos/:part' element={} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
