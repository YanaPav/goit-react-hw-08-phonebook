export const selectUserEmail = ({ auth }) => auth.user?.email
export const SelectToken = ({ auth }) => auth.token
export const SelectIsLoggedIn = ({ auth }) => auth.isLoggedIn
export const selectIsLoading =({auth}) => auth.loading
export const selectAuthError = ({auth}) => auth.error