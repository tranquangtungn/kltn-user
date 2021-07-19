export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user && user.items.accessToken) {
        return { 'x-access-token': user.items.accessToken.toString() };
    } else {
        return {};
    }
}