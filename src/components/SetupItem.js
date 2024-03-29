import React from 'react';
import styled from 'styled-components';

const SetupItem = (item) => {
    return (    
        <div>
            {
              Object.values(item)
                .map( (property, index) => {
                    return ( 
                        <Url 
                            href={property.url} 
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"        
                            >
                            <div style={{margin: '0 auto', padding: '20px'}} key={index}>
                                <SetupImage src={property.image} alt='bertacodes setup item'/>
                            </div>
                            <Title>
                                {property.title}
                            </Title>
                        </Url>
                    )
                })
            }
        </div>  
    )
}

export default SetupItem;

const Url = styled('a')`
display: flex;
flex-direction: column;
justify-content: center;
text-decoration: none;
color: #000;
margin: 20px;
box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`

const Title = styled('div')`
text-transform: uppercase;
font-size: 12px;
font-weight: 600;
text-align: center;
margin-top: -10px;
padding: 10px;
background-color: #f0f0f0;
`

const SetupImage = styled('img')`
margin-bottom: 0;
max-height: 160px;
max-width: auto;
`