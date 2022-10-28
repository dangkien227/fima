import styled from "styled-components";
import blog1 from '../../../assets/images/blog1.png'
import blog2 from '../../../assets/images/blog2.png'
import blog3 from '../../../assets/images/blog3.png'
import blog4 from '../../../assets/images/blog4.png'
import blog5 from '../../../assets/images/blog5.png'

const Title = styled.div`
    .btn {
        position: absolute;
        width: 276px;
        height: 65px;
        left: calc(50% - 276px/2 + 485px);
        top: 5924px;   
    }

    .btn button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 35px;
        gap: 10px;
        position: absolute;
        width: 276px;
        height: 65px;
        left: calc(50% - 218px/2);
        top: calc(50% - 50px/2);
        background: #FFFFFF;
        border: 1px solid #204370;
        border-radius: 45px;
    }
    .btn a{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #2A2A2A;
}
h1{
    position: absolute;
    width: 410px;
    height: 90px;
    left: 131px;
    top: 5911px;
    font-family: 'Alternate Gothic No1 D';
    font-style: normal;
    font-weight: 500;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
}
    h2 {
        position: absolute;
        left: 42.07%;
        right: 34%;
        top: 5920px;
        bottom: 30.06%;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(35, 35, 39, 0.8);
    }
    .hr {
        position: absolute;
        width: 1239px;
        height: 10px;
        left: 131px;
        top: 6046px;
        background: #E9ECF1;
        opacity: 0.7;
    }
`
const Box = styled.div`
    .box1{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        position: absolute;
        width: 390px;
        height: 610px;
        left: 131px;
        top: 6122px;
    }
    .box2{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        position: absolute;
        width: 390px;
        height: 620px;
        left: 556px;
        top: 6122px;
    }
    .box3{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        position: absolute;
        width: 390px;
        height: 610px;
        left: 981px;
        top: 6122px;
    }
    .box4{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        position: absolute;
        width: 390px;
        height: 610px;
        left: 131px;
        top: 6762px;
    }
    .box5{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        position: absolute;
        width: 390px;
        height: 610px;
        left: 556px;
        top: 6762px;
    }
    img{
        width: 390px;
        height: 390px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    a{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #204370;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    h1{
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 36px;
        letter-spacing: -0.015em;
        text-transform: uppercase;
        color: #232327;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 7px 35px;
        gap: 10px;
        position: absolute;
        width: 134px;
        height: 40px;
        left: 0px;
        top: 0px;
        background: #FFCC00;
        border-radius: 25px;
        border: none;
        top: 550px;
    }
        span{
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #232327;
            flex: none;
            order: 0;
            flex-grow: 0;
        }
`
const Up = styled.div``


function Register(props) {
    return(
    <Up>
        <Title>
            <h1>UpComing Events</h1>
            <h2>Find the best offline and online events and training programs right here.</h2>
            <div className="btn"><button><a>See all upcoming events</a></button></div>
            <div className="hr"></div>
        </Title>
        <Box>
            <div className="box1">
                <img src={blog1}></img>
                <a>15 jan 2021</a>
                <h1>How to Test Ideas with No Money or Time</h1>
                <button><span>Register</span></button>
            </div>
            <div className="box2">
                <img src={blog2}></img>
                <a>08 jun 2021</a>
                <h1>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</h1>
                <button><span>Register</span></button>
            </div>
            <div className="box3">
                <img src={blog3}></img>
                <a>17 may 2021</a>
                <h1>Yoga – first cass for beginer – feel free to sign up here.</h1>
                <button><span>Register</span></button>
            </div>
            <div className="box4">
                <img src={blog4}></img>
                <a>15 jan 2021</a>
                <h1>How to Test Ideas with No Money or Time</h1>
                <button><span>Register</span></button>
            </div>
            <div className="box5">
                <img src={blog5}></img>
                <a>08 jun 2021</a>
                <h1>CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA</h1>
                <button><span>Register</span></button>
            </div>
        </Box>
    </Up>  
    )  
}

export default Register;