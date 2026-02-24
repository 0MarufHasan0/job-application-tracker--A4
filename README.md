1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

==> Ans : The difference between  getElementByID , getElementsByClassName, and querySelector / querySelectorAll is

==> getElementByID : we can select unique id from HTML file .
==>  getElementsByClassName :  we can select class name from HTML file .
===>  querySelector / querySelectorAll : we can select class name css symbol (. or #).
And querySelectorAll : We can select multiple class like css style . querySelectorAll can select multiple Element .

2. How do you create and insert a new element into the DOM?
==> Ans : I can create a new element using document.createElement() in java script .Then i can add some text or styles to it. Then I can add that element to the DOM using appendChild().

3. What is Event Bubbling? And how does it work?
==>> Ans : Event Bubbling is when start new events and target element, it bubbles up and runs the parent elements in the dom tree . 

4. What is Event Delegation in JavaScript? Why is it useful?
==> Ans : Event Delegation is the process of assigning a single event listener to a parent element. The advantage of this is that it allows you to handle events on the direct parent without having to select separate children element .

5. What is the difference between preventDefault() and stopPropagation() methods?
==> Ans : The difference between preventDefault() and stopPropagation() methods is
preventDefault() stopping any default action of the browser and  stopPropagation() Stop event bubbling.
