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
  legal: string
}

export interface CVState {
  summary: string
  skills: string
  experience: string
  education: string
  languages: string
  courses_certifcates: string
  hobbies: string
  address: string
  phone: string
  email: string
  full_name: string
}
