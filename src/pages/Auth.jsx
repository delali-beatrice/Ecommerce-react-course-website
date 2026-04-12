import { useState } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth () {
    const [mode, setMode] = useState("signup");
    const [error, setError] = useState(null);
    const {signUp, logIn} = useAuth();

    const navigate = useNavigate();

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm ();

    function onSubmit (data) {
        setError(null);

        let result;

        if( mode === "signup") {
            result = signUp(data.email, data.password)
        } else {
            result = logIn(data.email, data.password)
        }

        if(result.success) {
            navigate("/");
        } else {
            setError(result.error);
        }
       
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode === "signup" ? "Sign Up" : "Log In"}
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email"> Email
                                <input 
                                    className="form-input" 
                                    type="email" 
                                    id="email"
                                    {...register("email", {required: "Email is required"})}
                                />
                            </label>
                            {errors.email && (
                                <span className="form-error">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password"> Password
                                <input 
                                    className="form-input" 
                                    type="password" 
                                    id="password"
                                    {...register("password", { 
                                        required: "Password is required",
                                        minLength: {
                                            value:6,
                                            message: "Password must be at least 6 characters",
                                        }, 
                                        maxLength: {
                                            value:12,
                                            message:"Password must be at most 12 characters",
                                        }, 
                                    })}
                                />
                            </label>
                            {errors.password && (
                                <span className="form-error">{errors.password.message}</span>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup" ? "Sign Up" : "Log In"}
                        </button>
                    </form>

                    <div className="auth-switch">
                    {mode === "signup" ? (
                        <p>
                            Already have an account? 
                            <span className="auth-link" onClick={() => setMode("login")}>
                                  Log In
                            </span>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?  
                            <span className="auth-link" onClick={() => setMode("signup")}>
                                  Sign Up
                            </span>
                        </p>
                    )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;