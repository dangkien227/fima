import styled from "styled-components";
import btn1 from '../../../assets/images/trai.png'
import btn2 from '../../../assets/images/phai.png'
import face1 from '../../../assets/images/face1.png'
import face2 from '../../../assets/images/face2.png'
import face3 from '../../../assets/images/face3.png'
import ic from '../../../assets/images/“.png'

const Main = styled.div`
position: absolute;
background: #F4F6F8;
width: 100%;
height: 1080px;
top: 4577px;
`
const Title = styled.div`
    position: absolute;
    h1{
        position: absolute;
        width: 544px;
        height: 180px;
        left: 131px;
        top: 130px;
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 90px;
        line-height: 90px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #204370;
    }
`
const Btn = styled.div`
    .btn1{
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(23, 41, 64, 0.8);
        left: 1248px;
        top: 210px;
    }
    .btn1 img{
        position: absolute;
        left: 18px;
        top: 20px;
    }
    .btn2{
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(23, 41, 64, 0.8);
        left: 1310px;
        top: 210px;
    }
    .btn2 img{
        position: absolute;
        left: 18px;
        top: 20px;
    }
`
const Listbox = styled.div``
const Box = styled.div`
    .box1{
        position: absolute;
        width: 390px;
        height: 433px;
        top: 440px;
        left: 131px;
    }
    .box2{
        position: absolute;
        width: 390px;
        height: 433px;
        top: 440px;
        left: 555px;
    }
    .box3{
        position: absolute;
        width: 390px;
        height: 433px;
        top: 440px;
        left: 979px;
    }
    .rec{
        position: absolute;
        left: 0%;
        right: 0%;
        top: 9.93%;
        bottom: 0%;
        background: #FFFFFF;
        width: 390px;
        height: 390px;
    }
    .ava{
        position: absolute;
        left: 7.69%;
        right: 66.15%;
        top: 0%;
        bottom: 68.59%;
    }
    .ic{
        position: absolute;
        left: 41.54%;
        right: 52.05%;
        top: 7.16%;
        bottom: 87.53%;
    }
    h1{
        position: absolute;
        left: 41.54%;
        right: 36.15%;
        top: 19.4%;
        bottom: 74.13%;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #232327;
        width: 124px;
    }
    h3{
        position: absolute;
        left: 41.54%;
        right: 10%;
        top: 26.33%;
        bottom: 68.59%;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #232327;
        opacity: 0.67;
    }
    a{   
        position: absolute;
        left: 7.69%;
        right: 8.21%;
        top: 40.65%;
        bottom: 19.86%;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(35, 35, 39, 0.9);
    }
    u{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        position: absolute;
        width: 87px;
        height: 26px;
        left: 30px;
        top: 367px;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        color: #204370;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
`
const Intro = styled.div`
    position: absolute;
    width: 1238px;
    height: 240px;
    left: 131px;
    top: 960px;
    background: #204370;
    h1{
        position: absolute;
        width: 724px;
        height: 56px;
        left: 310px;
        top: 60px;
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 56px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
`

function Aboutden (props){
    return (
        <Main>
            <Title>
                <h1>WHAT PEOPLE ARE SAYING ABOUT DEN</h1>
            </Title>
            <Btn>
                <div className="btn1"><img  src={btn1}></img></div>
                <div className="btn2"><img  src={btn2}></img></div>
            </Btn>
            <Box>
                <div className="box1">
                    <div className="rec"></div>
                    <img className="ava" src={face1}></img>
                    <img className="ic" src={ic}></img>
                    <h1>Simon JD</h1>
                    <h3>Co-Founder and CEO, Travelio</h3>
                    <a>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
<br/><br/>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</a>
                    <u>Learn more</u>
                </div>
                <div className="box2">
                    <div className="rec"></div>
                    <img className="ava" src={face2}></img>
                    <img className="ic" src={ic}></img>
                    <h1>Jane Cooper</h1>
                    <h3>Co-Founder and CEO, Travelio</h3>
                    <a>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
<br/><br/>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</a>
                    <u>Learn more</u>
                </div>
                <div className="box3">
                    <div className="rec"></div>
                    <img className="ava" src={face3}></img>
                    <img className="ic" src={ic}></img>
                    <h1>Albert Flores</h1>
                    <h3>Marketing Coordinator, Gillette </h3>
                    <a>Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done.
<br/><br/>Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.</a>
                    <u>Learn more</u>
                </div>
            </Box>
            <Intro>
                <h1>Draper Startup House is on a mission to enable <br/>ONE million entrepreneurs worldwide by 2023</h1>
            </Intro>
        </Main>
    )
}

export default Aboutden;