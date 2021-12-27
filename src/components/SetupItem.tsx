import React, { ReactElement } from 'react';
import { StringObject } from '../types/types';
import styled from 'styled-components';

const defaultProps = {
    item: {} as StringObject
}

export type Props = typeof defaultProps;

const SetupItem = (item: Props): ReactElement => {
    return (    
        <div>
            {
              Object.values(item)
                .map( (property, index: number) => {
                    return ( 
                    <Container key={index}>
                        {property.title}
                        <img src={(property.image as string)}/>
                    </Container>
                    )
                })
            }
        </div>  
    )
}

export default SetupItem;

const Container = styled('div')`
margin: 0 auto;
height: 100px;
width: 40vw;
`


