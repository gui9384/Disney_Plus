//import React, { useEffect } from 'react'
import React, {  useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';

// function Example() {
//     const [count, setCount] = useState(0);
  
//     // Similaire à componentDidMount et componentDidUpdate :
//     // useEffect(() => {
//     //   // Met à jour le titre du document via l’API du navigateur
//     //   document.title = `Vous avez cliqué ${count} fois`;
//     // });
  
//     return (
//       <div>
//         <p>Vous avez cliqué {count} fois</p>
//         <button onClick={() => setCount(count + 1)}>
//           Cliquez ici
//         </button>
//       </div>
//     );
//   }

function Home() {

      useEffect(()=>{
          db.collection("movies").onSnapshot((snapshot)=>{
              let tempMovies = snapshot.docs.map((doc)=>{
                  return {id: doc.id, ...doc.data() }
              })
              console.log(tempMovies);
          })
      }, [])
    return (
        <Container>
            <ImgSlider />
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
min-height : calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;

&:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position : absolute;
    top: 0;
    left:0;
    right:0;
    bottom:0;
z-index : -1;
}
`
