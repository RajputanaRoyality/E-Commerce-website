import userModel from "../models/userModel.js"


//add products to user cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const userId = req.user.id;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: 'Add To Cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//update user Cart

const updateCart=async(req,res)=>{
    try{
        const {userId,itemId,size,quantity}=req.body

        const userData=await userModel.findById(userId)
        let cartData=await userData.cartData;

        cartData[itemId][size]=quantity

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//get user cart data

const getUserCart=async(req,res)=>{
    try {
        const userId = req.user.id;
        const userData = await userModel.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const cartData = userData.cartData || [];

        res.json({ success: true, cartData });
    } catch (error) {
        console.error("Get Cart Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export {addToCart,updateCart,getUserCart}