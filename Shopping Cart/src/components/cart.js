import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';
class Cart extends React.Component {
  constructor(props){
     super(props);

  }
  render() {
    const CartItem = this.props.cart.map((item,index)=>{
      return <li key={index}> {item}</li>
    });

    return (
      <div className="cart">
         <Shelf addItem={this.props.actions.addToCart} />
         <h2>Cart Items</h2>
         <ul>
           {CartItem}
         </ul>
      </div>
    );
  }
}

function mapStateToProps(state,prop) {
  return {
    cart: state.cart
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Cart);
