import {createSlice} from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
    name: 'notification',
    initialState : {
        message : '',
        isOpen : false,
    },
    reducers: {
        setMessage: (state,action) => {
            state.message = action.payload
        },
        setIsNotificationIsOpen : (state, action) => {
            state.isOpen = action.payload
}
    },
})

// Action creators are generated for each case reducer function
export const {setMessage, setIsNotificationIsOpen} = notificationSlice.actions

export default notificationSlice.reducer