import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ titleshandling }) => {
    const [blogs, Setblogs] = useState([]);
    useEffect(() => {
        fetch('../../../public/Blogs.json')
            .then(res => res.json())
            .then(data => Setblogs(data))
    }, [])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} titleshandling={titleshandling}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    titleshandling: PropTypes.func.isRequired
}

export default Blogs;