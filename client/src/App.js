import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
function App() {
  return(
    <>
    <Header/>
    <Toaster/>
    <Routes>
    <Route path="/" element={<Blogs />} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/my-blogs" element={<UserBlogs/>} />
    <Route path="/blog-details/:id" element={<BlogDetails />} />
    <Route path="/create-blog" element={<CreateBlog />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
  </>
    
  );
}
export default App;