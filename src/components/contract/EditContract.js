import NavBar from "../NavBar";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

function EditContract(){
    return(
        <div>
            <NavBar/>
            edit contract form here
        </div>
    )
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

export default connect(mapStateToProps, null)(EditContract);