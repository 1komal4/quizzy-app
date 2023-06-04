import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

const QuizTab = ({ data, setAttempted,  }) => {
    const [arr, setArr] = useState()

    useEffect(() => {
        setArr(data?.incorrectAnswers);
        setArr(prev => [...prev, data?.correctAnswer])
    }, [data])

    const onSelect = (ans) => {
        setAttempted(prev => [...prev, { id: data?.id, ans, correctAnswer: data?.correctAnswer, question: data?.question }]);
    }

    return <View style={{ marginTop: 20, flex: 1 }}>
        <Text style={{ color: "#000", fontSize: 18 }}>{data?.question}</Text>
        <View style={{ marginTop: 15 }}>
            {
                arr?.sort((r1, r2) => (r1.set > r2.set) ? 1 : (r1.set < r2.set) ? -1 : 0).map(itm => <Pressable key={itm} style={styles.btn} onPress={() => onSelect(itm)}>
                    <Text style={{ color: '#000', fontSize: 16 }}> {itm}</Text>
                </Pressable>)
            }
        </View>

    </View>
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5
    }
});


export default QuizTab;