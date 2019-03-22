import axios from 'axios';
import { SIGNUP_USER } from '../constants/action-types';


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
