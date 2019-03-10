// src/js/actions/index.js

import axios from 'axios';
import {
    HANDLE_LOGIN, SIGNUP_USER, LOGOUT_USER
} from '../constants/action-types';


export function logoutUser() {
    console.log('in logout User');
    return (dispatcher) => {
        axios.delete('/api/sign-out').then(() => {
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
        axios.post('/api/sign-in', loginState).then((res) => {
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
    return (dispatch) => {
        axios.post('/api/sign-up', signupState)
            .then((res) => {
                dispatch(handleSignup(res.data));
            })
            .catch(console.err);
    };
}

export const handleSignup = user => (
    {
        type: SIGNUP_USER,
        payload: user,
    }
);
