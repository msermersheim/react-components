var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['apples', 'bananas', 'oranges', 'grapes']}/>
    <GroceryListItem item={['mango']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    <li onClick={onListItemClick}>{props.groceries[0]}</li>
    <li>{props.groceries[1]}</li>
    <li>{props.groceries[2]}</li>
    <li>{props.groceries[3]}</li>
  </ul>
);


var onListItemClick = (event) => {
  console.log('Item was clicked');
};

var GroceryListItem = (props) => (
  <li>{props.item[0]}</li>
);

var Grapes = () => (
  <li>grapes</li>
);


ReactDOM.render(<App />, document.getElementById("app"));