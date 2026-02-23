// deleted 

    function deletedCard(button){
    if (button.classList.contains('deleted')){
        const jobCardd= button .parentElement.parentElement
        console.log(jobCardd)
         
       
if (jobCardd){
    const jobName = jobCardd.querySelector('#job-name').innerText;
    console.log(jobName)
    interViewList = interViewList.filter(item=> item.jobName !== jobName);
    rejectedList = rejectedList.filter(item=> item.jobName !== jobName);
}

jobCardd.remove();

calculateCount() ;

    }
    
 }
