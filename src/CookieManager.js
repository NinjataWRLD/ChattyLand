export const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.split('=')[0] === name);
    const value = cookie && cookie.split('=')[1];
    return value;
};

export const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
};