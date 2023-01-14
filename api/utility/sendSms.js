import axios from "axios";

export const sendSms = async (phone, sms) => {

    try{

        await axios.get(``)

    }catch(err){
        console.log(err);
    }

}

