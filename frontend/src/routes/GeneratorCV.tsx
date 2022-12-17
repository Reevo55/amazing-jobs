import DefaultLayout from "../layouts/DefaultLayout";
import CvFormInput from "../components/inputs/CvGeneratorFormInput";
import { PDFDownloadLink } from '@react-pdf/renderer';
import {CVState } from '../types/types'
import React, {useState} from 'react'
import CvDocument from '../components/CvDocument'



function GeneratorCV()
{
    const [cvDetails, setCvDetails] = useState<CVState>({
        summary: '',
        skills: '',
        experience: '',
        education: '',
        languages: '',
        courses_certifcates: '',
        hobbies: '',
        address: '',
        phone: '',
        email: '',
        full_name: ''
    })
    

    return (
      <DefaultLayout>
        <div className={"max-w-5xl"}>
            <h2 className="font-bold text-center text-2xl mt-10"> Wypełnij informacje w każdej sekcji. <br></br>CV zostanie wygenerowane na podstawie wypełnionych pól. </h2>
            <div className={"mt-10 grid grid-cols-1 gap-4"}>
                    <CvFormInput props={{
                        value: cvDetails.full_name,
                        type: 'casual',
                        label: "Imię i nazwisko",
                        setValue: (newValue) => setCvDetails({...cvDetails, full_name: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.summary,
                        type: 'textarea',
                        label: "O mnie / Ogólne informacje",
                        setValue: (newValue) => setCvDetails({...cvDetails, summary: newValue})
                    }}/>
                    
                    <CvFormInput props={{
                        value: cvDetails.skills,
                        type: 'textarea',
                        label: "Twoje umiejętności",
                        setValue: (newValue) => setCvDetails({...cvDetails, skills: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.experience,
                        type: 'textarea',
                        label: "Twoje doświadczenie",
                        setValue: (newValue) => setCvDetails({...cvDetails, experience: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.education,
                        type: 'textarea',
                        label: "Twoja edukacja",
                        setValue: (newValue) => setCvDetails({...cvDetails, education: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.languages,
                        type: 'textarea',
                        label: "Jakie znasz języki",
                        setValue: (newValue) => setCvDetails({...cvDetails, languages: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.courses_certifcates,
                        type: 'textarea',
                        label: "Ukończone kursy/zdobyte certyfikaty",
                        setValue: (newValue) => setCvDetails({...cvDetails, courses_certifcates: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.hobbies,
                        type: 'textarea',
                        label: "Twoje hobby",
                        setValue: (newValue) => setCvDetails({...cvDetails, hobbies: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.address,
                        type: 'textarea',
                        label: "Twój adres zamieszkania",
                        setValue: (newValue) => setCvDetails({...cvDetails, address: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.phone,
                        type: 'casual',
                        label: "Twój numer telefonu",
                        setValue: (newValue) => setCvDetails({...cvDetails, phone: newValue})
                    }}/>

                    <CvFormInput props={{
                        value: cvDetails.email,
                        type: 'casual',
                        label: "Twój email",
                        setValue: (newValue) => setCvDetails({...cvDetails, email: newValue})
                    }}/>
            </div>

            <div className='mt-7 text-right'>
                <PDFDownloadLink document={<CvDocument {...cvDetails} />} fileName="CV_Compare&Work.pdf" className="hover:underline bg-primary text-white px-6 py-2 rounded-lg mt-7">
                {({ blob, url, loading, error }) =>
                    loading ? 'Ładowanie dokumentu...' : 'Pobierz CV!'
                }
                </PDFDownloadLink>
            </div>

        </div>
      </DefaultLayout>
    );
}


export default GeneratorCV;