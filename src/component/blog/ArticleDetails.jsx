import React from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetails.css";
import IG from "../../assets/social/ig.svg"; // Import the CSS file
import LN from "../../assets/social/ln.svg";
import Contributor1 from "../../assets/Contributors/Contributor1.jpg";
// import Contributor2 from "../../assets/Contributors/Contributor2.jpg";
// import Contributor3 from "../../assets/Contributors/Contributor3.jpg";

const contributorImages = [Contributor1, Contributor1, Contributor1]; // Import the CSS file

const articles = [
  {
    "id": 1,
    "title": "Mastering React: A Complete Guide for Developers",
    "content": `
      <p>React is an open-source JavaScript library used for building modern, interactive user interfaces. Developed and maintained by Facebook, React has become one of the most popular libraries for front-end development. Whether you're building single-page applications (SPAs) or mobile apps, React’s modular architecture allows developers to create scalable, reusable components.</p>
  
      <img src="https://reactjs.org/logo-og.png" alt="React Logo" class="article-image" />
  
      <h2>Why Choose React?</h2>
      <p>React simplifies the process of building dynamic, high-performance UIs by using a declarative approach. Here’s why developers love React:</p>
      <ul>
        <li><strong>Efficient UI Rendering:</strong> React’s virtual DOM ensures efficient rendering by only updating parts of the page that change, boosting application performance.</li>
        <li><strong>Reusable Components:</strong> React promotes building isolated, reusable components that make your code cleaner and easier to maintain.</li>
        <li><strong>Strong Community Support:</strong> With a massive community, you’ll find numerous libraries, tools, and tutorials available for React development.</li>
        <li><strong>Flexibility:</strong> React can be easily integrated with other libraries or frameworks, allowing for greater flexibility in your tech stack.</li>
      </ul>
  
      <img src="../../src/assets/blog/3.jpg" alt="React Virtual DOM" class="article-image" />
  
      <h2>Setting Up a React Project</h2>
      <p>To get started with React, ensure you have Node.js installed. Here’s how to create a new React project using Create React App:</p>
      <div class="terminal"><pre><code>npx create-react-app my-react-app</code></pre></div>
      <p>Once your project is set up, navigate to the project directory and start the development server:</p>
      <div class="terminal"><pre><code>cd my-react-app<br />npm start</code></pre></div>
      <p>You now have a fully functional React development environment up and running!</p>
  
      <h2>Component Architecture</h2>
      <p>React's component-based structure encourages reusability. Each component is like a building block that handles a specific part of the UI. Here’s a simple example of a React component:</p>
      <div class="terminal">
      <pre><code>
        function Greeting() {
          return (
            Hello, welcome to React!
          );
        }
        export default Greeting;
      </code></pre>
      </div>
      <p>The <code>Greeting</code> component is a simple function that returns an HTML heading element. This component can now be reused across the app!</p>
  
      <img src="../../src/assets/blog/2.webp" style={{width : '5px'}} alt="React Components" class="article-image" />
  
      <h2>State Management in React</h2>
      <p>State management is crucial for handling dynamic data in your React applications. React provides a powerful hook called <code>useState</code> that allows components to maintain state:</p>

      <div class="terminal">
        <pre><code>
      import { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
            You clicked {count} times
        );
      }

      export default Counter;
        </code></pre>
      </div>

      <style>
        .terminal {
          background-color: lightblue; /* Dark background */
          color: white; /* White text */
          padding-left: 20px; /* Padding around the code */
          border-radius: 5px; /* Rounded corners */
          font-family: 'Courier New', Courier, monospace; /* Monospace font */
          overflow-x: auto; /* Allow horizontal scrolling if necessary */
        }
      </style>

      <p>In this example, the <code>Counter</code> component updates its state every time the button is clicked.</p>
  
      <h2>Common Use Cases for React</h2>
      <p>React is versatile and can be used for building various types of applications:</p>
      <ul>
        <li><strong>Single Page Applications (SPAs):</strong> React is ideal for building fast, dynamic SPAs.</li>
        <li><strong>Progressive Web Apps (PWAs):</strong> Combine the power of React with service workers to create offline-capable web apps.</li>
        <li><strong>Mobile Apps:</strong> React Native allows developers to build mobile apps with React components.</li>
        <li><strong>Dashboards and Data Visualization Tools:</strong> React can be integrated with libraries like D3.js to build interactive dashboards.</li>
      </ul>
  
      <img src="../../src/assets/blog/useCaseReact.webp" alt="React Native Mobile Apps" class="article-image" />
  
      <h2>Advanced Concepts: Hooks and Context API</h2>
      <p>React introduced hooks to manage state and side effects in functional components. Additionally, the Context API allows for efficient state management across multiple components:</p>
      <ul>
        <li><strong>useEffect:</strong> This hook handles side effects like data fetching and DOM manipulation.</li>
        <li><strong>useContext:</strong> Used to share data globally between components without passing props.</li>
      </ul>
      <p>For example, <code>useEffect</code> allows you to fetch data from an API when a component is mounted:</p>



    <div class="terminal">
      <pre><code>
        useEffect(() => {
          fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
        }, []);
      </code></pre>
    </div>
  
      <h2>Conclusion</h2>
      <p>React has revolutionized front-end development with its component-based approach, virtual DOM, and extensive ecosystem. Whether you're building a single-page app, a mobile app, or a dashboard, React offers the tools and flexibility to create scalable, high-performance applications. Learning React will significantly boost your development skills and open up new opportunities in web development.</p> 
    `,
    "contributors": [
      {
        "name": "Gopal Kadam",
        "instagram": "https://www.instagram.com/gopal.kadam_/",
        "linkedIn": "https://linkedin.com/in/gopalkadam212"
      },
    ]
  },  
  {
    id: 2,
    title: "Advanced CSS Tricks",
    content: "This is the full content of the 'Advanced CSS Tricks' article...",
    contributors: [
      {
        name: "Dave Wilson",
        instagram: "https://instagram.com/davewilson",
        linkedIn: "https://linkedin.com/in/davewilson",
      },
      {
        name: "Emma Davis",
        instagram: "https://instagram.com/emmadavis",
        linkedIn: "https://linkedin.com/in/emmadavis",
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Tips",
    content: "This is the full content of the 'JavaScript Tips' article...",
    contributors: [
      {
        name: "Frank Miller",
        instagram: "https://instagram.com/frankmiller",
        linkedIn: "https://linkedin.com/in/frankmiller",
      },
      {
        name: "Grace Lee",
        instagram: "https://instagram.com/gracelee",
        linkedIn: "https://linkedin.com/in/gracelee",
      },
    ],
  },
];

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p className="article-not-found">Article not found</p>;
  }

  return (
    <div className="article-details">
      <div className="article-container">
        <h1 className="article-title">{article.title}</h1>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }} // Render HTML content
        />
      </div>

      <div className="contributors-section">
        <h2>Contributors</h2>
        <div className="contributors-list">
          {article.contributors.map((contributor, index) => (
            <div className="contributor-card" key={index}>
              <div className="contributor-avatar">
                {/* Placeholder for contributor's avatar */}
                <img src={contributorImages[index]} alt={contributor.name} />
              </div>
              <div className="contributor-name">{contributor.name}</div>
              <div className="contributor-links">
                <a
                  href={contributor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={IG}
                    alt="Instagram"
                    className="social-icon"
                    style={{ width: "30px" }}
                  />
                </a>
                <a
                  href={contributor.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LN}
                    alt="LinkedIn"
                    className="social-icon"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
