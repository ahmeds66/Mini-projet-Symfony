import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const Posts = () => {

    const [posts, setPosts] = React.useState([]);

    const fetchPosts = async () => {
        const response = await axios.get("https://127.0.0.1:8000/api/posts?page=1");
        setPosts(response.data["hydra:member"]);
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            {posts.map((post) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.text}
                        </Card.Text>
                        <Button variant="primary">Comment</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Posts;
