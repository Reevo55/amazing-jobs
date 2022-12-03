export const ON_IS_LOADING_CHANGE = 'ON_IS_LOADING_CHANGE'
export const ON_LOADING_ERROR = 'ON_LOADING_ERROR'

export const onIsLoadingChange = (isLoading: boolean) => ({
  type: ON_IS_LOADING_CHANGE,
  payload: { isLoading },
})

export const onLoadingError = () => ({
  type: ON_LOADING_ERROR,
  payload: {},
})
