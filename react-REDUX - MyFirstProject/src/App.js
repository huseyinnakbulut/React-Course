import Counter from './components/Counter'
import ReduceCounter from './components/ReduceCounter'
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'
import IncreaseCounter from './components/IncreaseCounter'
import MultiplyByInput from './components/MultiplyByInput'

function App() {
  return (
    <div className="App">
      <Counter />
      <IncreaseCounter />
      <ReduceCounter />
      <IncreaseByTwoCounter />
      <MultiplyByInput />
    </div>
  )
}

export default App
