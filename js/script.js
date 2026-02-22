console.log('Hello World!');

let interViewList = [];
let rejectedList = [];
let  currentStatus = [];

// count section dhora
const totalCount= getElementId('total-count');
const interviewCount= getElementId('interview-count');
const rejectedCount= getElementId('rejected-count');
const totalCount2 = getElementId('job')
// button dhora 

const allBtn = getElementId('all');
const interviewBtn = getElementId('interview')
const rejectedBtn = getElementId('rejected')

// faka array

const filterSection = getElementId('filter-section');

// main container k dhora
const mainContainer = document.querySelector('main')



// card section dhora
const allCards = getElementId('job-section')

// caculate 
function calculateCount(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length;
//     totalCount2.innerText = allCards.children.length

//     // ekhane interview button a dhukle job count dekhabe

// const jobApplied = interViewList.length + rejectedCount.length
 
// if(totalCount2){
//     totalCount2.innerText =`
//     ${jobApplied} of ${totalCount} jobs
    
//     `;
}






calculateCount()

// button toggle 

function toggleBtn (id){

    currentStatus = id ;

    // remove btn-primary from  all button 
    allBtn.classList.remove('btn-primary');
    interviewBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

//  added btn-active to all button 
    allBtn.classList.add('btn-active');
    interviewBtn.classList.add('btn-active');
    rejectedBtn.classList.add('btn-active');

    // console.log(id);

    const selected = getElementId(id);
  
    selected.classList.add('btn-primary');
    selected.classList.remove('btn-active');

    // selected.classList.add('btn-primary');
    if(id =='interview'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
         renderInterview();


    }else if ( id == 'all'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
       
    } else if (  id =='rejected'){
         allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
        
    }


}

// Main cotainer k dhora

mainContainer.addEventListener('click', function(event){
  if(event.target.id === 'interview-btn'){

   const parentNode = event.target.parentNode.parentNode;
   const jobName = parentNode.querySelector('#job-name').innerText;
   const jobSkill = parentNode.querySelector('#skill').innerText;
   const jobRemote= parentNode.querySelector('#remote-job').innerText;
   const interviewStatus = parentNode.querySelector('#status').innerText;
   const jobDiscription = parentNode.querySelector('#job-discription').innerText;

   parentNode.querySelector('#status').innerText='Interview';

    

   const jobInfo ={
    jobName,
    jobSkill,
    jobRemote,
    interviewStatus : 'Interview',
    jobDiscription,
   }
   
//    console.log(jobInfo);

// find jobname eyta ase kina na thakle push korbo 

 const interviewApplied =interViewList.find(item=> item.jobName === jobInfo.jobName)

 if(!interviewApplied){
    interViewList.push(jobInfo);

 }
 console.log(interViewList);

 rejectedList = rejectedList.filter(item=> item.jobName !== jobInfo.jobName );
 if(currentStatus == 'rejected' ){
  renderRejected()
 }


 calculateCount() ;

} else if(event.target.id === 'rejected-btn'){

     const parentNode = event.target.parentNode.parentNode;
   const jobName = parentNode.querySelector('#job-name').innerText;
   const jobSkill = parentNode.querySelector('#skill').innerText;
   const jobRemote= parentNode.querySelector('#remote-job').innerText;
   const interviewStatus = parentNode.querySelector('#status').innerText;
   const jobDiscription = parentNode.querySelector('#job-discription').innerText;

   parentNode.querySelector('#status').innerText='Rejected';

    

   const jobInfo ={
    jobName,
    jobSkill,
    jobRemote,
    interviewStatus : 'Rejected',
    jobDiscription,
   }
   
//    console.log(jobInfo);

// find jobname eyta ase kina na thakle push korbo 

 const interviewApplied = rejectedList.find(item=> item.jobName === jobInfo.jobName)


 if(!interviewApplied){
    rejectedList.push(jobInfo);

 }
 console.log(rejectedList);

 interViewList = interViewList.filter(item=> item.jobName !== jobInfo.jobName )

 if(currentStatus == 'interview' ){
    renderInterview();
  
 }

 
 calculateCount() ;

}







})

// element create for interview and rejected section

function renderInterview(){

    filterSection.innerHTML ='';

    for( let interview of interViewList){

        let div = document.createElement('div');
        div.className =  'flex justify-between border rounded-md bg-primary-content p-8';

        div.innerHTML = `

         <div class="space-y-6 ">
              

                    <div>
                     <h2 id="job-name" class="text-[#002C5C] font-bold tex-xl">${interview.jobName}</h2>
                    <p id="skill"  class="text-[#64748B] font-semibold text-[16px]">${interview.jobSkill}</p>
                    <p id="remote-job" class="text-[#64748B]  tex-[5px] mt-4">${interview.jobRemote}</p>
                   </div>

                   <p id="status" class="text-[#002C5C]  bg-[#EEF4FF] w-fit p-3 rounded-md my-5">${interview.interviewStatus}</p>

                   <p id="job-discription" class="text-[#323B49]">
                    ${interview.jobDiscription}
                   </p>


                   <div class=" flex gap-4 mt-4">
                    <button id="interview-btn" class="btn btn-outline btn-success">Interview</button>
                    <button id="rejected-btn" class="btn btn-outline btn-error">Rejected</button>
                 </div>

                
            </div>

             <div>
            <button class="deleted" onclick="deletedCard(this)">
               <a href="#"> <i class="fa-regular fa-trash-can"></i></a>
            </button>
        </div>
        
        
        
        
        
        `

        filterSection.appendChild(div);


    }}



    function renderRejected(){

    filterSection.innerHTML ='';

    for( let rejected of rejectedList){

        let div = document.createElement('div');
        div.className =  'flex justify-between border rounded-md bg-primary-content p-8';

        div.innerHTML = `

         <div class="space-y-6 ">
              

                    <div>
                     <h2 id="job-name" class="text-[#002C5C] font-bold tex-xl">${rejected.jobName}</h2>
                    <p id="skill"  class="text-[#64748B] font-semibold text-[16px]">${rejected.jobSkill}</p>
                    <p id="remote-job" class="text-[#64748B]  tex-[5px] mt-4">${rejected.jobRemote}</p>
                   </div>

                   <p id="status" class="text-[#002C5C]  bg-[#EEF4FF] w-fit p-3 rounded-md my-5">${rejected.interviewStatus}</p>

                   <p id="job-discription" class="text-[#323B49]">
                    ${rejected.jobDiscription}
                   </p>


                   <div class=" flex gap-4 mt-4">
                    <button id="interview-btn" class="btn btn-outline btn-success">Interview</button>
                    <button id="rejected-btn" class="btn btn-outline btn-error">Rejected</button>
                 </div>

                
            </div>

             <div>
            <button  class="deleted" onclick="deletedCard(this)">
               <a href="#"> <i class="fa-regular fa-trash-can"></i></a>
            </button>
        </div>
        
        
        
        
        
        `

        filterSection.appendChild(div);


    }}


    // deleted 

    function deletedCard(button){
    if (button.classList.contains('deleted')){
        const jobCardd= button .parentElement.parentElement
        console.log(jobCardd)
         
       
if (jobCardd){
    const jobName = jobCardd.querySelector('#job-name').innerText;
    interViewList = interViewList.filter(item=> item.jobName !== jobName);
    rejectedList = rejectedList.filter(item=> item.jobName !== jobName);
}

jobCardd.remove();

calculateCount() ;

    }
    
 }
