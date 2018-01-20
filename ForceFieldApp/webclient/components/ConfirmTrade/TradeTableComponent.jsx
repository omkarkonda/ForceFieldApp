import React, { Component } from 'react';
import TradeDataRow from './TradeDataRow';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


  

class DraftTradeTableComponent extends Component {

    state = {
        fixedHeader: false,
        fixedFooter: false,
        stripedRows: true,
        showRowHover: true,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: '300px',
        countTrade:0
       
      };
    
      isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
      };
    
      handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
    };

    
    
    render() {
        return(
            <div className="trTableContainer">
                <h2>
                    {this.props.headingText}
                    <span>{this.props.number}</span>
                </h2>                
                <Table onRowSelection={this.handleRowSelection}>
                <TableHeader  displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
>
                  <TableRow>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Trade ID</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Counter Party</TableHeaderColumn>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Location</TableHeaderColumn>
                    <TableHeaderColumn>Inco Term</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.tradeData.map((item, i) => {
                                return (                                    
                                    <TradeDataRow data={item} key={i} />
                                );
                            })
                        }           
                   </TableBody>
                </Table>
            </div>
        );
    }
}

export default DraftTradeTableComponent;