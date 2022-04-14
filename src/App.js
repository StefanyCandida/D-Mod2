import React from 'react';
import Login from './Imagens/Login.png'

export default class App extends React.Component {
  render() {
    return (
      <div> 
        <h1>TODOFLIX</h1>          
          <h2>Inicio</h2>
            <details>
               <summary>
                 Categoria
               </summary>
                <li>Todos</li>            
                <li>Favoritos</li>
                <li>Já Vistos </li>
                <li>Adcionados</li>                
            </details>  
            <button>Adicionar filme</button>   
            <input type="text" name="text" placeholder="Buscar filme"/>   
            <img src={Login} alt="Login"></img>
            <details>
              <summary> </summary>
            <label for="Login">Login</label>
            <input id="Login"  type="text" name="text"/> 
            <label for="Senha">Senha</label>
            <input id="Senha" type="password" name="password"/>             
            </details>  
              
       </div>
    );
  }
}
