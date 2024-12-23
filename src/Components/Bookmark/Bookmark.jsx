import PropTypes from 'prop-types';

const Bookmark = ({ titles }) => {
    return (
        <div className="w-1/3">
            <div className='mt-10 bg-slate-300 rounded-xl ml-6 p-5'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : {titles.length}</h1>
                {
                    titles.map(blog => <p key={blog.id} className='text-xl font-medium bg-slate-100 rounded-lg mt-2 p-3'> {blog.title} </p>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    titles: PropTypes.array.isRequired
}

export default Bookmark;