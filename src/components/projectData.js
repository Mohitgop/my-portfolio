import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "EVENTO",
    image: projectOne,
    description: (
      <>
        <p>
        A Full-stack web application utilizing ReactJS, NodeJS, Tailwind CSS and MongoDB. It provides distinct interfaces for administrators and students, streamlining event management. It is a team project in which I worked on the UI part i.e. ReactJS part.
        </p>
      </>
    ),
    github: "https://github.com/Mohitgop/college-event-management-frontend",
    demo: "https://evento-cme.vercel.app/",
  },
  2: {
    title: "TEXTUTLIS",
    image: projectTwo,
    description: (
      <>
        <p>
        TextUtils was created with ReactJS, i.e. word counter and a character counting utility which can be used to manipulate your text. You can remove extra spaces, as well as convert text from Uppercase to Lowercase and Lowercase to Uppercase.
        </p>
      </>
    ),
    github: "https://github.com/Mohitgop/textutils",
    demo: "https://textutils-8ur61jnzp-mohit-gops-projects.vercel.app/",
  },
  3: {
    title: "Playable Piano",
    image: projectThree,
    description: (
      <>
        <p>
        An application coded in JavaScript allows you to play Piano online for fun. <br />
        Technologies - HTML, CSS, JavaScript.
        </p>
      </>
    ),
    github: "https://github.com/Mohitgop/Playable-Piano",
    demo: "https://piano-ede1b.web.app/",
  },
};

export default projects;
