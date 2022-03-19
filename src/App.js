import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from 'recoil'
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <TodoTemplate>
        <TodoCreate />
        <TodoList />
      </TodoTemplate>
    </RecoilRoot>
  );
}

export default App;
