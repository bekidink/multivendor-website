const generateUserCode=(prefix,name)=>{
  //   const formattedTittle=title.toUpperCase().replace(/\s+/g,"")
  //   const formattedName=name.toUpperCase().replace(/\s+/g,"")
  //   const userCode=`${formattedTittle}-${formattedName}`
  // return userCode
 const initials=name.split(" ").map((name)=>name[0]).join("").toUpperCase();
 const now= new Date()
 const timestampCode=`${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,"0")}${now.getDate().toString().padStart(2,"0")}${now.getHours().toString().padStart(2,"0")}`;
 const userCode=`${prefix}-${initials}-${timestampCode

 }`
 return userCode
}
export default generateUserCode