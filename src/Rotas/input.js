import React from 'react';
import styled from 'styled-components'
import Login from '../Imagens/Login.png'

const Input = styled.input`{
 width:300px;
 background-color:black;
 color:white;
}
`
const Img = styled.img`{
    height:30px;

  }
  `

  const Buscas = styled.div`{
      color:white;
    display:flex;
    justify-content:space-around;
    width:40%;
    position:fixed;
    top:1px;
    right:1px;
  }
  ` 
  const Button = styled.button`{
    color:white;
    background-color:red;  
    border-radius:5px;
    height:30px;
    width:130px;
  
  }
    `


export default class Buscando extends React.Component{

state= {
    filmes:[], 
    listafilmes:[],
}
buscar= (e) => {
    const Buscados = this.state.filmes.filter((item)=>{
        if (item.ondeesta.toLowerase().includes(e.target.value.toLowerase())){
            return true;
        }
    })
    this.setState({
        listaFilme:Buscados
    })

}
render(){
    return(
        <Buscas>
            <div>
            <Button>Adicionar filme</Button> 
                <Input  onChange={this.buscar} type="text" placeholder="▼ Pesquisa"/>
                  <Img src={Login} alt="Login"/>        

            </div>
           <details>
                
              <summary>     </summary>
            <label for="Login">Login</label>
            <input id="Login"  type="text" name="text"/> 
            <label for="Senha">Senha</label>
            <input id="Senha" type="password" name="password"/>             
            </details> 
 
        </Buscas>
    )
}

}