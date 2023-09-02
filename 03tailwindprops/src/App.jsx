import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold bg-emerald-400 p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Adil" btnText="visit me" />
    </>
  );
}

export default App;
