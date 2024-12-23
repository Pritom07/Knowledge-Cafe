import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, titleshandling }) => {
    const { cover, author, author_img, posted_date, reading_time, title, hash_tags } = blog;
    return (
        <div className='border-slate-300 border-b-2 mt-10 mb-5'>
            <img className='w-full rounded-xl' src={cover} />
            <div className='flex justify-between items-center'>
                <div className="flex items-center mt-6">
                    <img className='w-14' src={author_img} />
                    <div className='ml-2'>
                        <p className='font-bold text-xl'>{author}</p>
                        <p className='font-semibold text-slate-500 text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-slate-500 font-normal'>{reading_time} min read </p>
                    <button onClick={() => titleshandling(blog)} className='ml-2 text-2xl text-blue-900'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mt-4'>{title}</h1>
            <p className='mt-4 font-semibold text-slate-500 text-sm'>
                {
                    hash_tags.map((hash, id) => <span key={id} className='ml-2'>{hash}</span>)
                }
            </p>
            <p className='mt-4 text-violet-700 underline font-semibold mb-7 cursor-pointer'>Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    titleshandling: PropTypes.func.isRequired
}
export default Blog;