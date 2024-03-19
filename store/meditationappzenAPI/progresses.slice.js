import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_progress_list = createAsyncThunk(
  "progresses/api_v1_progress_list",
  async payload => {
    const response = await apiService.api_v1_progress_list(payload)
    return response.data
  }
)
export const api_v1_progress_create = createAsyncThunk(
  "progresses/api_v1_progress_create",
  async payload => {
    const response = await apiService.api_v1_progress_create(payload)
    return response.data
  }
)
export const api_v1_progress_retrieve = createAsyncThunk(
  "progresses/api_v1_progress_retrieve",
  async payload => {
    const response = await apiService.api_v1_progress_retrieve(payload)
    return response.data
  }
)
export const api_v1_progress_update = createAsyncThunk(
  "progresses/api_v1_progress_update",
  async payload => {
    const response = await apiService.api_v1_progress_update(payload)
    return response.data
  }
)
export const api_v1_progress_partial_update = createAsyncThunk(
  "progresses/api_v1_progress_partial_update",
  async payload => {
    const response = await apiService.api_v1_progress_partial_update(payload)
    return response.data
  }
)
export const api_v1_progress_destroy = createAsyncThunk(
  "progresses/api_v1_progress_destroy",
  async payload => {
    const response = await apiService.api_v1_progress_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const progressesSlice = createSlice({
  name: "progresses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_progress_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_progress_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_progress_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_progress_list,
  api_v1_progress_create,
  api_v1_progress_retrieve,
  api_v1_progress_update,
  api_v1_progress_partial_update,
  api_v1_progress_destroy,
  slice: progressesSlice
}
