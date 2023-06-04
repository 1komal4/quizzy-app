import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'

const Result = ({ route, navigation }) => {
    const attempted = route.params;

    return <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: '800', fontSize: 41, color: '#101727', marginBottom: 15, textAlign: 'center' }}>
            Result</Text>
        <Text style={{ fontWeight: '800', fontSize: 31, color: '#101727', marginBottom: 25, textAlign: 'center' }}>
            {attempted.filter(itm => itm.correctAnswer === itm.ans).length} / {attempted.length}</Text>
        <Pressable style={styles.btn} onPress={() => { navigation.navigate('home') }}>
            <Text style={{ color: '#fff', fontSize: 16 }}> Restart</Text>
        </Pressable>
        {
            attempted?.map(itm => {
                return (<View key={itm?.id} style={{ width: '100%', marginBottom: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{itm.question}</Text>
                    <View style={{ marginTop: 7 }}>
                        <Text style={{ ...styles.label, color: '#3F979B' }}>Correct Answer</Text>
                        <Text style={{
                            marginTop: 5,
                            borderWidth: 2,
                            backgroundColor: '#B9F3E4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 12,
                            borderColor: '#3F979B',
                            borderRadius: 5,
                            overflow: 'hidden'
                        }}>{itm?.correctAnswer}</Text>
                    </View>
                    <View style={{ marginTop: 7 }}>
                        <Text style={{ ...styles.label, color: itm.correctAnswer === itm.ans ? '#3F979B' : '#f10e2f' }}>Your Answer</Text>
                        <Text style={{
                            marginTop: 5,
                            borderWidth: 2,
                            backgroundColor: itm.correctAnswer === itm.ans ? '#B9F3E4' : '#ffa9ce',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 12,
                            borderColor: itm.correctAnswer === itm.ans ? '#3F979B' : '#f10e2f',
                            borderRadius: 5,
                            overflow: 'hidden'
                        }} >{itm?.ans}</Text>
                    </View>
                </View>)
            })
        }
        <View style={{ height: 30 }}>

        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        color: '#101727',
        marginBottom: 2
    },
    btn: {
        backgroundColor: '#101727',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,
        marginBottom:25
    }
});
export default Result;