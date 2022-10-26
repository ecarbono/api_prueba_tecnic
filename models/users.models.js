const { initDB } = require("../DB/connectDB");



const getUsermodel = async () => {
    let resultado;    
    const client = await initDB(); 
            
    
    try {
        resultado = await client.query('SELECT * FROM public.usuarios');
        
        
    } catch (error) {
        resultado = {
            error: 1,
            msj: error
        };
        
    }
    await client.end();
    return resultado;
}
const setUsers = async (request) => {
    let resultado;
    const body = [ request.nombre, request.apellido, request.fecha_nacimiento, request.direccion_1, request.direccion_2, request.direccion_3,request.user_id ];
    const client = await initDB();
    try {
        resultado = await client.query('INSERT INTO public.usuarios (nombre, apellido, fecha_nacimiento, direccion_1, direccion_2, direccion_3,user_id) VALUES ($1, $2, $3, $4, $5 ,$6, $7)', body);
        resultado = {
            error: 0,
            msj: "Insertado"
        };
        
    } catch (error) {
        resultado = {
            error: 1,
            msj: "Error"
        };
        
    }
    await client.end();
    return resultado;
}

module.exports = {
    getUsermodel,
    setUsers
}