import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {

  state ={
    listaDePosts:[ {
      nomeUsuario:'Paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },    

    {
     nomeUsuario:'Angelica',
      fotoUsuario:'https://picsum.photos/51/51',
      fotoPost:'https://picsum.photos/200/160'
     },
  
     {
      nomeUsuario:'Maria',
      fotoUsuario:'https://picsum.photos/54/54',
      fotoPost:'https://picsum.photos/200/170'
  }]

  }

  render() {

  const listaDePosts = this.state.listaDePosts.map((post, index)=>{
      
    return <Post key ={index}
    nomeUsuario = {post.nomeUsuario}
    fotoUsuario = {post.fotoUsuario}
    fotoPost = {post.fotoPost}  
      />
  })

   return (
     <MainContainer>
        {listaDePosts}
     </MainContainer>

 );
   }
  }     
 
                      
export default App;
