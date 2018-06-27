import React from 'react';

class RecipeItem extends React.Component {
  render() {
    let { recipe } = this.props;
    return(
      <div className="recipe-item">
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

export default RecipeItem;
