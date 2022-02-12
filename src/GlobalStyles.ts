import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
margin:0;
padding:0;
`
interface ColorTypes {
    [key: string] :string 
}

export const colors: ColorTypes = {
    primaryBlue:"#01175d",
    secondaryBlue:"darkblue"
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

  type ButtonPropsType = {
      width: string 
  }

  export const Button = styled.button<ButtonPropsType>`
    padding: 10px 12px;
    color:white;
    border:none;
    background: ${colors.secondaryBlue};
    font-weight: 700;
    cursor:pointer;
    width:${({width}) => width};

  `


export default GlobalStyle;