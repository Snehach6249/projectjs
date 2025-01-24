export const userFirtstService=async(args)=>
{
  console.log("reached service layer")
  console.log("doing work")
  const someDataFromDatabase="data fetched"
  return someDataFromDatabase
}
export const loginUserService=async(loginData)=>
{ 
  const email=loginData.email;
  const password=loginData.password
  console.log("checking some data")
if(email=="hari@gmail.com"&&password=="123")
{return {message:"loginsuccesly"}
}
else{
  return {message:"login failed"}
}


}