import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

//Hook personalizado
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

//provedor para que todos los componetes tengan acceso al usuario y saber si esta logeado o no
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);
  //funcion para registrar un usuario
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //login de usuario
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  //cerrar sesion
  const logout = () => signOut(auth);

  //Login con google
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  //se ejecuta cuando se carga el componente
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout, Loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
