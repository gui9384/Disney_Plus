import React from 'react'
import styled from 'styled-components';

function Details() {
    return (
        <Container>
        <Background>
            <img src="/images/mando.jpg" alt=""/>
        </Background>
        <ImageTiltle>
             <img src="/images/mando_logo.png" alt=""/>
        </ImageTiltle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TraillerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TraillerButton>
            <AddButton>
            <span>+</span>
            </AddButton>
            <GroupWatchButton>
            <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
        2019 ‧ Drame ‧ 2 saisons
        </SubTitle>
        <Description>
        After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. “The Mandalorian” is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy, far from the authority of the New Republic.
        </Description>

        </Container>
    )
}

export default Details
const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;

`
const Background = styled.div`
position:fixed;
top:70px;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`
const ImageTiltle = styled.div`
 height:30vh;
 margin-top:60px;
 width:35vw;
 min-width:200px;
 img{
    width:100%;
    height:100%;
    object-fit:contain;
 }

`
const Controls = styled.div`
display:flex;
align-item:center;
`
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display: flex;
align-items:center;
height:56px;
background: rgb(249, 249, 249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background: rgb(198, 198, 198);
}
`

const TraillerButton = styled(PlayButton)`
 background: rgba(0, 0, 0, 0.3);
 border:1px solid rgb(249, 249, 249);
 color:rgb(249, 249, 249);
 text-transform:uppercase;
`

const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;

align-item:center;
justify-content:center;
border-radius:50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
span{
    font-size:30px;
    color:white;
}
    
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0, 0, 0);
display:flex;

`
const SubTitle = styled.div`
opacity:0.8;
font-size:15px;
margin-top:26px;
`
const Description = styled.div`
line-height:1.4;
font-size: 20px;
margin-top:16px;
opacity:0.8;
max-width:760px;
`