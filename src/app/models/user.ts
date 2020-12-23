import * as check from 'check-types';
import {IUserDTO} from './user.interface';

export class User {

    userName: string;
    userSurname: string;
    userEmail: string;
    userTelephoneNumber: number;
    bustCircumference: number;
    waistCircumference: number;
    hipCircumference: number;
    growth: number;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {IUserDTO}
     */
    fromJson(data: IUserDTO): User {

        if (check.assigned(data.user_name)) {
            this.userName = data.user_name;
        }

        if (check.assigned(data.user_surname)) {
            this.userSurname = data.user_surname;
        }

        if (check.assigned(data.user_email)) {
            this.userEmail = data.user_email;
        }

        if (check.assigned(data.user_telephone_number)) {
            this.userTelephoneNumber = data.user_telephone_number;
        }

        if (check.assigned(data.bust_circumference)) {
            this.bustCircumference = data.bust_circumference;
        }

        if (check.assigned(data.waist_circumference)) {
            this.waistCircumference = data.waist_circumference;
        }

        if (check.assigned(data.hip_circumference)) {
            this.hipCircumference = data.hip_circumference;
        }

        if (check.assigned(data.growth)) {
            this.growth = data.growth;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {IUserDTO}
     */
    toJson() {
        const data: IUserDTO = null;
        
        data.user_name = this.userName;
        data.user_surname = this.userSurname;
        data.user_email = this.userEmail;
        data.user_telephone_number = this.userTelephoneNumber;
        data.bust_circumference = this.bustCircumference;
        data.waist_circumference = this.waistCircumference;
        data.hip_circumference = this.hipCircumference;
        data.growth = this.growth;

        return data;
    }


    /**
     * Create User object from data object
     *
     * @param {IUserDTO} data
     * @return {User}
     */
    static factory(data: IUserDTO): User {
        return (new User()).fromJson(data);
    }
}
