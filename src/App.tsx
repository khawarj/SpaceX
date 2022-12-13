import "./App.css";
import LaunchPage from "./page/LaunchPage";
import { ModalProvider } from "./hooks/useTimeLine";


function App() {
  return (
    <div className="App flex min-h-screen">
      <ModalProvider>
        <LaunchPage />
      </ModalProvider>
    </div>
  );
}

export default App;
