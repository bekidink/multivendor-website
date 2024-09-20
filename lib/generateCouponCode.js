const generateCouponCode=(title='',expiryDate)=>{
    const formattedTittle=title.toUpperCase().replace(/\s+/g,"")
    const formattedExpiryDate=expiryDate.split("-").reverse().join(" ")
    const couponCode=`${formattedTittle}-${formattedExpiryDate}`
  return couponCode
}
export default generateCouponCode