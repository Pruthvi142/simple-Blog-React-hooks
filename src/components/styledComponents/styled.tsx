import styled from 'styled-components'
export const Navigation=styled.header`
&& 
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover {
    background-color: #111;
  }
`
export const HomeContainer=styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
export const CardContainer=styled.div`
box-shadow:2px;
  width: 800px;
  height:400px;
  border:1px solid black;
  text-align:left;
  font-family: arial;
  border-radius:7px;
  margin-top:20px;
  margin-left:20px;
  padding-left:20px;
`