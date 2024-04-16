import React, { Component } from 'react'
import FormattedMoney from './FormattedMoney';
import FormattedDate from './FormattedDate';

export class ExpenseEntryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <b>Item:</b> <em>{this.props.item.name}</em>
        </div>
        <div>
          <b>Amount:</b>
          <em>
            <FormattedMoney amount={this.props.item.amount} />
          </em>
        </div>
        <div>
          <b>Spend Date:</b>
          <em>
            <FormattedDate value={this.props.item.spendDate} />
          </em>
        </div>
        <div>
          <b>Category:</b> <em>{this.props.item.category}</em>
        </div>
      </div>
    );
  }
}

export default ExpenseEntryItem
