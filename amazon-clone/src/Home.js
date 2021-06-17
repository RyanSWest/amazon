import React from 'react'
import styled from 'styled-components';
import './Background.PNG'

function Home() {
    return (
         <Container>
             <h2>HOME</h2>
             <Banner>
               

             </Banner>
             <Content>
                 Scrawny and Frawny On CRACK

             </Content>
         </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 1500px;
margin: 0 auto; `
const Banner = styled.div`
background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenFree_DMUX-4110/Gateway/DV3A/US-EN_030121_FreeTierQ1Refresh_ACQ_GW_Hero_D_1500x600_CV3._CB655482702_.jpg');
// background-image: url('https://i.imgur.com/dFwNmWd.jpeg');
background-image: './Background.PNG';
background-color: green;
min-height: 600px; 
background-position: center;
background-size: cover;
mask-image: linear-gradient(to botton, rgba(0,0,0,1), rgba(0,0,0,0));
`


const Content = styled.div` 
background: white;
padding-left: 10px;
padding-right: 10px;

  

  `
