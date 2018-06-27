import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link } from 'react-router-dom';
class RecipeList extends React.Component {
  render() {
    return (
      <div>

        <h4 className="link"><Link to='/favorites'>Favorite</Link></h4>
        {
          this.props.recipes.map((recipe,index)=>{
         return (
           <RecipeItem key={index} recipe={recipe}
            favoriteButton={true}
            />

         )
        })
      }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps,null)(RecipeList);
