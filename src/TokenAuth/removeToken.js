const setTokenToHeaders = require("./setTokenHeaders");

const removeToken=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user")
    setTokenToHeaders(false);
}
module.exports=removeToken;