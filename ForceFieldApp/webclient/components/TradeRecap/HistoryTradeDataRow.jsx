import React from 'react';


import {
    Table,
    TableRow,
    TableBody,
    TableHeader,
    TableRowColumn,
    TableHeaderColumn
  } from 'material-ui/Table';

  class HistoryTradeDataRow extends React.Component{
    state={

    }
    render(){
    return (
        <div style={{width:"auto"}}>
 
             <TableRow onTouchTap={this.openCollapse} style={{width:"100%"}} >
                 <TableRowColumn style={{width:'10%'}}>{this.props.data.Value.create_timestamp}</TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}>{this.props.data.Value.trid} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.direction} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.party2} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.product_name} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.volume} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.trade_location} </TableRowColumn>
                 <TableRowColumn style={{width:'10%'}}> {this.props.data.Value.inco_term} </TableRowColumn>
             </TableRow>
             </div>
            );
          }
        
        } 
    export default HistoryTradeDataRow;