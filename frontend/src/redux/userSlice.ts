import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: number | null;
    name: string | null;
    email: string | null;
    role: string;
    access_token: string | null;
    refresh_token: string | null;
}

const initialState: UserState = {
    id: -1,
    name: "",
    email: "",
    role: "guest",
    access_token: "",
    refresh_token: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (
            state,
            action: PayloadAction<{
                user: {
                    id?: number;
                    name?: string;
                    email?: string;
                    role?: string;
                };

                token: {
                    access_token?: string;
                    refresh_token?: string;
                };
            }>,
        ) => {
            if (action.payload.user.id !== undefined) {
                state.id = action.payload.user.id;
            }

            if (action.payload.user.name !== undefined) {
                state.name = action.payload.user.name;
            }

            if (action.payload.user.email !== undefined) {
                state.email = action.payload.user.email;
            }
            if (action.payload.user.role !== undefined) {
                state.role = action.payload.user.role;
            }

            if (action.payload.token.access_token !== undefined) {
                state.access_token = action.payload.token.access_token;
            }

            if (action.payload.token.refresh_token !== undefined) {
                state.refresh_token = action.payload.token.refresh_token;
            }
        },

        resetUserInfor: () => initialState,
    },
});

export const { setUserInfo, resetUserInfor } = userSlice.actions;
export default userSlice.reducer;
