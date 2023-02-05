import axios from "axios";

const Tabs = (topics) => {
  const topicWrapper = document.createElement("div");
  topicWrapper.classList.add("topics");
  for (let topic of topics) topicWrapper.appendChild(Tab(topic));
  return topicWrapper;
};

const Tab = (topic) => {
  const tabElement = document.createElement("div");
  tabElement.classList.add("tab");
  tabElement.textContent = topic;
  return tabElement;
};

const getTopics = () => {
  return axios
    .get(`http://localhost:5001/api/topics`)
    .then((res) => res.data.topics);
};

const tabsAppender = (selector) => {
  getTopics().then((topics) =>
    document.querySelector(selector).appendChild(Tabs(topics))
  );

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };
