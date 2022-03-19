import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from 'recoil'
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

function App() {
  let att

  return (
    <RecoilRoot>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
      </TodoTemplate>
    </RecoilRoot>
  );
}

export default App;
