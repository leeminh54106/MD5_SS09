import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/userss")
    .then((resp)=>resp.json())
    .then((resp) => console.log(resp));
  }, []);
  return <></>;
}

export default App;
