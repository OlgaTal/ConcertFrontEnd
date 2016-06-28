import React from 'react';

class Venue extends React.Component{
  constructor(props){
    super(props);
    //this.state = {odds: [], evens: [] };
    // this.create = this.create.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Seats</h3>
        <label for='quantity' style={{marginRight:'20px'}}>Quantity </label>
        <input ref='quantity' type='text' id='quantity'/><br/>

        <label for='type'>Seat Type </label>
        <select ref='type' id='type'>
          <option>Floor</option>
          <option>General</option>
          <option>Balcony</option>
        </select><br/>

        <label for='price'>Price per seat: $</label>
         <input ref='price' type='text' id='price' /><br/><br/>
        <button onClick={this.props.onClick} style={{margin: '0px 0px 0px 20px'}}>Create</button>
      </div>
    );
  }
}

export default Venue;
