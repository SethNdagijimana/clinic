import { createSlice } from "@reduxjs/toolkit"

const checkAuth = () => {
  const accessToken = localStorage.getItem("accessToken")
  const refreshToken = localStorage.getItem("refreshToken")
  return !!(accessToken && refreshToken)
}

const initialState = {
  tokens: {
    access: null,
    refresh: null
  },
  user: JSON.parse(localStorage.getItem("user")) || { role: "" },
  isAuthenticated: checkAuth(),
  systemUsers: [],
  idTypes: [],
  loading: false,
  success: false,
  error: false,
  message: "",

  passwordReset: {
    requestSent: false,
    tokenValidated: false
  },
  attendance: {
    stats: [],
    currentUserStats: null,
    loading: false,
    error: null
  }
}

const userManagementSlice = createSlice({
  name: "userMngmt",
  initialState,
  reducers: {
    initializeAuth: (state) => {
      const accessToken = localStorage.getItem("accessToken")
      const refreshToken = localStorage.getItem("refreshToken")
      const user = localStorage.getItem("user")
      if (accessToken && refreshToken && user) {
        state.tokens = { access: accessToken, refresh: refreshToken }
        state.user = JSON.parse(user)
        state.isAuthenticated = true
      }
    },
    updateTokens: (state, action) => {
      state.tokens.access = action.payload.access
      state.isAuthenticated = true
      localStorage.setItem("accessToken", action.payload.access)
    },
    initializeSystemUser: (state) => {
      return {
        ...initialState,
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated
      }
    },
    resetPasswordState: (state) => {
      state.passwordReset = {
        requestSent: false,
        tokenValidated: false
      }
    },
    resetSuccess: (state) => {
      state.success = false
    },
    logout: (state) => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("user")
      return {
        ...initialState,
        isAuthenticated: false,
        user: { role: "" },
        tokens: { access: null, refresh: null }
      }
    }
  }
})

export const {
  initializeSystemUser,
  logout,
  updateTokens,
  initializeAuth,
  resetPasswordState,
  resetSuccess
} = userManagementSlice.actions
export default userManagementSlice.reducer
