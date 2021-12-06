import Contract from "./Contract"

function Contracts(){
    return(
        <div>
            <h1>Contract Tracker</h1>
            <button className="contract new">New</button>
            <Contract/>
        </div>
    )
}

export default Contracts;