import React from 'react';
import { connect } from 'react-redux';
import { favRecipe} from '../actions';
class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false
    }
  }
  favorite(recipe) {
    this.props.favRecipe(recipe);
    this.setState({favorited:true});
  }
  render() {
    let { recipe } = this.props;
    return(
      <div className="recipe-item">
        {
           this.props.favoriteButton ?
            this.state.favorited ?
            <div className="star">&#9733;</div>
            :
            <div className="star"
              onClick={()=>this.favorite(recipe)}>
              &#9734;
            </div>
          :
          <div></div>
        }


        <div>
        <a href={recipe.href}>
          <h4 className="recipe-text">{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>

      </div>
      <img src={recipe.thumbnail} alt={recipe.title}
      className="recipe-img"/>
    </div>
    );
  }
}

export default connect(null, { favRecipe })(RecipeItem);
