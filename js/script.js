console.log('Hello World!');

let interViewList = [];
let rejectedList = [];

// count section dhora
const totalCount= getElementId('total-count') ;
const interviewCount= getElementId('interview-count') ;
const rejectedCount= getElementId('rejected-count') ;

// button dhora 

const allBtn = getElementId('all');
const interviewBtn = getElementId('interview')
const rejectedBtn = getElementId('rejected')


// card section dhora
const allCards = getElementId('job-section')

// caculate 
function calculateCount(){
    totalCount.innerText = allCards.children.length ;
    interviewCount.innerText = interViewList.length ;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount()

// button toggle 

function toggleBtn (id){


}