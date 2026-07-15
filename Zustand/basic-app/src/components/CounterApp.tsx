
import useCount from '../countStore'

function CounterApp() {

  let count = useCount((state) => state.count)
  let increment = useCount((state) => state.increment)
  let decrement = useCount((state) => state.decrement)
  let reset = useCount((state) => state.reset)
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      <button onClick={reset}>reset</button>


    </>
  )
}

export default CounterApp
