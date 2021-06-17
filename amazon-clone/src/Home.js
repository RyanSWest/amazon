import React from 'react'
import styled from 'styled-components';
import './Background.PNG';
import Product  from './Product';

function Home() {
    return (
         <Container>
          
             <Banner>
               

             </Banner>
             <Content>
                 
                 <Product/>
                 <Product/>


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
min-height: 600px; 
background-position: center;
background-size: cover;
z-index: 1;
mask-image: linear-gradient(to botton, rgba(0,0,0,1), rgba(0,0,0,0));
`


const Content = styled.div` 
 
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
z-index: 100px;
display: flex;

  

  `

