import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createAt = action.payload.createAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;

/* 


export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAt,
      };
      case "customer/updateName":
        return { ...state, fullName: action.payload };
        
        default:
          return state;
        }
      }
      
      // ---------- ACTION CREATOR -------------------
      
      export function createCustomer(fullName, nationalID) {
        return {
          type: "customer/createCustomer",
          payload: { fullName, nationalID, createdAt: new Date().toISOString() },
        };
      }
      
      export function updateName(fullName) {
        return { type: "customer/updateName", p ayload: fullName };
      }
*/
