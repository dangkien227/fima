import Aboutden from "./Aboutden/Aboutden";
import Howdenwork from "./Howden/Howden";
import Thank from "./Thanks/Thank";
import Register from "./Register/Register";
import Main from "./Sologan/Sologan";
function Maincontent(props){
    return(
        <div className="wapper">
            <Main/>
            <Howdenwork/>
            <Aboutden/>
            <Register/>
            <Thank/>
        </div>
    )
}

export default Maincontent;