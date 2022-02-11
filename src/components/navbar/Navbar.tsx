import {useState} from 'react';
import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";
import {BsXLg} from 'react-icons/bs';
import { device, Button } from '../../GlobalStyles';

const Navlogo = styled.h3`
    /* background:pink; */
    font-size:20px;
    color:white;
    padding:0;
    margin:0;
`

const NavContainer = styled.nav`
    background:#01175d;
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
    /* font-weight: 400; */
`
type SideDrawerPropsType = {
    toggleDrawer:boolean 
}
const SideDrawer = styled.div<SideDrawerPropsType>`
    background: darkgray;
    /* opacity: .8; */
    position:absolute;
    top:44px;
    left:${({toggleDrawer}) => toggleDrawer ? 0 : "-400px"};
    width:40vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: all linear .5s;

    @media ${device.mobileS}{
        ${NavLink}{
            margin: 8px 0;        
            width:100%;
            /* background:lightgray; */
            display:block;
            text-align:center;
            &:hover{
                background:gray;
                transition: all linear .4s;
            }
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
        <NavContainer>
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
                     <NavLinkText>Dashboard</NavLinkText>
                 </NavLink>
                 <NavLink>
                    <NavLinkText>Stats</NavLinkText>
                 </NavLink>
                 <NavLink>
                     <Button width={"80px"}>Login</Button>
                 </NavLink>
                 <NavLink>
                     <Button width={"80px"}>Sign Up</Button>
                 </NavLink>
            </NavLinkWrapper>

             <SideDrawer toggleDrawer={toggleDrawer}>
                 <NavLink>
                     <NavLinkText>Dashboard</NavLinkText>
                 </NavLink>
                 <NavLink>
                    <NavLinkText>Stats</NavLinkText>
                 </NavLink>
                 <NavLink>
                     <Button width= {"100px"}>Login</Button>
                 </NavLink>
                 <NavLink>
                     <Button width= {"100px"}>Sign Up</Button>
                 </NavLink>
            </SideDrawer>       
        </NavContainer>
    );
}

export default Navbar;