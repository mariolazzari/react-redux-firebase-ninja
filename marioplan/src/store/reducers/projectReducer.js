const initState = {
  projects: [
    { id: "1", title: "Project 1", content: "Content one" },
    { id: "2", title: "Project 2", content: "Content two" },
    { id: "3", title: "Project 3", content: "Content three" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      break;
  }
  return state;
};

export default projectReducer;
