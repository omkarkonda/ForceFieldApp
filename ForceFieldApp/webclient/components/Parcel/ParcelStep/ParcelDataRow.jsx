import React from 'react';
import {
    Table,
    TableRow,
    TableBody,
    TableHeader,
    TableRowColumn,
  } from 'material-ui/Table';

  import {Collapse,Well,Row,Col} from 'react-bootstrap';

  const style={
    dateRangeStyle:{
        borderRight:"1px solid #ccc",
        marginTop:"5px"
    },
    dateRangeHeader:{
        marginTop: "0",
        color:"#666666"
    },
    paddingZero:{
        padding:"2px 0px"
    }
}

class ParcelDataRow extends React.Component {
    state={
        
        showCheckboxes: true,
        slectedTradeID: null,
        flipRow:false
    }

    openCollapse=()=>{
        // this.setState({slectedTradeID: this.props.data.trid});
        // console.log('row clicked=>', this.props.data.trid);
        this.setState({flipRow: true});
        let BuyTradeData={
            "buy_deal":this.props.data.trid,   
            "product":this.props.data.product_name,
            "volume_type":this.props.data.volume,
           
            "loadport":this.props.data.trade_location,
           
            "inco_term":this.props.data.inco_term,
           
            "quality_api":this.props.data.quality_api,
            "quality_sul":this.props.data.quality_sul,
            "tolerance":this.props.data.tolerance
        }

        this.props.buyTradePhase1(BuyTradeData);
        
    }
    openCollapseReverse=()=>{
        this.setState({flipRow: false});
    }

    render() {
        if(this.state.flipRow==false){
            return(
                <TableRow onTouchTap={this.openCollapse} style={{width:"100%"}} >
                    <TableRowColumn >{this.props.data.create_timestamp}</TableRowColumn>
                    <TableRowColumn>{this.props.data.trid} </TableRowColumn>
                    <TableRowColumn> {this.props.data.party2} </TableRowColumn>
                    <TableRowColumn> {this.props.data.product_name} </TableRowColumn>
                    <TableRowColumn> {this.props.data.volume} </TableRowColumn>
                    <TableRowColumn> {this.props.data.trade_location} </TableRowColumn>
                    <TableRowColumn> {this.props.data.inco_term} </TableRowColumn>
                </TableRow>
            )
        }
        return(
            <TableRow  style={{width:"100%"}} >
                <TableRowColumn colSpan={4} style={{backgroundColor:"grey"}}>Row Has been selected</TableRowColumn>
                <TableRowColumn colSpan={3} onTouchTap={this.openCollapseReverse} style={{backgroundColor:"orange"}}> Revert Selection</TableRowColumn>
               
            </TableRow>
        )
    }
}

export default ParcelDataRow;