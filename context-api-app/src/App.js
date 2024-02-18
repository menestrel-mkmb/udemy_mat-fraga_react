import Alunos from "./components/Alunos";
import UserProvider from './contexts/user';

export default function App() {

  return (
  <UserProvider>
    <div className="App">
      <h1>Context API</h1>
      
      <Alunos />
    </div>
  </UserProvider>
  );
}