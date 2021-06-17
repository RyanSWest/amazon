import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
         <Container>
            <Title>
                Ipad Pro

                <Price>
                  $1449
                </Price>
                <Rating>
                                     

                    
                    
                    
                </Rating>
                <Image 
                // src = 'https://m.media-amazon.com/images/I/71xP2cB-HjL._AC_UY327_FMwebp_QL65_.jpg
                src= 'https://tse3.mm.bing.net/th?id=OIP.EqZBCdooSWG-ecFJBLi_PwHaHa&pid=Api&P=0&w=300&h=300'
                
                
                />
                <ActionSection>

                <AddToCartButton>Add to Cart</AddToCartButton>

                </ActionSection>
 
            </Title>
         </Container>
    )
}

export default Product

const Container = styled.div`
background-color: white;
z-index:100;
flex: 1;
margin: 10px;
padding: 20px;
max-height: 400px;
display: flex;
flex-direction:column;
 




`
const Price = styled.span`
font-weight: 500;
margin-top: 3px;

`
const Title = styled.span``
const Rating = styled.div ``
const Image = styled.img`
max-height:200px;
object-fit:contain;`
const AddToCartButton = styled.button`
width:100px;
height: 30px;
background-color:#f0c14b;
border: 2px solid #a88734;
border-radius: 2px;

`
const ActionSection = styled.div`
display:grid;
place-items: center
 `

