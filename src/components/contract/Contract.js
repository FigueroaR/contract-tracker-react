import {getContract} from '../../redux/actions/index'

import { useNavigate } from "react-router";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



function Contract(props){
   
    let navigate = useNavigate()
    const {active,
            budget,
            contractManager,
            contractName,
            dateOfcompletion,
            employeesTotal,
            pastDue} = props.details.data;

    const { id }  = props.details

    console.log("individual contratc", props.details.id)

    let onClickEdit = () => {
        console.log("onclick edit", id)
        props.getContract(props.details)
        navigate(`/contract/${id}/edit`)
    }


    return(
        <div>
            <h1>{contractName}</h1>
            <h2>{contractManager}</h2>
            <p>budget: {budget}</p> 
            <p>employees: {employeesTotal}</p> 
            <p>Date of completion: {dateOfcompletion[0]}</p> 
            <p>Active: {active ? "true" : "false"}</p>
            <p>past due: {pastDue ? "true" : "false"}</p>  
            <button className="contract edit" onClick={onClickEdit}>Edit</button>
            <button className="contract delete">Delete</button>
        </div>
        
    )
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContract
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contract);

