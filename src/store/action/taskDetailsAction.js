import { TaskDetailsActionType } from "../actionTypes/taskDetailsActionType"

export const addTaskDetailsData = (payload) => {
    return {
        type: TaskDetailsActionType.ADD_DETAILS,
        payload: payload
    }
}

export const getFilter = (payload) => {
    return {
        type: TaskDetailsActionType.FILTERED,
        payload: payload
    }
}