function verifytok(usercookie){
    console.log(usercookie);
    var name = usercookie.name;
    if(usercookie.googleAuth==false) return true;
    var tokendata = JSON.parse(atob(usercookie.token.split(".")[1]));
    if (tokendata.name === name && (tokendata.iss === "accounts.google.com" || tokendata.iss === "https://accounts.google.com") && tokendata.aud === "1034972447130-hnne4ou2gis3k0s8gdhs0fr6hef87q5q.apps.googleusercontent.com") {
        return true
    }else{
        return false
    }
}
export default verifytok;