import { Form } from "./components/Form";
import { Header } from "./components/Header";
import "./index.css";

function App() {
  return (
    <main className="flex-col justify-center items-center h-screen bg-slate-400">
      <Header />
      <div>
        <Form />
      </div>
    </main>
  );
}

export default App;
