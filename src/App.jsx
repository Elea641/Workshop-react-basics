import "./App.css";
import Avatar from "./components/Avatar";
import { bart } from "./models/bart.model";
import { homer } from "./models/homer.model";

function App() {
  return (
    <>
      <Avatar
        image={bart.image}
        firstName={bart.firstName}
        lastName={bart.lastName}
      />
      <Avatar
        image={homer.image}
        firstName={homer.firstName}
        lastName={homer.lastName}
      />
    </>
  );
}

export default App;
