import "./App.css";
import Address from "./component/profile/Address";
import Name from "./component/profile/FullName";
import Profil from "./component/profile/ProfilePhoto";

function App() {
  return (
    <>
      <div className="whole file">
        <Profil />
        <Name />
        <Address />
      </div>
    </>
  );
}

export default App;
