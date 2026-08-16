import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState();

  async function handleGetPost(id) {
    const singlePost = await getSinglePost(id);
    setPost(singlePost);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={() => handleGetPost(1)}>
        Get post
      </button>
      <div className="content">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </>
        )}
      </div>
    </div>
  );
}
