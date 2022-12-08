import {Dispatch} from "redux";
import {OfferState} from "../../types/types";
import {onIsLoadingChange} from "../actions/profile";

export const createNewOfferAndRedirect = (userId: string, offer: OfferState) => {
    return (dispatch: Dispatch) => {
        dispatch(onIsLoadingChange(true))
        fetch('http://192.168.100.6:5000/jobs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                offer_type: 'user',
                job_type: 'stacjonarna',
                position_name: offer.title,
                location: offer.location,
                company_name: offer.company,
                salary: offer.salary,
                short_description: offer.aboutCompany,
                required_experience: offer.expectations,
                required_skills: offer.role,
                things_to_do: offer.yourTasks,
                required_education: 'studia wyższe',
                benefits: offer.benefits,
            })
        })
            .then(() => window.top!.location = "/")
            .catch((error) => console.log(error))
            .finally(() => dispatch(onIsLoadingChange(false)))
    }
}