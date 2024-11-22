import React, { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { Link } from "react-router-dom";
import './Fetch.css'; // Import custom CSS for Fetch component styles

const Fetch = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts');
            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-light">Posts</h2>
                <Link to={"/Axios"}>
                    <button className="btn btn-secondary">Go to Axios method</button>
                </Link>
            </div>
            <div className="row">
                {posts.map(post => (
                    <div key={post.id} className="col-md-6 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h5 className="card-title text-light">{post.title}</h5>
                                <p className="card-text text-muted">{post.body}</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="text-white d-flex align-items-center">
                                        {post.reactions.likes}<AiOutlineLike className="text-info ms-2" />
                                    </div>
                                    <div className="text-white d-flex align-items-center">
                                        {post.reactions.dislikes}<AiOutlineDislike className="text-danger ms-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fetch;
