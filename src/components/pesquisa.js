import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Table, Jumbotron } from 'reactstrap';

export default props =>(
    <div className='container'>
    <Jumbotron>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="warning">PESQUISAR!</Button>
        </InputGroupAddon>
      </InputGroup>

        
            <hr/>
        <Table dark>
            <thead>
                <tr>
                <th>#</th>
                <th>Nome Dono</th>
                <th>Raça</th>
                <th>Nome Cão</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Fernando De Goes</td>
                <td>Amora</td>
                <td>SRD</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Nathalia Mascarenhas</td>
                <td>Peralta</td>
                <td>Boxer</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Alice De Goes</td>
                <td>Boby</td>
                <td>Pastor Alemão</td>
                </tr>
            </tbody>
        </Table>

    </Jumbotron>


    </div>
)