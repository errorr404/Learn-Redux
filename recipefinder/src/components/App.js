 import React from 'react';
 import SearchRecipes from './SearchRecepies';
 import '../styles/index.css';
 class App extends React.Component {
   render() {
     return(
       <div>
         <h2>Recipe Finder</h2>
         <SearchRecipes />
       </div>
     );
   }
 }

export default App;