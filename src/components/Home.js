import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {

  useEffect(() => {
    fetchData()
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await rawData.json();
    const posts = data.slice(0, 10);

    setPosts(posts);
  }
  
  return (
    <div className="App">
      <div>
        <h1>Home</h1>
        {posts.map(post => (

          <Link to={`/${post.id}`}>
            <h4 key={post.id}>{post.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
