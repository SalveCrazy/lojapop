import { useState } from "react";
import { AuthContext } from "./AuthContext";


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);


function login(token) {
setUser(token);
}


return (
<AuthContext.Provider value={{ user, login }}>
{children}
</AuthContext.Provider>
);
}