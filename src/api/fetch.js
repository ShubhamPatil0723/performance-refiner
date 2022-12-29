const baseURL = "http://localhost:8080/auth";

export const postData = (url, action, headers, data) => {
    return fetch(`${baseURL}${url}`, {
        method: action,
        headers,
        body: JSON.stringify(data),
    });
};

export const postFile = (url, action, headers, data) => {
    return fetch(`${baseURL}${url}`, {
        method: action,
        headers,
        body: data,
    });
};

export const getData = (url, action, headers) => {
    return fetch(`${baseURL}${url}`, {
        method: action,
        headers,
    });
};
