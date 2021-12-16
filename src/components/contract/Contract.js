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

    let onClickRead = () => {
        navigate(`/contract/${id}/`)
        props.getContract(props.details)
    }

    return(
        <div>
            <div onClick={onClickRead}>  
                <h1>{contractName}</h1>
                <h2>{contractManager}</h2>
                <p>Active: {active ? "true" : "false"}</p>
            </div>
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

