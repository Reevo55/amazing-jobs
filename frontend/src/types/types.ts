export interface AppState {
  profileState: ProfileState
  offerState: OfferState
  statusMessageState: StatusMessageState
  comparatorState: ComparatorState
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
  id?: string
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

export interface ComparatorState {
  toCompare: OfferState[]
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

export type Job = {
  job_id: number
  user_id: string
  offer_type: string
  position_name: string
  company_name: string
  job_type: string
  location: string
  salary: string
  short_description: string
  required_experience: string
  required_skills: string
  things_to_do: string
  required_education: string
  benefits: string
}

export interface City {
  name: string
  enum: string
}

export type Filters = {
  education: string
  skill: string
  min: number
  max: number
}
