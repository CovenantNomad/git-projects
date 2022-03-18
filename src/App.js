import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from 'recoil'
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <TodoTemplate>
        
      </TodoTemplate>
    </RecoilRoot>
  );
}

export default App;
