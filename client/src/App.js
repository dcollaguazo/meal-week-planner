import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouterConfig />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
