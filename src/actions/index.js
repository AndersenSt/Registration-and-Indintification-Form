export const REGISTRATE_USER = 'REGISTRATE_USER';
export const GET_ACTIV_USER = 'GET_ACTIV_USER';
export const GO_OUT = 'GO_OUT';
export const INDENTIFICATE_USER = 'INDENTIFICATE_USER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const registrateUser = user => ({
    type: REGISTRATE_USER,
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password
});

export const indentificateUser = (email, password) => ({
    type: INDENTIFICATE_USER,
    email,
    password
});

export const goOut = () => ({
    type: GO_OUT
});

export const hideError = () => ({
    type: HIDE_ERROR
});

