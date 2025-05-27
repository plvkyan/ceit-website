


// Imports
// Import createContext from React
import axios from "axios";
import { stringify } from "querystring";
import { 
    createContext,
    useEffect,
    useState
} from "react";
import { toast } from "sonner";



// 
// Define user type
export type User = {
    firstName: string;
    lastName: string;
    email: string;
    isVerified: boolean;
    role: string;
};

// Create context
export const AppContext = createContext({
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => {},
    user: null as User | null,
    setUser: (user: User | null) => {},
    getUserData: () => {}
});

export const AppContextProvider = (props : any) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState<User | null>(null);

    const getAuthState = async () => {
        try {
            axios.defaults.withCredentials = true; // Ensure cookies are sent with requests

            const { data } = await axios.get(backendUrl + "/api/auth/is-authenticated"); 

            if (data.success) {
                setIsLoggedIn(true);
                getUserData();
            }
        } catch (error: any) {
            toast.error("Error checking authentication state.", {
                description: error.message,
                duration: 10000,
                closeButton: true
            });
        }
    }

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/users/data");

            if (data.success) {
                setUser(data.user);
                setIsLoggedIn(true);
            } else {
                toast.error("Failed to fetch user data. Please log in again.");
            }
        } catch (error: any) {
            toast.error("Error fetching user data:", error.message);
            setUser(null);
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        getAuthState();
    }, [])

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        user, setUser,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

