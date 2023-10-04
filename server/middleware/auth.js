
export const auth= async(req,res,next)=>{

    console.log(req.Cookies);
    if(!req.Cookies)
    {
        //throw new Error("cookie not found");
        console.log("cookie not found");
    }
    next();
}