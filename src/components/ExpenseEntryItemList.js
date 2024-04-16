// import React, { Component } from 'react'
// import './ExpenseEntryItemList.css'

// export class ExpenseEntryItemList extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseEnter = this.handleMouseEnter.bind();
//     this.handleMouseLeave = this.handleMouseLeave.bind();
//     this.handleMouseOver = this.handleMouseOver.bind();
//     this.state = {
//       items: this.props.items
//     }
//   }

//   handleDelete = (id, e) => {
//     e.preventDefault();
//       console.log(id);
//       this.setState((state, props) => {
//          let items = [];
//          state.items.forEach((item, idx) => {
//             if(item.id !== id)
//                items.push(item)
//          })
//          let newState = {
//             items: items
//          }
//          return newState;
//       })
//   }


//   getTotal() {
//     let total = 0;
//     for(var i = 0; i < this.state.items.length; i++) {
//        total += this.state.items[i].amount
//     }
//     return total;
//  }

//   componentDidMount() {
//     console.log(
//       "ExpenseEntryItemList :: Initialize :: componentDidMount :: Component mounted"
//     );
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(
//       "ExpenseEntryItemList :: Update :: shouldComponentUpdate invoked :: Before update"
//     );
//     return true;
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log(
//       "ExpenseEntryItemList :: Initialize / Update :: getDerivedStateFromProps :: Before update"
//     );
//     return null;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log(
//       "ExpenseEntryItemList :: Update :: getSnapshotBeforeUpdate :: Before update"
//     );
//     return null;
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(
//       "ExpenseEntryItemList :: Update :: componentDidUpdate :: Component updated"
//     );
//   }
//   componentWillUnmount() {
//     console.log(
//       "ExpenseEntryItemList :: Remove :: componentWillUnmount :: Component unmounted"
//     );
//   }

//   handleMouseEnter(e) {
//     console.log(` e.target.parentNode.classList.add("highlight")`, e.target.parentNode.classList.add("highlight"))
//     e.target.parentNode.classList.add("highlight")
//   }

//   handleMouseLeave(e) {
//     console.log(` e.target.parentNode.classList.remove("highlight")`, e.target.parentNode.classList.remove("highlight"))
//     e.target.parentNode.classList.remove("highlight")
//   }

//   handleMouseOver(e) {
//     console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")"); 
//   }

//   render() {
//     // const lists = this.props.items.map((item) => (
//     //   <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
//     //     <td>{item.name}</td>
//     //     <td>{item.amount}</td>
//     //     <td>{new Date(item.spendDate).toDateString()}</td>
//     //     <td>{item.category}</td>
//     //   </tr>
//     // ));

//     const lists = this.state.items.map((item) =>
//          <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
//             <td>{item.name}</td>
//             <td>{item.amount}</td>
//             <td>{new Date(item.spendDate).toDateString()}</td>
//             <td>{item.category}</td>
//             <td><a href="#" 
//                onClick={(e) =>  this.handleDelete(item.id, e)}>Remove</a></td>
//          </tr>
//     );

//     return (
//       // <table onMouseOver={this.handleMouseOver}>
//       //   <thead>
//       //     <tr>
//       //       <th>Item</th>  
//       //       <th>Amount</th>
//       //       <th>Date</th>
//       //       <th>Category</th>
//       //     </tr>
//       //   </thead>
//       //   <tbody>{lists}</tbody>
//       // </table>
//       <table onMouseOver={this.handleMouseOver}>
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Amount</th>
//             <th>Date</th>
//             <th>Category</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//         <tbody>{lists}</tbody>
//         <tr>
//             <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
//             <td colSpan="4" style={{ textAlign: "left" }}>
//               {this.getTotal()}
//             </td> 
//           </tr>
//       </table>
//     );
//   }
// }

// export default ExpenseEntryItemList


import React, { useState } from 'react'
import './ExpenseEntryItemList.css'

function ExpenseEntryItemList(props) {

  const [items, setItems] = useState(props.items);

  function handleMouseEnter(e) {
      console.log(` e.target.parentNode.classList.add("highlight")`, e.target.parentNode.classList.add("highlight"))
      e.target.parentNode.classList.add("highlight")
  }
    
  function handleMouseLeave(e) {
    console.log(` e.target.parentNode.classList.remove("highlight")`, e.target.parentNode.classList.remove("highlight"))
    e.target.parentNode.classList.remove("highlight")
  }
    
  function handleMouseOver(e) {
    console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")"); 
  }

  function handleDelete (id, e) {
    e.preventDefault();
      console.log(id);
      
      let newItems = [];
      items.forEach((item, idx) => {
        if(item.id !== id)
            newItems.push(item)
      })
      setItems(newItems)
  }
    
  function getTotal() {
    let total = 0;
    for(var i = 0; i < items.length; i++) {
        total += items[i].amount
    }
    return total;
  }

  const lists = items.map((item) =>
    <tr key={item.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{new Date(item.spendDate).toDateString()}</td>
      <td>{item.category}</td>
      <td><a href="#" 
          onClick={(e) =>  handleDelete(item.id, e)}>Remove</a></td>
    </tr>
  );

  return (
    <div>
      <table onMouseOver={handleMouseOver}>
         <thead>
           <tr>
             <th>Item</th>
             <th>Amount</th>
             <th>Date</th>
             <th>Category</th>
             <th>Remove</th>
           </tr>
         </thead>
         <tbody>{lists}</tbody>
        <tr>
            <td colSpan="1" style={{ textAlign: "right" }}>Total Amount</td>
             <td colSpan="4" style={{ textAlign: "left" }}>
               {getTotal()}
             </td> 
           </tr>
       </table>
    </div>
  )
}

export default ExpenseEntryItemList
