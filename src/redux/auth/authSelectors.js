const isAuthorized = state => state.auth.token;
const getUserName = state => state.auth.user.name;
export default { isAuthorized,getUserName};