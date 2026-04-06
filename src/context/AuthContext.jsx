import { createContext, useState } from "react";


export const AuthContext = createContext(null);

function AuthProvider ({children}) {
    const [user, setUser] = useState(
        localStorage.getItem("currentUserEmail")
        ? {email : localStorage.getItem("currentUserEmail")}
        : null
    );

    function signUp (email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find((u) => u.email === email)) {
            return { success: false, error : "Email already exists"};
        }

        const newUser = {email, password};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email);

        setUser({email});

        return{ success : true};
    }

    function logIn (email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if(!user) {
            return {success : false, error: "Invalid email or password"};
        }

        localStorage.setItem("currentUserEmail", email);
        setUser({ email });

        return { success: true};
    }

    function logOut () {
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signUp, user, logOut, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider