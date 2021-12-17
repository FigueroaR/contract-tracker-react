import {getContract, deleteContract} from '../../redux/actions/index'

import NavBar from "../NavBar";

import { useNavigate } from "react-router";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



function ReadContract(props){
   
    let navigate = useNavigate()
    if(props.contract){
        const {active,
            budget,
            contractManager,
            contractName,
            dateOfcompletion,
            employeesTotal,
            pastDue} = props.contract.data;

    const { id }  = props.contract

    console.log("READ individual contract", props.contract, active, budget, contractName)

    let onClickEdit = () => {
        console.log("onclick edit", id)
        props.getContract(props.contract)
        navigate(`/contract/${id}/edit`)
    }

    let onClickDelete = () => {
        console.log("delete", id)
        props.deleteContract(id)
        navigate(`/`)
    }


    return(
        <div>
            <NavBar/>
            <h1>{contractName}</h1>
            <h2>{contractManager}</h2>
            <p>budget: {budget}</p> 
            <p>employees: {employeesTotal}</p> 
            <p>Date of completion: {dateOfcompletion}</p> 
            <p>Active: {active === "Yes" ? "true" : "false"}</p>
            <p>past due: {pastDue === "Yes" ? "true" : "false"}</p>  
            <button className="contract edit" onClick={onClickEdit}>Edit</button>
            <button className="contract delete" onClick={onClickDelete}>Delete</button>
        </div>
        
    )
    } else {return <div>LOADING</div>}
    
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContract, deleteContract
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReadContract);

