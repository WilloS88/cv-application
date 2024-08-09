import { Form } from "./components/Form";
import { Header } from "./components/ui/Header";
import "./index.css";

function App() {
  return (
    <main className="flex-col justify-center items-center h-screen bg-slate-400">
      <Header />
      <Form />
    </main>
  );
}

export default App;
