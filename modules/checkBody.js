

function checkBody(email, password){
    if( (email && email === "") || (password && password === ""))
    {
        return false; 
    }else {
        return true; 
    }
}


module.exports = { checkBody}