import React, {
    Component
  } from 'react';
  import '../../App.css';
  import './table.css';


  class Table extends Component {
    constructor(props) {
      super(props);
      }
  
    render() {
      return (
        <div className="table-container">
          <div >
             a eos fuga, dolores ad similique cumq
             ue nam perferendis hic
     

             .</div>

<div>

<table  className="flights-table">
<tr>
<th>Flight no.</th>
<th>Flight Date</th> 
<th>Flight Time</th>
</tr>
<tr>
<td>Jill</td>
<td>Smith</td> 
<td>50</td>
</tr>
<tr>
<td>Eve</td>
<td>Jackson</td> 
<td>94</td>
</tr>
<tr>
<td>Eve</td>
<td>Jackson</td> 
<td>94</td>
</tr>
</table>
</div></div>
    
      );
    }
  
  }
  
  export default Table ;  