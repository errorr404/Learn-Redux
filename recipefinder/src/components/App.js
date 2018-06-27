 import React from 'react';
 import SearchRecipes from './SearchRecepies';
 import RecipeList from './RecipeList';
 import FavoriteRecipeList from './FavoriteRecipeList';
 import '../styles/index.css';
 class App extends React.Component {
   render() {
     return(
       <div>
         <h2>Recipe Finder</h2>
         <SearchRecipes />
         <RecipeList />
         <FavoriteRecipeList />
       </div>
     );
   }
 }

export default App;
