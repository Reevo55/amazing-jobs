import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { CVState } from '../types/types'

const CvDocument = (cvState: CVState) => {

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
        clauseText:
        {
            fontSize: 9,
            marginBottom: 5,
        },

        sectionText:
        {
            fontSize: 12,
        },
    });

    return (
        <Document language='pl-PL'>
            <Page size="A4" style={cv_styles.page}>
                <View style={cv_styles.general}>
                    <View style={cv_styles.nameSection}>
                            <Text  style={cv_styles.fullName}> CV - {cvState.full_name} </Text>
                            <Text  style={cv_styles.conctactData}> email: {cvState.email}, telefon: {cvState.phone}, adres: {cvState.address} </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Informacje ogólne: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.summary} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Umiejętności: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.skills} 
                        </Text>
                    </View>


                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Doświadczenie: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.experience} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Edukacja: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.education} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Języki: </Text>
                        <Text  style={cv_styles.sectionText}> 
                            {cvState.languages} 
                        </Text>
                    </View>


                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Cerytifikaty: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.courses_certifcates} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.headerText}> Hobby: </Text>
                        <Text  style={cv_styles.sectionText}>
                            {cvState.hobbies} 
                        </Text>
                    </View>

                    <View style={cv_styles.section}>
                        <Text  style={cv_styles.clauseText}>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji 
                        (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz 
                        zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
                        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu 
                        takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                        </Text>
                        <Text  style={cv_styles.clauseText}>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie przyszłych procesów rekrutacyjnych.
                        </Text>

                    </View>

                </View>
            </Page>
        </Document>
    );
}


export default CvDocument;