import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from 'recoil'
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
import TodoCreate from "./components/TodoCreate";

function App() {

  return (
    <RecoilRoot>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </RecoilRoot>
  );
}

export default App;
