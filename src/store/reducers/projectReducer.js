const initState = {
  projects: [
    { id: 1, title: "help me find peach", content: "blah blah blah" },
    { id: 2, title: "collect all the stars", content: "blah blah blah" },
    { id: 3, title: "Raise the flag", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
