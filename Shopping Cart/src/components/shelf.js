import React from 'react';

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state ={
      shelfItems: [
        "Dell Laptop",
        "Mac-Book",
        "HP Desktop"
      ]
    }
  }
  onClickAdd(item) {
this.props.addItem(item);
  }
    render() {
    const shelfItems = this.state.shelfItems.map((item, index) =>{
     return <li key={index}><button onClick={()=>this.onClickAdd(item)}>[+]</button>{item}</li>
    });
    return (
      <div>
          <h2>Shelf</h2>
          <ol>
            {shelfItems}
          </ol>
      </div>
    );
  }
}

export default Shelf;
