
export const auth= async(req,res,next)=>{

    console.log(req.cookies);
    if(!req.cookies)
    {
        //throw new Error("cookie not found");
        console.log("cookie not found");
    }
    next();
}