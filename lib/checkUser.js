import {currentUser} from "@clerk/nextjs/server"


export const checkUser = async (req, res) => {
    const user = await currentUser();

    if(!user){
        return null;
    }
    try{
        const loggedInUser = await db.user.findUnique({
            where:{
                clerkUserId: user.id,
            }
        });
    }
    catch(error){

    }


};