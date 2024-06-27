



export const changenameaction=(name='sand')=>{
    const usernamechange={
        type:'USERNAME_CHANGE',
        payload:name
    }
    return usernamechange
}

export const changeprofileaction=(img='http')=>{
    const profileimgchange={
        type:'PROFILE_CHANGE',
        payload:img
    }
    return profileimgchange
}