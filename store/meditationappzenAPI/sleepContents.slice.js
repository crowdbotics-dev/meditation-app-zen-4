import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sleepcontent_list = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_list",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_list(payload)
    return response.data
  }
)
export const api_v1_sleepcontent_create = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_create",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_create(payload)
    return response.data
  }
)
export const api_v1_sleepcontent_retrieve = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_retrieve",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_retrieve(payload)
    return response.data
  }
)
export const api_v1_sleepcontent_update = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_update",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_update(payload)
    return response.data
  }
)
export const api_v1_sleepcontent_partial_update = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_partial_update",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_sleepcontent_destroy = createAsyncThunk(
  "sleepContents/api_v1_sleepcontent_destroy",
  async payload => {
    const response = await apiService.api_v1_sleepcontent_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sleepContentsSlice = createSlice({
  name: "sleepContents",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sleepcontent_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sleepcontent_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sleepcontent_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sleepcontent_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sleepcontent_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_sleepcontent_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_sleepcontent_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sleepcontent_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sleepcontent_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sleepcontent_list,
  api_v1_sleepcontent_create,
  api_v1_sleepcontent_retrieve,
  api_v1_sleepcontent_update,
  api_v1_sleepcontent_partial_update,
  api_v1_sleepcontent_destroy,
  slice: sleepContentsSlice
}
