export function GenerarToken (){
    let token =""
    for (let index = 1; index <=10; index++) {
        token += Math.random().toString(36).substring(2)
    }
    return token
}