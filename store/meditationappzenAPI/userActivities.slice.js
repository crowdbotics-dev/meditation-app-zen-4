import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_useractivity_list = createAsyncThunk(
  "userActivities/api_v1_useractivity_list",
  async payload => {
    const response = await apiService.api_v1_useractivity_list(payload)
    return response.data
  }
)
export const api_v1_useractivity_create = createAsyncThunk(
  "userActivities/api_v1_useractivity_create",
  async payload => {
    const response = await apiService.api_v1_useractivity_create(payload)
    return response.data
  }
)
export const api_v1_useractivity_retrieve = createAsyncThunk(
  "userActivities/api_v1_useractivity_retrieve",
  async payload => {
    const response = await apiService.api_v1_useractivity_retrieve(payload)
    return response.data
  }
)
export const api_v1_useractivity_update = createAsyncThunk(
  "userActivities/api_v1_useractivity_update",
  async payload => {
    const response = await apiService.api_v1_useractivity_update(payload)
    return response.data
  }
)
export const api_v1_useractivity_partial_update = createAsyncThunk(
  "userActivities/api_v1_useractivity_partial_update",
  async payload => {
    const response = await apiService.api_v1_useractivity_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_useractivity_destroy = createAsyncThunk(
  "userActivities/api_v1_useractivity_destroy",
  async payload => {
    const response = await apiService.api_v1_useractivity_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userActivitiesSlice = createSlice({
  name: "userActivities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_useractivity_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_useractivity_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_useractivity_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_useractivity_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_useractivity_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_useractivity_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_useractivity_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_useractivity_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_useractivity_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_useractivity_list,
  api_v1_useractivity_create,
  api_v1_useractivity_retrieve,
  api_v1_useractivity_update,
  api_v1_useractivity_partial_update,
  api_v1_useractivity_destroy,
  slice: userActivitiesSlice
}
