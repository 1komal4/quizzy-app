import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

import QuizTab from '../components/quiztab';
import axios from '../functionality/axios';

const Quiz = ({ route, navigation }) => {
    const { name } = route.params;
    const [loading, setLoading] = useState(false)
    const [quiz, setQuiz] = useState([]);
    const [attempted, setAttempted] = useState([]);

    const getQuiz = async () => {
        setLoading(true)
        const res = await axios.get('/questions?categories=geography&limit=5');
        setQuiz(res?.data)
        setLoading(false)
    }

    useEffect(() => {
        getQuiz();
    }, [])

    const nav = () => {

        if (quiz.length !== 0 && (quiz.length === attempted.length)) {
            navigation.navigate('result', attempted)
        }
    }
    useEffect(() => {
        nav();
    }, [attempted]);

    return <View style={styles.container}>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ fontWeight: '800', fontSize: 41, color: '#101727', marginBottom: 10, textAlign: 'left' }}>
                {name}</Text>
            <Text style={styles.count}> {attempted.length + 1} / {quiz.length}</Text>
        </View>
        {(!loading && quiz.length > attempted.length) && <QuizTab data={quiz[attempted?.length]} setAttempted={setAttempted} />}

    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        color: '#101727',
        marginBottom: 5
    },
    count: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#BAD7E9',
        backgroundColor: '#BAD7E9',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        fontWeight: '800',
        overflow: 'hidden'
    },
    btn: {
        backgroundColor: '#101727',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5
    }
});


export default Quiz;