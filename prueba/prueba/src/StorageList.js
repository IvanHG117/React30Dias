// import React from 'react';
import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';
// import {Table, ListGroup } from "reactstrap";


class StorageList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      storages: [],
      totales: [],
      data: [],
      storages12: [],
      totales12: [],
      storages170: [],
      totales170: [],
      storages241: [],
      totales241: [],
    }
  };
  
  
  componentDidMount() {
    var self = this;
    // axios.get('https://api.nephoscloud.mx/metricas/metricas/172.24.16.170/')
    axios.get('http://127.0.0.1:8000/metricas/metricas/172.24.16.170/')
    .then(res => {
      const storages170 = res.data;
      console.log(storages170)
      // this.setState({ storages170 });
      self.setState({storages170 : storages170})
    })
    // axios.get('https://api.nephoscloud.mx/metricas/totales/172.24.16.170/')
    axios.get('http://127.0.0.1:8000/metricas/totales/172.24.16.170/')
    .then(res => {
      const totales170 = res.data;
      console.log(totales170)
      // this.setState({ totales170 });
      self.setState({totales170 : totales170})
    })

    // axios.get('https://api.nephoscloud.mx/metricas/metricas/172.24.16.241/')
    axios.get('http://127.0.0.1:8000/metricas/metricas/172.24.16.241/')
    .then(res => {
      const storages241 = res.data;
      console.log(storages241)
      // this.setState({ storages241 });
      self.setState({storages241 : storages241})
    })
    // axios.get('https://api.nephoscloud.mx/metricas/totales/172.24.16.241/')
    axios.get('http://127.0.0.1:8000/metricas/totales/172.24.16.241/')
    .then(res => {
      const totales241 = res.data;
      console.log(totales241)
      // this.setState({ totales241 });
      self.setState({totales241 : totales241})
    })

    // axios.get('https://api.nephoscloud.mx/metricas/metricas/172.25.254.12/')
    axios.get('http://127.0.0.1:8000/metricas/metricas/172.25.254.12/')
    .then(res => {
      const storages12 = res.data;
      console.log(storages12)
      // this.setState({ storages12 });
      self.setState({storages12 : storages12})
    })
    // axios.get('https://api.nephoscloud.mx/metricas/totales/172.25.254.12/')
    axios.get('http://127.0.0.1:8000/metricas/totales/172.25.254.12/')
    .then(res => {
      const totales12 = res.data;
      console.log(totales12)
      // this.setState({ totales12 });
      self.setState({totales12 : totales12})
    })
  }
  
  render() {
    let letras = {
      color: 'blue',
      textAlign: 'center'
    }

    let contenedor = {
      width: '90%',
      height: 'auto',
      // padding: '20px 20px 10px 20px',
      whiteSpace: 'nowrap',
      margin: '2% 5% 2% 5%'
    
    }

    let recorrer = {
      overflowY: 'hidden',
      overflowX: 'auto',
      width: '90%',
      height: 'auto',
      // padding: '20px 20px 10px 20px',
      whiteSpace: 'nowrap',
      margin: '2% 5% 2% 5%'
    } 
    

    return (
      <div>
        <div style={recorrer}>
          <Table striped bordered hover size="sm" >
            <thead >
              <tr>
                <th as="li">management_ip </th>
                <th as="li">state </th>
                <th as="li">efficiency_ratio </th>
                <th as="li">compression_ratio </th>
                <th as="li">deduplication_ratio </th>
                <th as="li">used_logical_capacity [GB]</th>
                <th as="li">used_capacity [GB]</th>
                <th as="li">capacity_savings [GB]</th>
                <th as="li">allocated_capacity [GB]</th>
                <th as="li">local_backup_capacity [GB]</th>
                <th as="li">stored_virtual_machine_data [GB]</th>
                <th as="li">free_space [GB]</th>
              </tr>
            </thead>
            <tbody>

              {
                this.state.storages170.map(
                storage => ( <tr>
                              <td>{storage.management_ip}</td>
                              <td>{storage.state}</td>
                              <td style={letras}>{storage.efficiency_ratio}</td>
                              <td style={letras}>{storage.compression_ratio}</td>
                              <td style={letras}>{storage.deduplication_ratio}</td>
                              <td>{storage.used_logical_capacity.toFixed(2)}</td>
                              <td>{storage.used_capacity.toFixed(2)}</td>
                              <td>{storage.capacity_savings.toFixed(2)}</td>
                              <td>{storage.allocated_capacity.toFixed(2)}</td>
                              <td>{storage.local_backup_capacity.toFixed(2)}</td>
                              <td>{storage.stored_virtual_machine_data.toFixed(2)}</td>
                              <td>{storage.free_space.toFixed(2)}</td>
                            </tr>
                
                ))
              }
            </tbody>
          </Table>

        </div>
        <div style={contenedor}> 
          <h2>Total</h2>
            { 
              this.state.totales170.map(
              total => (
                      <ListGroup>   
                              <td>used_logical_capacity: {total.used_logical_capacity.toFixed(2)} [GB]</td>
                              <td>used_capacity: {total.used_capacity.toFixed(2)} [GB]</td>
                              <td>capacity_savings: {total.capacity_savings.toFixed(2)} [GB]</td>
                              <td>allocated_capacity: {total.allocated_capacity.toFixed(2)} [GB]</td>
                              <td>local_backup_capacity: {total.local_backup_capacity.toFixed(2)} [GB]</td>
                              <td>stored_virtual_machine_data: {total.stored_virtual_machine_data.toFixed(2)} [GB]</td>
                              <td>free_space: {total.free_space.toFixed(2)} [GB]</td>
                        </ListGroup>  
              ))
            }

        </div>

        <div style={recorrer}>
          <Table striped bordered hover size="sm" >
            <thead >
              <tr>
                <th as="li">management_ip </th>
                <th as="li">state </th>
                <th as="li">efficiency_ratio </th>
                <th as="li">compression_ratio </th>
                <th as="li">deduplication_ratio </th>
                <th as="li">used_logical_capacity [GB]</th>
                <th as="li">used_capacity [GB]</th>
                <th as="li">capacity_savings [GB]</th>
                <th as="li">allocated_capacity [GB]</th>
                <th as="li">local_backup_capacity [GB]</th>
                <th as="li">stored_virtual_machine_data [GB]</th>
                <th as="li">free_space [GB]</th>
              </tr>
            </thead>
            <tbody>

              {
                this.state.storages241.map(
                storage => ( <tr>
                              <td>{storage.management_ip}</td>
                              <td>{storage.state}</td>
                              <td style={letras}>{storage.efficiency_ratio}</td>
                              <td style={letras}>{storage.compression_ratio}</td>
                              <td style={letras}>{storage.deduplication_ratio}</td>
                              <td>{storage.used_logical_capacity.toFixed(2)}</td>
                              <td>{storage.used_capacity.toFixed(2)}</td>
                              <td>{storage.capacity_savings.toFixed(2)}</td>
                              <td>{storage.allocated_capacity.toFixed(2)}</td>
                              <td>{storage.local_backup_capacity.toFixed(2)}</td>
                              <td>{storage.stored_virtual_machine_data.toFixed(2)}</td>
                              <td>{storage.free_space.toFixed(2)}</td>
                            </tr>
                
                ))
              }
            </tbody>
          </Table>

        </div>
        <div style={contenedor}> 
          <h2>Total</h2>
            { 
              this.state.totales241.map(
              total => (
                      <ListGroup>   
                              <td>used_logical_capacity: {total.used_logical_capacity.toFixed(2)} [GB]</td>
                              <td>used_capacity: {total.used_capacity.toFixed(2)} [GB]</td>
                              <td>capacity_savings: {total.capacity_savings.toFixed(2)} [GB]</td>
                              <td>allocated_capacity: {total.allocated_capacity.toFixed(2)} [GB]</td>
                              <td>local_backup_capacity: {total.local_backup_capacity.toFixed(2)} [GB]</td>
                              <td>stored_virtual_machine_data: {total.stored_virtual_machine_data.toFixed(2)} [GB]</td>
                              <td>free_space: {total.free_space.toFixed(2)} [GB]</td>
                        </ListGroup>  
              ))
            }

        </div>

        <div style={recorrer}>
          <Table striped bordered hover size="sm" >
            <thead >
              <tr>
                <th as="li">management_ip </th>
                <th as="li">state </th>
                <th as="li">efficiency_ratio </th>
                <th as="li">compression_ratio </th>
                <th as="li">deduplication_ratio </th>
                <th as="li">used_logical_capacity [GB]</th>
                <th as="li">used_capacity [GB]</th>
                <th as="li">capacity_savings [GB]</th>
                <th as="li">allocated_capacity [GB]</th>
                <th as="li">local_backup_capacity [GB]</th>
                <th as="li">stored_virtual_machine_data [GB]</th>
                <th as="li">free_space [GB]</th>
              </tr>
            </thead>
            <tbody>

              {
                this.state.storages12.map(
                storage => ( <tr>
                              <td>{storage.management_ip}</td>
                              <td>{storage.state}</td>
                              <td style={letras}>{storage.efficiency_ratio}</td>
                              <td style={letras}>{storage.compression_ratio}</td>
                              <td style={letras}>{storage.deduplication_ratio}</td>
                              <td>{storage.used_logical_capacity.toFixed(2)}</td>
                              <td>{storage.used_capacity.toFixed(2)}</td>
                              <td>{storage.capacity_savings.toFixed(2)}</td>
                              <td>{storage.allocated_capacity.toFixed(2)}</td>
                              <td>{storage.local_backup_capacity.toFixed(2)}</td>
                              <td>{storage.stored_virtual_machine_data.toFixed(2)}</td>
                              <td>{storage.free_space.toFixed(2)}</td>
                            </tr>
                
                ))
              }
            </tbody>
          </Table>

        </div>
        <div style={contenedor}> 
          <h2>Total</h2>
            { 
              this.state.totales12.map(
              total => (
                      <ListGroup>   
                              <td>used_logical_capacity: {total.used_logical_capacity.toFixed(2)} [GB]</td>
                              <td>used_capacity: {total.used_capacity.toFixed(2)} [GB]</td>
                              <td>capacity_savings: {total.capacity_savings.toFixed(2)} [GB]</td>
                              <td>allocated_capacity: {total.allocated_capacity.toFixed(2)} [GB]</td>
                              <td>local_backup_capacity: {total.local_backup_capacity.toFixed(2)} [GB]</td>
                              <td>stored_virtual_machine_data: {total.stored_virtual_machine_data.toFixed(2)} [GB]</td>
                              <td>free_space: {total.free_space.toFixed(2)} [GB]</td>
                        </ListGroup>  
              ))
            }

        </div>
      </div>
    )
  }
}

export default StorageList;