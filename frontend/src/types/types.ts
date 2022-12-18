export interface AppState {
  profileState: ProfileState
  offerState: OfferState
  statusMessageState: StatusMessageState
}

export interface ProfileState {
  isLoading: boolean
  loadingErrorOccurred: boolean
  userId?: string
}

export interface StatusMessageState {
  showMessage: boolean
  title?: string
  message?: string
  type?: MessageType
  callback?: () => void
}

export enum MessageType {
  success = 0,
  failure = 1,
  info = 2,
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
