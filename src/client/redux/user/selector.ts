import { createSelector } from 'reselect'

export const isLoggedSelector = state => state.user.isLogged
