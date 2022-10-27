import backgroundimg from '../../assets/images/Copy of Academy-Group 1.png';
import den from '../../assets/images/den.png';
import styled from "styled-components";
import Font from '../../assets/fonts/transfonter.org-20221021-100200/AlternateGotNo1D.woff2';


const Content = styled.div`

`
const Background = styled.div`
    
`

const Maincontent = styled.div`
    
    width: 450px;
    height: 383px;
    position: absolute;
    top: 190px;
    margin-left: 530px;

`

const Logo = styled.div`
    
    
    margin-left: 135px;
    margin-bottom: 28px;
    


`
const Content1 = styled.div`
    
    margin-bottom: 24px;

    h1 {
        font-family: 'Alternate Gothic No1 D';
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 56px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
    }
    
`
const Content2 = styled.div`

h3 {
    margin-left: 50px;
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 45px;
    width: 346px;
    height: 52px;
    left: 578px;
    top: 427px;
}
`
const Contentbtn = styled.div`
button{
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 45px;
    gap: 10px;
    margin-left: 150px;
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

console.log(backgroundimg)

function Banner(props) {
    return (
        <Content>
            <Background>
                <img src={backgroundimg} style={{width:'100%'}}/>
                <Maincontent>
                <Logo>
                    <img src={den}></img>
                </Logo>
                <Content1>
                    <h1 >GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</h1>
                </Content1>
                <Content2>
                <h3>Get all the support and education you need to achieve full potential as an entrepreneur.</h3>
                </Content2>
                <Contentbtn>
                    <button><span>Join DEN</span></button>
                </Contentbtn>
                </Maincontent>
            </Background>
                
        </Content>
      );
}

export default Banner;