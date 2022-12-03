export interface AppState {
  profileState: ProfileState
}

export interface ProfileState {
  isLoading: boolean
  loadingErrorOccurred: boolean
}

export interface Offer {
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
