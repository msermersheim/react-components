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





class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
    );
  }
}


var Grapes = () => (
  <li>grapes</li>
);


ReactDOM.render(<App />, document.getElementById("app"));