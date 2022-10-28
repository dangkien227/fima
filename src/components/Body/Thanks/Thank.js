import styled from "styled-components";

const Main = styled.div`
        position: absolute;
        width: 100%;
        height: 377px;
        left: 0px;
        top: 7472px;
        background: #204370;
    h1{
        position: absolute;
        left: 26.67%;
        right: 26.67%;
        top: 28.44%;
        bottom: 10.25%;
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 56px;
        text-align: center;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    button{
        position:absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 45px;
        gap: 10px;
        left: 45.47%;
right: 45.47%;
top: 67.22%;
bottom: 9.02%;
        width: 156px;
        height: 65px;
        background: #FFCC00;
        border-radius: 40px;
        border: none;
    }
    
        span{
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 26px;
            color: #ffffff;
        }
`
    

function Thank (props){
    return(
        <Main>
            <h1>WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND EMPOWERED</h1>
            <button><span>Join DEN</span></button>
        </Main>
    )
}   

export default Thank