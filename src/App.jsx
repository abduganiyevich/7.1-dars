import { useState } from "react";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
function App() {
  const [foydalanuvchi, setFoydalanuvchi] = useState(null);

  const handleLogin = (foydalanuvchiNomi) => {
    setFoydalanuvchi(foydalanuvchiNomi);
  };

  return (
    <div>
      {!foydalanuvchi ? (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <Home foydalanuvchi={foydalanuvchi} />
      )}
    </div>
  );
}

export default App;
