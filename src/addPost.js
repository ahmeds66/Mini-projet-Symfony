import axios from "axios";
import React from "react";
//this is the part where user can add a post
//the user can add a post by writing a text and clicking on the post button
import { Form , Button, Card } from "react-bootstrap";

//this fonction is for the user to add a post using api



const AddPost = () => {
    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [user, setUser] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8000/api/posts", { text, title });
        //the user is the logged in user saved in the local storage
        const loggeduser = JSON.parse(localStorage.getItem("user"))
        setUser([...user, response.data])
        setText("")
        setTitle("")
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Post</Form.Label>
                            <Form.Control as="textarea" rows={3} value={text} onChange={(e) => setText(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="textarea" rows={3} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};




export default AddPost;