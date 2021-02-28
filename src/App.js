import "./App.css";
import Layout from "./components/Layout/Layout";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <Layout>
        <Parent />
      </Layout>
    </div>
  );
}

export default App;
