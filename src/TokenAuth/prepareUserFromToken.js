const setTokenToHeaders=require("./setTokenHeaders");

const prepareUserFromToken=(token,refreshToken)=>{
    if(token){
        localStorage.setItem(token,token);
        localStorage.setItem("refreshToken",refreshToken);
        setTokenToHeaders(token)
        return token
    }else{
        console.error(
            "ERROR: redux: prepareUserFromToken did not receive a token",
            token
        );
        return null;
    }
}

module.exports=prepareUserFromToken