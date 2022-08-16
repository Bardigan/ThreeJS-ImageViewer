import { GlobalContextProvider } from "./context/global-context";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Router />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
