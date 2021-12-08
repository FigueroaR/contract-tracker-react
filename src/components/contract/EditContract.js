import NavBar from "../NavBar";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

function EditContract(props){

    const {active,
        budget,
        contractManager,
        contractName,
        dateOfcompletion,
        employeesTotal,
        pastDue} = props.contract.data;

    const {id} = props.contract

    console.log("edit ",props, active)
    return(
        <div>

            <NavBar/>
            <h1>Edit: {contractName}</h1>
            <h2>{contractManager}</h2>
            <p>budget: {budget}</p> 
            <p>employees: {employeesTotal}</p> 
            
            <p>Active: {active ? "true" : "false"}</p>
            <p>past due: {pastDue ? "true" : "false"}</p> 
            
        </div>
    )
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

export default connect(mapStateToProps, null)(EditContract);