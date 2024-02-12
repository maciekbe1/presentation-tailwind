import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Demo1 } from "./pages/demo-1";
import { Demo2 } from "./pages/demo-2";
import { Demo3 } from "./pages/demo-3";
import { Demo4 } from "./pages/demo-4";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/demo-1" element={<Demo1 />} />
          <Route path="/demo-2" element={<Demo2 />} />
          <Route path="/demo-3" element={<Demo3 />} />
          <Route path="/demo-4" element={<Demo4 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
