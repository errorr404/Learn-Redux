import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      ingredient: '',
      dish: ''
    }
  }
  search() {
    let {ingredient, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredient}&q=${dish}`;
    //console.log(url);
    fetch(url,{
      method: 'GET'
    }).then(response => response.json())
      .then(json => console.log('recepies',json));
  }
  render() {
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredient</ControlLabel>
          {' '}
          <FormControl
            type="text" placeholder="garlic,Milk"
            onChange={event =>this.setState({ingredient:event.target.value})}
           />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Milk-Magic"
              onChange={event =>this.setState({dish:event.target.value})}
           />
        </FormGroup>
        {' '}
        <Button onClick={()=>{this.search()}}>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes;
