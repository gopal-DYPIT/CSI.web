import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/about/About";
// Import the ArticleDetails component
import Blog from "./component/blog/Blog";
// import Contact from "./component/contact/Contact";
import Event from "./component/event/Event";
import Home from "./component/home/Home";
import Member from "./component/member/Member";
import SharedLayout from "./component/shared/layout";
import ArticleDetails from "./component/blog/ArticleDetails";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="event" element={<Event />} />
          <Route path="member" element={<Member />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<ArticleDetails />} /> {/* Add dynamic route for article details */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
