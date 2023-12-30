import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "../features/posts/postSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };
    const onContentChange = (e) => {
        setContent(e.target.value);
    };

    const onSavePostClick = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            );
            setTitle("");
            setContent("");
        }
    };

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                ></textarea>
                <button type="button" onClick={onSavePostClick}>
                    Save Post
                </button>
            </form>
        </section>
    );
};
export default AddPostForm;
