export interface AppState {
  profileState: ProfileState
  offerState: OfferState
}

export interface ProfileState {
  isLoading: boolean
  loadingErrorOccurred: boolean
  userId?: string
}

export interface OfferState {
  title: string
  location: string
  salary: string
  company: string
  aboutCompany: string
  role: string
  yourTasks: string
  expectations: string
  benefits: string
}
