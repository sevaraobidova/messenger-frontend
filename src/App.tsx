import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="container">
      <Button variant="create">Create new account</Button>
      <Button variant="login">Log in</Button>
      <Button variant="forget">Forgot Password?</Button>
      <Button variant="default">Turn on</Button>
    </div>
  );
}

export default App;
