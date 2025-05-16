import './App.css'
import PanelView from "./components/PanelView/PanelView";

function App() {
  const left = (
    <div>
      <h1>This is a title</h1>
      <p>Some text usually follows</p>
    </div>
  )
  const right = (
    <div>
      <h1>This is a title</h1>
      <p>Some text usually follows</p>
    </div>
  )
  const top = (
    <div>This is the search bar</div>
  )
  return (
    <PanelView left={left} right={right} top={top}/>
  )
}

export default App
