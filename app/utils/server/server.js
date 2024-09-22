const getProjects = async () => {
  try {
    const response = await fetch(
      "http://localhost:1337/api/projects?populate=*"
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const getProject = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:1337/api/projects/${id}?populate=*`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

export { getProjects, getProject };
