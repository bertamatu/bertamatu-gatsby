import React from 'react'
import Layout from '../components/Layout';
import styled from 'styled-components';

const Widget = styled.iframe` 
  border:none;
  width:100%;
  padding:0;
  margin-top:5vh;
  margin-bottom:0;
  height:89vh;
`

const Support = () => {
  return (
    <Layout>
    <Widget 
      id='kofiframe' 
      src='https://ko-fi.com/bertacodes/?hidefeed=true&widget=true&embed=true&preview=true' 
      title='bertacodes'
    />
  </Layout>
  )
}

export default Support;
