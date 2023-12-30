import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../features/posts/postSlice";
import { selectAllUsers } from "../features/users/userSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };
    const onContentChange = (e) => {
        setContent(e.target.value);
    };
    const onAuthorChange = (e) => {
        setUserId(e.target.value);
    };

    const onSavePostClick = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle("");
            setContent("");
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

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

                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="poetAuthor"
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                ></textarea>
                <button
                    type="button"
                    onClick={onSavePostClick}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};
export default AddPostForm;
