import { createSlice } from "@reduxjs/toolkit";

export const ALERT_TYPES = {
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
};

const initialState = {
  alerts: [],
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    append: (state, action) => {
      state.alerts = [...state.alerts, action.payload];
    },
    remove: (state, action) => {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export const { append, remove } = alertSlice.actions;

export const getAlerts = (state) => state.alert.alerts;

export default alertSlice.reducer;
