// Demo component
// this is only example component

import React from 'react';
import PropTypes from 'prop-types';
import './MyComponent.style';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { AgGridReact } from 'ag-grid-react';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}

      ],
      rowData: [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
      ]
    }
  }

  componentDidMount() {}

  render() {
    const { name } = this.props;
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
          height: '500px', 
          width: '600px' }} 
      >
      <h1>{name}</h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
}

MyComponent.propTypes = {
  name: PropTypes.string
};

export default MyComponent;
