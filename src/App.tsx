import ListGroup from "./components/ListGroup"

function App() {


      let items = [
          'New york',
          'san francisco',
          'tokyo',
          'london',
          'paris'
      ]
      const handleSelectedItem = (item: string) => {
        console.log(item)
      }
  return <div>< ListGroup items={items} heading="cities" onSelectItem={handleSelectedItem}/></div>
}

export default App
