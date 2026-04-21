import ListGroup from "./components/ListGroup"

function App() {


      let items = [
          'New york',
          'san francisco',
          'tokyo',
          'london',
          'paris'
      ]
  return <div>< ListGroup items={items} heading="cities"/></div>
}

export default App
