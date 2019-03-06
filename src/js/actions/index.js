// src/js/actions/index.js

import axios from 'axios';
import {
    HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER, HANDLE_SETTINGS
} from '../constants/action-types';


export function logoutUser() {
    console.log('in logoutUser');
    return (dispatcher) => {
                      https://cors.io/?https://scholarboard-api.herokuapp.com
        axios.delete('https://scholarboard-api.herokuapp.com/api/sign-out').then(() => {
            dispatcher(handleLogout());
        });
    };
}

export const handleLogout = () => ({
    type: LOGOUT_USER,
});

// LOGIN ACTION
export function loginUser(loginState) {
    return (dispatcher) => {
        axios.post('https://scholarboard-api.herokuapp.com/api/sign-in', loginState).then((res) => {
            dispatcher(handleLogin(res.data)); // THUNKED IT!
        }).catch(console.err);
    };
}

export const handleLogin = user => ({
    type: HANDLE_LOGIN,
    payload: user,
});

// SIGNUP USER ACTION
export function signupUser(signupState) {
    return (dispatcher) => {
        axios.post('https://scholarboard-api.herokuapp.com/api/sign-up', signupState).then((res) => {
            dispatcher(handleSignup(res.data.user));
        }).catch(console.err);
    };
}

export const handleSignup = user => (
    {
        type: SIGNUP_USER,
        payload: user,
    }
);
