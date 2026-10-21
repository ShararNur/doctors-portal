import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogPost.css';
const BlogPost = ({ blog }) => {
  return (
    <div className="col">
      <div
        className={`card p-4 h-100 border-light shadow-sm ${blog.theme === 'primary' && 'linearGradientCard text-white'}`}
      >
        <div className="d-flex gap-3 align-items-center">
          {blog?.img && <img src={blog.img} class="img-fluid" alt="..." width={70} />}
          <div>
            <h6>{blog.name}</h6>
            <span
              className={`${blog.theme !== 'primary' && 'text-secondary'}`}
              style={{ fontSize: 14 }}
            >
              {blog.date}
            </span>
          </div>
        </div>
        <div>
          <h5 class="card-title my-4">{blog.quote}</h5>
          <p class="card-text text-secondary">{blog.description}</p>
          {blog.theme === 'primary' && (
            <div className="mt-5">
              <FontAwesomeIcon icon={faArrowRightLong} size="2x" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
