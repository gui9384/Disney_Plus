import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
      <Container>
        <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />  
        <SignUp>GET ALL THERE </SignUp> 
        <Description>
        Raya And The Last Dragon is available on Disney+ Premier Access. To get Premier Access, you need to already have a subscription to Disney+, which you can get directly from Disney for $8 per month or $80 per year.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" /> 
        </CTA>

      </Container>
    )
}

export default Login
const Container = styled.div`
position:relative;
display:flex;
align-items:top;
justify-content:center;


height : calc(100vh - 70px);
&:before{
  
  background-position: top;
  background-size: cover;
  background-repeat:no-repeat;
  background-image: url("/images/login-background.jpg") ;
content:"";
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:-1;
opacity:0.7;
}
`

const CTA = styled.div`
max-width:650px;
width:90%;
padding : 80px 40px;
display:flex;
flex-direction:column;
margin-top:100px;
align-item:center;
`
const CTALogoOne = styled.img`
`
const CTALogoTwo = styled.img`
`
const SignUp = styled.a`
width:100%;
background-color: #0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
lettere-spacing:1.5px;
margin-bottom:12px;

&:hover{
  background: #0483ee;
}
`
const Description = styled.p`
font-size: 11px;
letter-spacing:1.5px;
text-align: center;
line-height:1.5;
`