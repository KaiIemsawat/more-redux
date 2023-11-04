import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    // pass the information the we work with in 'dispatch()'. In this case 'login()'
                    dispatch(
                        // Thne, pass the payload into 'login()'
                        // The payload is the object containing the 'new values'
                        // In this case it should contain {name: "",age: 0,email: ""}
                        // in this case, it is hard coding
                        login({
                            name: "Zukkii",
                            age: 6,
                            email: "zukkii@email.com",
                        })
                    );
                }}
            >
                login
            </button>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}

export default Login;
