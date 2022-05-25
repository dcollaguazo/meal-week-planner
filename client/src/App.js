import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import { Layout } from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <RouterConfig />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
