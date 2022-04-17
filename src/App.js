import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import Input from './Rotas/input'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0; 
  box-sizing:border-box;
  }
  body{
    background-color:black;
  }

  `

const Header = styled.div`{
display:flex; 
justify-content:space-evenly;
color:white;
width:35%;
}
`
const H1 = styled.h1`{
  color:red;
  }
  `
 
   

export default class App extends React.Component {
  render() {
    return (
     
      <div> 
         <GlobalStyle/>
         <Header>
            <H1>TODOFLIX</H1>          
            <h2>Inicio</h2>
            <details>
               <summary>
                 Categoria
               </summary>
                <ul>
                  <li>Todos</li>            
                  <li>Favoritos</li>
                  <li>Já Vistos</li>
                  <li>Adcionados</li>
                </ul>                
            </details>  
              
            </Header>   
          <Input/>
             
          
              
       </div>
    );
  }
}
