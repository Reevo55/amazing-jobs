import DefaultLayout from "../layouts/DefaultLayout";
import OfferFormInput from "../components/inputs/OfferFormInput";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import {CVState } from '../types/types'
import React, {useState} from 'react'



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
    
    Font.register({
        family: "Roboto",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
    });

    const cv_styles = StyleSheet.create({
        page: {
        flexDirection: 'row',
        fontFamily: "Roboto"
        },
            
        general: {
        padding: 40,
        background: '#fff',
        margintop: 50,
        marginBottom: 10,
        borderRadius: 20
        },

        nameSection: {
            borderStyle: 'solid',
            borderWidth: 3,
            marginBottom: 30
        },

        section: {
            marginBottom: 30
        },

        fullName:
        {
            fontSize: 30,
            marginBottom: 5
        },

        conctactData:
        {
            fontSize: 12,
            marginBottom: 5
        },

        headerText:
        {
            fontSize: 20,
            marginBottom: 5,
            fontWeight: 'bold'
        },

        sectionText:
        {
            fontSize: 12,
        },
    });
    
    const CvDoc = () => (
        <Document language='pl-PL'>
            <Page size="A4" style={cv_styles.page}>
                <View style={cv_styles.general}>
                    <View style={cv_styles.nameSection}>
                            <Text  style={cv_styles.fullName}> CV - {cvDetails.full_name} </Text>
                            <Text  style={cv_styles.conctactData}> email: {cvDetails.email}, telefon: {cvDetails.phone}, adres: {cvDetails.address} </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Informacje ogólne: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.summary} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Umiejętności: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.skills} 
                        </Text>
                    </View>


                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Doświadczenie: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.experience} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Edukacja: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.education} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Języki: </Text>
                        <Text  style={cv_styles.sectionText}> 
                            {cvDetails.languages} 
                        </Text>
                    </View>


                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Cerytifikaty: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.courses_certifcates} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Hobby: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvDetails.hobbies} 
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );

    return (
      <DefaultLayout>
        <div className={"max-w-5xl"}>
            <h2> Wypełnij informacje w każdej sekcji. CV zostanie wygenerowane na podstawie wypełnionych pól. </h2>
            <div className={"grid grid-cols-1 gap-4"}>
                    <OfferFormInput props={{
                        value: cvDetails.full_name,
                        label: "Imię i nazwisko",
                        setValue: (newValue) => setCvDetails({...cvDetails, full_name: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.summary,
                        label: "O mnie / Ogólne informacje",
                        setValue: (newValue) => setCvDetails({...cvDetails, summary: newValue})
                    }}/>
                    
                    <OfferFormInput props={{
                        value: cvDetails.skills,
                        label: "Twoje umiejętności",
                        setValue: (newValue) => setCvDetails({...cvDetails, skills: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.experience,
                        label: "Twoje doświadczenie",
                        setValue: (newValue) => setCvDetails({...cvDetails, experience: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.education,
                        label: "Twoja edukacja",
                        setValue: (newValue) => setCvDetails({...cvDetails, education: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.languages,
                        label: "Jakie znasz języki",
                        setValue: (newValue) => setCvDetails({...cvDetails, languages: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.courses_certifcates,
                        label: "Ukończone kursy/zdobyte certyfikaty",
                        setValue: (newValue) => setCvDetails({...cvDetails, courses_certifcates: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.hobbies,
                        label: "Twoje hobby",
                        setValue: (newValue) => setCvDetails({...cvDetails, hobbies: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.address,
                        label: "Twój adres zamieszkania",
                        setValue: (newValue) => setCvDetails({...cvDetails, address: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.phone,
                        label: "Twój numer telefonu",
                        setValue: (newValue) => setCvDetails({...cvDetails, phone: newValue})
                    }}/>

                    <OfferFormInput props={{
                        value: cvDetails.email,
                        label: "Twój email",
                        setValue: (newValue) => setCvDetails({...cvDetails, email: newValue})
                    }}/>
            </div>

            <div className='mt-7 text-right'>
                <PDFDownloadLink document={<CvDoc />} fileName="CV_Compare&Work.pdf" className="hover:underline bg-primary text-white px-6 py-2 rounded-lg mt-7">
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