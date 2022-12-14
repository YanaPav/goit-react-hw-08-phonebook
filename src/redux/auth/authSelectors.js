export const selectUserEmail = ({ auth }) => auth.user?.email
export const selectUserName = ({ auth }) => auth.user?.name
export const selectToken = ({ auth }) => auth.token
export const SelectIsLoggedIn = ({ auth }) => auth.isLoggedIn
export const selectIsLoading =({auth}) => auth.loading
export const selectAuthError = ({auth}) => auth.error