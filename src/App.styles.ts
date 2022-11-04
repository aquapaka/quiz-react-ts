import styled, {createGlobalStyle} from "styled-components";
import BackgroundImage from './images/leaves_green_plant_3840x2400.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
      height: 100%;
    }
    
    body {
      background-image: url(${BackgroundImage});
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
    
    * {
      box-sizing: border-box;
      font-family: 'Comfortaa', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
    padding: 20px 0;
  }

  h1 {
    background-image: linear-gradient(180deg, #b1e7b3, #247e26);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #000000);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #93cf96, #4caf50);
    border: 2px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    text-align: center;
    font-size: 18px;
  }
`