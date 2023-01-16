import { isEmail, isPhone } from "./validate"


export const hidePhoneOrEmail = (data) => {

    if(isEmail(data)){
        
        let com = data.split("@")[1];
        let mailName = data.split("@")[0];

        const firstAlphabet = mailName.substr(0, 1);
        const lastAlphabet = mailName.substr(-1);

        return `${firstAlphabet}*****************${lastAlphabet}@${com}`;

    }

    if(isPhone(data)){

        const firstNumb = data.substr(0, 3);
        const lastNumb = data.substr(-2);

        return `${firstNumb}***********${lastNumb}`;

    }

}

