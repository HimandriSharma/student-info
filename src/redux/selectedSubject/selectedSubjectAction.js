import { SELECTED_SUBJECT } from "./selectedSubjectTypes";

export const selectedSubject = (subject) => {
    return {
        type: SELECTED_SUBJECT,
        payload: subject
    }
}