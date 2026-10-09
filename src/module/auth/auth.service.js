
import { UserModel } from "../../database/model/user.model.js";
import bcrypt from "bcrypt";
import { generateHash } from "../../services/encreption.js";

export const signup = async (body) => {
  let { userName, email, password, age, gender, confirmPass } = body;
  if(password !== confirmPass){
    return { error: "Password and confirm password do not match" };
  }
  let existedUser = await UserModel.findOne({ email });
    if (existedUser) {
        return{ error: "User already exists" };
    }   else {

        let hashedPassword = await generateHash({plainText: password});
        if(hashedPassword) {
            
            let user = await UserModel.create({
                name: userName,
                email,
                password: hashedPassword,
                age,
                gender,
    
            }); return user;
        }


        let user = await UserModel.create({
            name: userName,
            email,
            password,
            age,
            gender
        }); return user;
    }
    
};

export const signin = async (body) => {

    let { email, password } = body;
    let userData = await UserModel.findOne({ email });
    if (!userData) {
        return { error: "User not found" };
    }
    let ismatched = await bcrypt.compareHash(password, userData.password);
    if(ismatched) {
        return userData;
    } else {
        return { error: "Invalid email or password" };
    }

};


