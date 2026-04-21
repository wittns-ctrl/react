function ListGroup() {

    let items = [
        'New york',
        'san francisco',
        'tokyo',
        'london',
        'paris'
    ]
items = []

  return (
    <>
    <h1>List</h1>
    {items.length === 0 && <p>Not found</p>}
    <ul className="list-group">
    {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    </>
  );
}

export default ListGroup;
