import moment from 'moment';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Comments({ title }) {
  const [name, setName] = useState('');
  const [comments, setComments] = useState([]);
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [commentLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    setComments(title.comments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == '') {
      toast.error('Please enter your name');
      return;
    } else if (email == '') {
      toast.error('Please enter your email');
      return;
    } else if (comment == '') {
      toast.error('Please enter your comment');
      return;
    } else {
      setCommentLoading(true);
      fetch(global.api + 'add_comment_blog', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          comment: comment,
          blog_id: title.id,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (!json.status) {
            toast.error("Comment can't be added");
          } else {
            toast.success(json.msg);
            setComments(json.data);
            setComment('');
            setName('');
            setEmail('');
          }
          return json;
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setCommentLoading(false);
        });
    }
  };
  return (
    <>
      {comments.length > 0 && (
        <>
          <div className="section-header">
            <h3 className="section-title">
              Comment{comments.length > 1 ? 's' : ''} ({comments.length})
            </h3>
            <img src="/images/wave.svg" className="wave" alt="wave" />
          </div>
          <div className="comments bordered padding-30 rounded">
            <ul className="comments new-comments">
              {comments.map((values, index) => {
                return (
                  <li className="comment rounded" key={index}>
                    <div className="details m-0">
                      <h4 className="name">{values.user_name}</h4>
                      <span className="date">
                        {moment(values.created_at).format('LLLL')}
                      </span>
                      <p>{values.user_comment}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
      <div className="section-header">
        <h3 className="section-title">Leave A Comment</h3>
        <small>
          (Your Email will not be published. Required fields are marked.)
        </small>
        <br />
        <img src="/images/wave.svg" className="wave" alt="wave" />
      </div>
      <div className="comment-form rounded bordered padding-30">
        <form
          id="comment-form"
          className="comment-form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="messages" />
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  name="InputName"
                  placeholder="Your name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="InputEmail"
                  placeholder="Email address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="InputComment"
                  id="InputComment"
                  className="form-control"
                  rows={3}
                  placeholder="Your comment here...*"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </div>
          </div>
          {commentLoading ? (
            <button
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              className="btn btn-default"
              disabled
            >
              Submitting...
            </button>
          ) : (
            <button
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              className="btn btn-default"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default Comments;
