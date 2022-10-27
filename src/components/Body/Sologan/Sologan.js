import styled from "styled-components";
import anh1 from '../../../assets/images/anh1.png';
import anh2 from '../../../assets/images/anh2.png';
import anh3 from '../../../assets/images/anh3.png';

const Maincontent = styled.div`  
background-color: #F4F6F8; 
width:100%;
height: 2390px
`
const Slg = styled.div`
    position: absolute;
    width: 956px;
    height: 90px;
    left: 272px;
    top: 850px;
    h1 {
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
const Img1 = styled.div`
    img {
        width: 686px;
        height: 438px;
        left: 41px;
        top: 1040px;
        position: absolute;
        z-index:1;
    }
    .nen1{
        position: absolute;
        width: 675px;
        height: 424px;
        left: 0px;
        top: 1108px;
        background: #4c8fcc;
        z-index: -1;
    }

`
const Text1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    position: absolute;
    width: 444px;
    height: 298px;
    left: 867px;
    top: 1040px;
    h1 {
        width: 385px;
        height: 36px;
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #232327;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    a{  
        width: 422px;
        height: 78px;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(35, 35, 39, 0.7);
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 16px;
        width: 444px;
        height: 136px;
        flex: none;
        order: 2;
        flex-grow: 0;
    }
    li {
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #232327;
        margin-left:16px;
    }
`
const Text2 = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;

        position: absolute;
        width: 422px;
        height: 272px;
        left: 131px;
        top: 1682px;
        h1{
            font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #232327;
        flex: none;
        order: 0;
        flex-grow: 0;
        }
        a {
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: rgba(35, 35, 39, 0.7);
            flex: none;
            order: 1;
            flex-grow: 0;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 16px;
            flex: none;
            order: 2;
            flex-grow: 0;
        }
        li {
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #232327;
            margin-left:16px;
        }
`
const Img2 = styled.div`
        img {
            position: absolute;
            width: 686px;
            height: 438px;
            left: 766px;
            top: 1682px;
            z-index: 1;
        }
        .nen2 {
            position: absolute;
            width: 690px;
            height: 424px;
            left: 827px;
            top: 1750px;
            background: #5cc68f;
            
        }
`
const Img3 = styled.div`
        img {
            position: absolute;
            width: 686px;
            height: 438px;
            left: 48px;
            top: 2324px;
        }
        .nen3 {
            position: absolute;
            width: 675px;
            height: 424px;
            left: 0px;
            top: 2392px;
            background: #FFCC00;
        }
`
const Text3 = styled.div`
        h1 {
            position: absolute;
            width: 385px;
            height: 36px;
            left: 861px;
            top: 2324px;
            font-family: 'Alternate Gothic No1 D';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 36px;
            letter-spacing: -0.015em;
            text-transform: uppercase;
            color: #232327;
        }
        a {
            position: absolute;
            width: 422px;
            height: 171px;
            left: 861px;
            top: 2384px;
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #232327;
        }
`
const Btn = styled.div`
        position: absolute;
        width: 156px;
        height: 64px;
        left: 672px;
        top: 2896px;
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
`

function Main(props) {
    return (
        <Maincontent>
            <Slg>
                <h1>Join the Draper entrepreneur network</h1>
            </Slg>
            <Img1>
                <img src={anh1}></img>
                <div className="nen1"></div>
            </Img1>
            <Text1>
                <h1>CONNECT WITH GLOBAL NETWORK</h1>
                <a>DEN membership connects you with inspiring people and ideas to empower your entrepreneurial or fundraising journey.</a>
                <ul>
                    <li>Discover useful resources, software credits, and perks</li>
                    <li>Find the best events and training programs</li>
                    <li>Meet co-founders, advisors, and partners</li>
                    <li>Search and discover trending topics and insights</li>
                </ul>
            </Text1>
            <Img2>
            <div className="nen2"></div>
                <img src={anh3}></img>
                
            </Img2>
            <Text2>
                <h1>GET INSPIRed By PEERS AND EXPERTS</h1>
                <a>Becoming a successful entrepreneur means surrounding yourself with an inspiring ecosystem like DEN.</a>
                <ul>
                    <li>Get constructive feedback from industry experts</li>
                    <li>Read startup stories, successes, and failures</li>
                    <li>Get help on investor relations topics like term sheets</li>
                    <li>Find best practices and professional templates</li>
                </ul>
            </Text2>
            <Img3>
            <div className="nen3"></div>
                <img src={anh2}></img>
                
            </Img3>
            <Text3>
                <h1>ENTREPRENEURS JOIN THE DEN COMMUNITY</h1>
                <a>Our members and their supporters include: founders and teams; mentors and advisors; remote workers and service providers; and angel investors and venture capitalists from around the world.
                     <br/>
                     <br/>
            As a DEN member, you can build a market-ready company much faster than ever before.</a>
            </Text3>
            <Btn>
                <button><span>Join DEN</span></button>
            </Btn>

        </Maincontent>
        
    )
}

export default Main;