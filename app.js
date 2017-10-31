
var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
    {props.groceries.map(grocery => 
      <GroceryListItem grocery={grocery} />
    )} 
    </ul>
  </div>
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

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
    );
  }
}

ReactDOM.render(<GroceryList groceries={['apples', 'bananas', 'oranges', 'grapes']} />, document.getElementById("app"));