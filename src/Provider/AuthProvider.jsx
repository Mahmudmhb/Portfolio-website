/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app } from "../firebase.init";
import { AxiosInstance } from "./useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sign up handler
  const handleSignUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login handler
  const handleLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile handler
  const handleUpdateUser = (name, photoUrl) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // Log out handler
  const handleLogOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // Listen to authentication state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false); // Stop loading once the user is fetched
    });
    return () => unSubscribe();
  }, []);

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading before fetching
      try {
        const res = await AxiosInstance.get("/blogs");
        const BlogData = res?.data.data;
        setBlogs(BlogData); // Set blog data
        setIsLoading(false); // Stop loading after fetching data
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false); // Stop loading even if there is an error
      }
    };
    fetchData(); // Call the blog fetching function on mount
  }, []);

  const authInfo = {
    handleSignUp,
    handleLogin,
    handleUpdateUser,
    handleLogOut,
    user,
    isLoading,
    blogs,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
