import PropTypes from 'prop-types';

const Bookmark = ({ titles, times }) => {
    return (
        <div className="w-1/3 mt-8 ml-7">
            <div className='font-bold text-2xl text-violet-600 bg-violet-100 border-violet-700 border-2 rounded-xl p-5 mb-4'>Spent time on read : {times}</div>
            <div className='bg-slate-300 rounded-xl p-5'>
                <h1 className='text-2xl font-bold'>Bookmarked Blogs : {titles.length}</h1>
                {
                    titles.map((blog, id) => <p key={id} className='text-xl font-medium bg-slate-100 rounded-lg mt-3 p-4'> {blog.title} </p>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    titles: PropTypes.array.isRequired,
    times: PropTypes.number.isRequired
}

export default Bookmark;