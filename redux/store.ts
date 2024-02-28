// store.js

import { configureStore } from "@reduxjs/toolkit";
import expandedSidebarShowReducer from "./ExpandedSidebarShow";
import EditProfileComponentShow from "./EditProfileComponentShow";
import AddBannerComponentShow from "./AddBannerComponentShow";
import AddCategoryListShow from "./AddCategoryListShow";
import AddUserComponentShow from "./AddUserComponentShow";
import AddCouponComponentShow from "./AddCouponComponentShow";
import EditCouponComponentShow from "./EditCouponComponentShow";

export const store = configureStore({
    reducer: {
        ExpandedSidebarShow: expandedSidebarShowReducer,
        EditProfileComponentShow: EditProfileComponentShow,
        AddBannerComponentShow: AddBannerComponentShow,
        AddCategoryListShow: AddCategoryListShow,
        AddUserComponentShow: AddUserComponentShow,
        AddCouponComponentShow: AddCouponComponentShow,
        EditCouponComponentShow: EditCouponComponentShow
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
