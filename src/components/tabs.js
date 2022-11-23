import axios from "axios";

const Tabs = (topics) => {
const topicsDivOne = document.createElement('div');
const topicsDivTwo = document.createElement('div');
const topicsDivThree = document.createElement('div');
const topicsDivFour = document.createElement('div');
const topicsDivFive = document.createElement('div')
const topicsDivSix = document.createElement('div')

topicsDivOne.classList.add('topics');
topicsDivTwo.classList.add('tab');
topicsDivThree.classList.add('tab');
topicsDivFour.classList.add('tab');
topicsDivFive.classList.add('tab');
topicsDivSix.classList.add('tab')


topicsDivTwo.textContent = topics[0];
topicsDivThree.textContent = topics[1] ;
topicsDivFour.textContent = topics[2];
topicsDivFive.textContent = topics[3];
topicsDivSix.textContent = topics[4];

topicsDivOne.appendChild(topicsDivTwo);
topicsDivOne.appendChild(topicsDivThree);
topicsDivOne.appendChild(topicsDivFour);
topicsDivOne.appendChild(topicsDivFive);
topicsDivOne.appendChild(topicsDivSix);


return topicsDivOne;




  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}
console.log(Tabs(['javascript','bootstrap','technology']))

  
  
const tabsAppender = (selector) => {
  axios.get(`http://localhost:5001/api/topics`)
  .then(resp => {
   // console.log(resp.data.topics)
   document.querySelector(selector).appendChild(Tabs(resp.data.topics))
  })
  .catch(err => console.log(err))
  

  
  
    


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
