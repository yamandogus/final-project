const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const REFRESH_TOKEN_STORAGE_KEY = "refreshToken";
const USER_STORAGE_KEY = "user";

export interface UserProps {
  email: string,
  password: string,
  api_key?: string,
  }
  

function setAccessToken(accessToken: string){
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
}

function setRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, refreshToken)
}
function setAuthUser(user:UserProps){
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

export function setTokenAndAuthUser(accessToken: string, refreshToken: string, user: UserProps) {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAuthUser(user);
  }
  
  export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  }
  
  export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
  }
  
  export function getAuthUser() {
    const userString = localStorage.getItem(USER_STORAGE_KEY);
    return userString ? JSON.parse(userString) : null;
  }
  
  function removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
  }
  
  function removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
  }
  
  function removeAuthUser() {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
  
  export function removeTokenAndAuthUser() {
    removeAccessToken();
    removeRefreshToken();
    removeAuthUser();
  }

