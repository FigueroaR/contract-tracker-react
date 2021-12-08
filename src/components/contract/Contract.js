function Contract(props){
    
    const {active,
            budget,
            contractManager,
            contractName,
            dateOfcompletion,
            employeesTotal,
            pastDue} = props.details.data;

    console.log("individual contratc", props.details.id)
    return(
        <div>
            <h1>{contractName}</h1>
            <h2>{contractManager}</h2>
            <p>budget: {budget}</p> 
            <p>employees: {employeesTotal}</p> 
            <p>Date of completion: {dateOfcompletion[0]}</p> 
            <p>Active: {active ? "true" : "false"}</p>
            <p>past due: {pastDue ? "true" : "false"}</p>  
            <button className="contract edit">Edit</button>
            <button className="contract delete">Delete</button>
        </div>
        
    )
}

export default Contract;

