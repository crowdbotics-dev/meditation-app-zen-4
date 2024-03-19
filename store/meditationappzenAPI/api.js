import axios from "axios"
const meditationappzenAPI = axios.create({
  baseURL: "https://meditation-app-zen-4.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return meditationappzenAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return meditationappzenAPI.post(`/api/v1/login/`, payload)
}
function api_v1_plan_list(payload) {
  return meditationappzenAPI.get(`/api/v1/plan/`)
}
function api_v1_plan_create(payload) {
  return meditationappzenAPI.post(`/api/v1/plan/`, payload)
}
function api_v1_plan_retrieve(payload) {
  return meditationappzenAPI.get(`/api/v1/plan/${payload.id}/`)
}
function api_v1_plan_update(payload) {
  return meditationappzenAPI.put(`/api/v1/plan/${payload.id}/`, payload)
}
function api_v1_plan_partial_update(payload) {
  return meditationappzenAPI.patch(`/api/v1/plan/${payload.id}/`, payload)
}
function api_v1_plan_destroy(payload) {
  return meditationappzenAPI.delete(`/api/v1/plan/${payload.id}/`)
}
function api_v1_progress_list(payload) {
  return meditationappzenAPI.get(`/api/v1/progress/`)
}
function api_v1_progress_create(payload) {
  return meditationappzenAPI.post(`/api/v1/progress/`, payload)
}
function api_v1_progress_retrieve(payload) {
  return meditationappzenAPI.get(`/api/v1/progress/${payload.id}/`)
}
function api_v1_progress_update(payload) {
  return meditationappzenAPI.put(`/api/v1/progress/${payload.id}/`, payload)
}
function api_v1_progress_partial_update(payload) {
  return meditationappzenAPI.patch(`/api/v1/progress/${payload.id}/`, payload)
}
function api_v1_progress_destroy(payload) {
  return meditationappzenAPI.delete(`/api/v1/progress/${payload.id}/`)
}
function api_v1_session_list(payload) {
  return meditationappzenAPI.get(`/api/v1/session/`)
}
function api_v1_session_create(payload) {
  return meditationappzenAPI.post(`/api/v1/session/`, payload)
}
function api_v1_session_retrieve(payload) {
  return meditationappzenAPI.get(`/api/v1/session/${payload.id}/`)
}
function api_v1_session_update(payload) {
  return meditationappzenAPI.put(`/api/v1/session/${payload.id}/`, payload)
}
function api_v1_session_partial_update(payload) {
  return meditationappzenAPI.patch(`/api/v1/session/${payload.id}/`, payload)
}
function api_v1_session_destroy(payload) {
  return meditationappzenAPI.delete(`/api/v1/session/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return meditationappzenAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_sleepcontent_list(payload) {
  return meditationappzenAPI.get(`/api/v1/sleepcontent/`)
}
function api_v1_sleepcontent_create(payload) {
  return meditationappzenAPI.post(`/api/v1/sleepcontent/`, payload)
}
function api_v1_sleepcontent_retrieve(payload) {
  return meditationappzenAPI.get(`/api/v1/sleepcontent/${payload.id}/`)
}
function api_v1_sleepcontent_update(payload) {
  return meditationappzenAPI.put(`/api/v1/sleepcontent/${payload.id}/`, payload)
}
function api_v1_sleepcontent_partial_update(payload) {
  return meditationappzenAPI.patch(
    `/api/v1/sleepcontent/${payload.id}/`,
    payload
  )
}
function api_v1_sleepcontent_destroy(payload) {
  return meditationappzenAPI.delete(`/api/v1/sleepcontent/${payload.id}/`)
}
function api_v1_useractivity_list(payload) {
  return meditationappzenAPI.get(`/api/v1/useractivity/`)
}
function api_v1_useractivity_create(payload) {
  return meditationappzenAPI.post(`/api/v1/useractivity/`, payload)
}
function api_v1_useractivity_retrieve(payload) {
  return meditationappzenAPI.get(`/api/v1/useractivity/${payload.id}/`)
}
function api_v1_useractivity_update(payload) {
  return meditationappzenAPI.put(`/api/v1/useractivity/${payload.id}/`, payload)
}
function api_v1_useractivity_partial_update(payload) {
  return meditationappzenAPI.patch(
    `/api/v1/useractivity/${payload.id}/`,
    payload
  )
}
function api_v1_useractivity_destroy(payload) {
  return meditationappzenAPI.delete(`/api/v1/useractivity/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return meditationappzenAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return meditationappzenAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return meditationappzenAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return meditationappzenAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return meditationappzenAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return meditationappzenAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_plan_list,
  api_v1_plan_create,
  api_v1_plan_retrieve,
  api_v1_plan_update,
  api_v1_plan_partial_update,
  api_v1_plan_destroy,
  api_v1_progress_list,
  api_v1_progress_create,
  api_v1_progress_retrieve,
  api_v1_progress_update,
  api_v1_progress_partial_update,
  api_v1_progress_destroy,
  api_v1_session_list,
  api_v1_session_create,
  api_v1_session_retrieve,
  api_v1_session_update,
  api_v1_session_partial_update,
  api_v1_session_destroy,
  api_v1_signup_create,
  api_v1_sleepcontent_list,
  api_v1_sleepcontent_create,
  api_v1_sleepcontent_retrieve,
  api_v1_sleepcontent_update,
  api_v1_sleepcontent_partial_update,
  api_v1_sleepcontent_destroy,
  api_v1_useractivity_list,
  api_v1_useractivity_create,
  api_v1_useractivity_retrieve,
  api_v1_useractivity_update,
  api_v1_useractivity_partial_update,
  api_v1_useractivity_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
