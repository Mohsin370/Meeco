

export const TenantsActions = (dispatch:any) =>{
    return{
        createTenant: (data:any)=> dispatch({ type: 'create', data })
    }
}