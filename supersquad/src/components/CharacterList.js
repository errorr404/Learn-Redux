import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { addCharacterById } from '../actions';


class CharacterList extends React.Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul className='list-group'>
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id} className="list-group-item">
                  <div className="list-item">{character.name}</div>
                  <div className="list-item right-button"
                     onClick={()=> this.props.addCharacterById(character.id)}>
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state',state);
  return {
     characters: state.characters
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch)
// }



// export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);
// shorthand syntax without writing the mapDispatchToProps function
export default connect(mapStateToProps,{ addCharacterById })(CharacterList);
