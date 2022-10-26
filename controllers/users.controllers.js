const {response} = require("express");
const { getUsermodel, setUsers } = require("../models/users.models");


const getUser = async (request,response) => {
  let result;
  try {
    result = await getUsermodel();
    result = result.rows;
  } catch (error) {
    result = error;
  }
  response.json(result);
}

const createUser = async (request, response) => {
  
  let result;
  try {
    result = await setUsers(request.body);
    
  } catch (error) {
    result = error; 
  }
  response.json({
    "data": result
  });
}


module.exports = {
  getUser,
  
  createUser,
}