const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
    headers: {
        authorization: '475fb50a-548f-4190-a712-b420a1ac6f4a',
        'Content-Type': 'application/json'
    }
}

function api(method, url, body) {
    return fetch(`${config.baseUrl}${url}`, {
        method,
        headers: config.headers,
        body: body ? JSON.stringify(body) : undefined
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}
export function getInitialCards() {
    return api('GET', '/cards');
}
export function getProfileInfo() {
    return api('GET', '/users/me')
}
export function editProfileInfo(name, about) {
    return api('PATCH', '/users/me', { name, about })
}
export function addCard(name, link) {
    return api('POST', '/cards', { name, link })
}
export function delCard(id) {
    return api('DELETE', `/cards/${id}`)
}
export function putLike(id) {
    return api('PUT', `/cards/likes/${id}`);
}
export function delLike(id) {
    return api('DELETE', `/cards/likes/${id}`);
}
export function updateAvatar(avatar) {
    return api('PATCH', '/users/me/avatar', { avatar });
}
