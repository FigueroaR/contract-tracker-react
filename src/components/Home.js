import NavBar from "./NavBar"
import Contracts from "./contract/Contracts"
function Home(props) {
    return(
        <div className="Home">
            
            <div className="title-holder">
                <h1 className="main-title">Contract Tracker</h1>
            </div>
            <NavBar/>
            <Contracts/>
        </div>
    )
    
}

export default Home