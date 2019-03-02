// src/js/actions/index.js

import { HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS } from "../constants/action-types";
import axios from "axios";

export function logoutUser() {
    console.log("in logoutUser");
    return (dispatcher) => {
        axios.delete(`/api/sign-out`).then(() => {
            dispatcher(handleLogout());
        });
    };
};

export const handleLogout = () => {
    return {
        type: LOGOUT_USER
    };
};

// LOGIN ACTION 
export function loginUser(loginState) {
    return (dispatcher) => {
        axios.post(`/api/sign-in`, loginState).then((res) => {         
            dispatcher(handleLogin(res.data)); // THUNKED IT!
        }).catch(console.err);
    };
};

export const handleLogin = (user) => {
    return {
        type: HANDLE_LOGIN,
        payload: user
    };
};

// SIGNUP USER ACTION 
export function signupUser(signupState) {
    return (dispatcher) => {
        axios.post(`/api/sign-up`, signupState).then(res => {
            dispatcher(handleSignup(res.data.user));
        }).catch(console.err);
    };
};

export const handleSignup = (user) => {
    return {
        type: SIGNUP_USER, 
        payload: user
    };
};

// UPDATE SETTINGS ACTION 
export function updateSettings(userFormState, token) {
    return (dispatcher) => {
        axios.put(`/settings`, {userFormState, token}).then((res) => {
            dispatcher(handleSettings(res.data.user));
        }).catch(console.err);
    };
};

export const handleSettings = (user) => {
    return {
        type: HANDLE_SETTINGS,
        payload: user
    };
};
