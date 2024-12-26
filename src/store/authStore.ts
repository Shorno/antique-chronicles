import {create} from 'zustand'
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
    User,
    UserCredential
} from "firebase/auth"
import {auth} from "../firebase.js"

type AuthState = {
    currentUser: User | null;
    authLoading: boolean;
    signUp: (email: string, password: string, displayName: string, photoURL?: string) => Promise<UserCredential>;
    signInWithGoogle: () => Promise<User>;
    logout: () => Promise<void>;
    login: (email: string, password: string) => Promise<UserCredential>;
}

type AuthStore = AuthState & {
    setAuthLoading: (loading: boolean) => void;
    setCurrentUser: (user: User | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
    currentUser: null,
    authLoading: true,

    setAuthLoading: (loading: boolean) => set({authLoading: loading}),
    setCurrentUser: (user: User | null) => set({currentUser: user}),

    signUp: async (email: string, password: string, displayName?: string, photoURL?: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            const user = userCredential.user;
            await updateProfile(user, {displayName, photoURL});
            return userCredential;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    signInWithGoogle: async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            useAuthStore.getState().setCurrentUser(result.user);
            return result.user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
            useAuthStore.getState().setCurrentUser(null);
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            useAuthStore.getState().setCurrentUser(userCredential.user);
            return userCredential;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}))


useAuthStore.getState().setAuthLoading(false);


export default useAuthStore;