import styled from "styled-components";
import navbarlogo from '../../assets/images/logo-dark.png';

const NavbarHearder = styled.div`
    margin: 0;
    width: 100%;
    height: 90px;
    position: fixed;
    background-color: #0e2c51;
    display:flex;
    align-items:center;
`
const Navigation = styled.div`
    position: fixed;
    z-index:999;
    opacity: 0.8;
    blur: 35px;
    
.logo {
    width: 175px;
    margin-right:45px;
    margin-left: 40px;
    img{
        width:100%;
    }
}

.menu ul{
    display: fixed;
}

.menu li{
    padding: 0px 32px;
    display: block;
    position:relative;
    border-right: 1px solid #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    color: #ffffff;
    opacity:0.7
}
.menu li:first-child{
    border-left:1px solid #fff;
}
`
const NavbarButton = styled.div`
.btn {
    position: absolute;
    left: 84.13%;
    right: 2.67%;
    top: 21.11%;
    bottom: 23.33%;
}

.btn button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 35px;
    gap: 10px;

    position: absolute;
    width: 218px;
    height: 50px;
    left: calc(50% - 218px/2);
    top: calc(50% - 50px/2);
    background: #FFFFFF;
    border: 1px solid #204370;
    border-radius: 25px;
}

.btn a{
    
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
    color: #2a2a2a;
}
`
;

function Navbar(props) {
    return (
        <div>
            <Navigation>
                <NavbarHearder>
                    <div className="logo">
                        <img src={navbarlogo}></img>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>CITIES</li>
                            <li>VENTURES</li>
                            <li>ACEDEMY</li>
                            <li>SERVICES</li>
                            <li>ACCELERATOR</li>
                            <li>ABOUT US</li>
                        </ul>
                    </div>
                    <NavbarButton>
                        <div className="btn">
                            <button><a>Join our community</a></button>
                        </div>
                    </NavbarButton>
                </NavbarHearder>
            </Navigation>
        </div>
    )
}

export default Navbar;

