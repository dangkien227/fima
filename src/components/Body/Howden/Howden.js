import styled from "styled-components";
import ic1 from '../../../assets/images/ic1.png'
import ic2 from '../../../assets/images/ic2.png'
import ic3 from '../../../assets/images/ic3.png'
import ic4 from '../../../assets/images/ic4.png'
import img from '../../../assets/images/Group 2870.png'


const Howden = styled.div`
`
const Title = styled.div`
        position: absolute;
        width: 376px;
        height: 90px;
        left: 131px;
        top: 3220px;
    h1{
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 90px;
        line-height: 90px;
        text-align: center;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #204370;
    }
`
const Listbox =styled.div`
    h1{
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 56px;
        text-align: right;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: rgba(23, 41, 64, 0.1);
    }
    a{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #232327;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
`

const Box1 = styled.div`
    position: absolute;
    width: 264px;
    height: 264px;
    left: 134px;
    top: 3358px;
    background: #F4F6F8;
    img{
        position: absolute;
        width: 40px;
        height: 40px;
        left: 44px;
        top: 40px;
    }
    h1{
        position: absolute;
        width: 30px;
        height: 56px;
        right: 20px;
        top: 19px;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
        position: absolute;
        width: 184px;
        height: 155px;
        left: 44px;
        top: 112px;
    }
    
`
const Box2 = styled.div`
    position: absolute;
    width: 264px;
    height: 264px;
    left: 458px;
    top: 3358px;
    background: #F4F6F8;
    img{
        position: absolute;
        width: 40px;
        height: 40px;
        left: 44px;
        top: 40px;
    }
    h1{
        position: absolute;
        width: 30px;
        height: 56px;
        right: 20px;
        top: 19px;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
        position: absolute;
        width: 184px;
        height: 155px;
        left: 44px;
        top: 112px;
    }
`
const Box3 = styled.div`
    position: absolute;
    width: 264px;
    height: 264px;
    left: 782px;
    top: 3358px;
    background: #F4F6F8;
    img{
        position: absolute;
        width: 40px;
        height: 40px;
        left: 44px;
        top: 40px;
    }
    h1{
        position: absolute;
        width: 30px;
        height: 56px;
        right: 20px;
        top: 19px;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
        position: absolute;
        width: 184px;
        height: 155px;
        left: 44px;
        top: 112px;
    }
`
const Box4 = styled.div`
position: absolute;
    width: 264px;
    height: 264px;
    left: 1106px;
    top: 3358px;
    background: #F4F6F8;
    img{
        position: absolute;
        width: 40px;
        height: 40px;
        left: 44px;
        top: 40px;
    }
    h1{
        position: absolute;
        width: 30px;
        height: 56px;
        right: 20px;
        top: 19px;
    }
    a{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
        position: absolute;
        width: 184px;
        height: 155px;
        left: 44px;
        top: 112px;
    }
`
const Title2 = styled.div`
    position: absolute;
    width: 446.72px;
    height: 318px;
    left: 131px;
    top: 3922px;
    h1{
        position: absolute;
        width: 390px;
        height: 180px;
        left: 131px;
        top: 0px;
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 90px;
        line-height: 90px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #204370;
    }
    a {
        position: absolute;
        width: 446.72px;
        height: 26px;
        left: 131px;
        top: 200px;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(35, 35, 39, 0.8);
    }
    .btn {
        position: absolute;
        width: 156px;
        height: 64px;
        left: 131px;
        top: 250px;
        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 45px;
            gap: 10px;
            width: 156px;
            height: 65px;
            background: #204370;
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

    }
`
const Round = styled.div`
    position: absolute;
    width: 599.3px;
    height: 656.19px;
    left: 770.47px;
    top: 3753px;
`


function Howdenwork(props) {
    return (
        <Howden>
            <Title>
            <h1>How Den Works</h1>
            </Title>
            <Listbox>
            <Box1> 
                <h1>01</h1>
                <img src={ic1}></img>
                <a>Say hello and interact on the DEN Slack channel</a>
            </Box1>
            <Box2> 
                <h1>02</h1>
                <img src={ic2}></img>
                <a>Explore free high-quality on-demand learning content</a>
            </Box2>
            <Box3> 
                <h1>03</h1>
                <img src={ic3}></img>
                <a>Meet co-founders, advisors, partners, customers, and investors</a>
            </Box3>
            <Box4> 
                <h1>04</h1>
                <img src={ic4}></img>
                <a>Find opportunities in the global Draper ecosystem</a>
            </Box4>
            </Listbox>
            <Title2>
                <h1>BUT FIRTS...<br/>YOU HAVE TO JOIN</h1>
                <a>What are you waiting for? Join Den today</a>
                <div className="btn"><button><span>Join DEN</span></button></div>
            </Title2>
            <Round>
                <img src={img}></img>
            </Round>
        </Howden>
        
    )
}

export default Howdenwork;