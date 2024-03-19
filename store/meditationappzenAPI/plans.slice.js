import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_plan_list = createAsyncThunk(
  "plans/api_v1_plan_list",
  async payload => {
    const response = await apiService.api_v1_plan_list(payload)
    return response.data
  }
)
export const api_v1_plan_create = createAsyncThunk(
  "plans/api_v1_plan_create",
  async payload => {
    const response = await apiService.api_v1_plan_create(payload)
    return response.data
  }
)
export const api_v1_plan_retrieve = createAsyncThunk(
  "plans/api_v1_plan_retrieve",
  async payload => {
    const response = await apiService.api_v1_plan_retrieve(payload)
    return response.data
  }
)
export const api_v1_plan_update = createAsyncThunk(
  "plans/api_v1_plan_update",
  async payload => {
    const response = await apiService.api_v1_plan_update(payload)
    return response.data
  }
)
export const api_v1_plan_partial_update = createAsyncThunk(
  "plans/api_v1_plan_partial_update",
  async payload => {
    const response = await apiService.api_v1_plan_partial_update(payload)
    return response.data
  }
)
export const api_v1_plan_destroy = createAsyncThunk(
  "plans/api_v1_plan_destroy",
  async payload => {
    const response = await apiService.api_v1_plan_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_plan_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_plan_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_plan_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_plan_list,
  api_v1_plan_create,
  api_v1_plan_retrieve,
  api_v1_plan_update,
  api_v1_plan_partial_update,
  api_v1_plan_destroy,
  slice: plansSlice
}
