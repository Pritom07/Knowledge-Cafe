import PropTypes from 'prop-types';

const Bookmark = ({ titles }) => {
    return (
        <div className="w-1/3">
            <div>
                <h1>BookMarked Blogs : {titles.length}</h1>
                {
                    titles.map(blog => <p key={blog.id}> {blog.title} </p>)
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    titles: PropTypes.array.isRequired
}

export default Bookmark;