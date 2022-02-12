import {useState} from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";
import {BsXLg} from 'react-icons/bs';
import { device, Button, colors } from '../../GlobalStyles';
import { Link, Outlet } from 'react-router-dom';

const Navlogo = styled.h2`
    font-size:20px;
    color:white;
    padding:0;
    margin:0;
`

const NavContainer = styled.nav`
    background:${colors.primaryBlue};
    position:fixed;
    top:0;
    width:100%;
    padding:.5rem 2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:999;
`
const NavlogoWrapper = styled.div`
    /* background:purple; */
`

const NavLinkWrapper = styled.div`
    /* background:olive; */
    display:flex;
    @media ${device.mobileS}{
        display:none;
    }
    @media ${device.tablet}{
        display:flex;
    }
   
`
const MenuButton = styled(FiMenu)`
    color:white;
    width: 24px;
    height:24px;
    cursor:pointer;
`
const CrossButton = styled(BsXLg)`
    color:white;
    width: 24px;
    height:24px;
    cursor:pointer;
`
const MenuBtnWrapper = styled.div`
    margin-right:3rem;
    @media ${device.mobileS}{
        display:block;
    }
    @media ${device.tablet}{
        display:none;
    }  
`
const NavLink = styled.div`
    margin-right:  3rem;
    cursor:pointer;
    display:flex;
    align-items:center;
`
const NavLinkText = styled.span`
    color:white;
    display:block;
    font-weight: 500;
`
type SideDrawerPropsType = {
    toggleDrawer:boolean 
}
const SideDrawer = styled.div<SideDrawerPropsType>`
     background:${colors.primaryBlue};
    /* opacity: .8; */
    position:absolute;
    top:0px;
    left:${({toggleDrawer}) => toggleDrawer ? 0 : "-500px"};
    width:60vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: all linear .5s;

    @media ${device.mobileS}{
        ${NavLink}{
            margin: 8px 0;        
            width:100%;
            display:block;
            text-align:center;
            /* &:hover{
                background:gray;
                transition: all linear .4s;
            } */
        }
    }
    @media ${device.tablet}{
        display:none;
    }
`

const Navbar = () =>{
    const [toggleDrawer, setToggleDrawer] = useState(false)

    const handleToggleDrawer = () => {
        setToggleDrawer(prvtoggle => !prvtoggle);
    }

    return(
        <>   <NavContainer>
            <NavlogoWrapper>
                <Navlogo>
                    MoodTracker
                </Navlogo>
            </NavlogoWrapper>
            <MenuBtnWrapper>
                {
                    toggleDrawer ? 
                        <CrossButton onClick={handleToggleDrawer}/>
                        : <MenuButton  onClick={handleToggleDrawer}/>
                }
            </MenuBtnWrapper> 
            <NavLinkWrapper>
                 <NavLink>
                   <Link to="/dashboard">
                         <NavLinkText>Dashboard</NavLinkText>
                     </Link>
                 </NavLink>
                 <NavLink>
                     <Link to="/stats">
                         <NavLinkText>Stats</NavLinkText>
                     </Link>
                 </NavLink>
                 <NavLink>
                     <Button width={"80px"}>Login</Button>
                 </NavLink>
                 <NavLink>
                     <Button width={"80px"}>Sign Up</Button>
                 </NavLink>
            </NavLinkWrapper>

             <SideDrawer toggleDrawer={toggleDrawer}>
                 <NavLink onClick={handleToggleDrawer}>
                     <Link to="/dashboard">
                         <NavLinkText>Dashboard</NavLinkText>
                     </Link>
                 </NavLink>
                 <NavLink onClick={handleToggleDrawer}>
                     <Link to="/stats">
                         <NavLinkText>Stats</NavLinkText>
                     </Link>
                 </NavLink>
                 <NavLink>
                     <Button width= {"120px"}>Login</Button>
                 </NavLink>
                 <NavLink>
                     <Button width= {"120px"}>Sign Up</Button>
                 </NavLink>
            </SideDrawer>       
            </NavContainer>
            <Outlet/>
        </>

    );
}

export default Navbar;