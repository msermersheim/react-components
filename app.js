var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['apples', 'bananas', 'oranges', 'grapes']}/>
    <GroceryListItem item={['mango']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries => 
      <GroceryListItem groceries={groceries} />
    )}
  </ul>
);


var onListItemClick = (event) => {
  console.log('Item was clicked');
};



class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceries}</li>
    );
  }
}


var Grapes = () => (
  <li>grapes</li>
);


ReactDOM.render(<App />, document.getElementById("app"));