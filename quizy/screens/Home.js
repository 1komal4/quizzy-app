import { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, Pressable, ActivityIndicator, Alert } from 'react-native'

const Home = ({ navigation }) => {
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(false);

    const onContine = () => {
        setLoading(true)
        setTimeout(() => {
            if (userData) {
                navigation.navigate('quiz', { name: userData })
            }
            else {
                Alert.alert('Please enter name')
            }
            setLoading(false)
        }, 1000)
    }

    return <View style={styles.container}>
        <Text style={{ fontWeight: '800', fontSize: 41, color: '#101727', marginBottom: 25, textAlign: 'center' }}>
            Quizy</Text>
        <KeyboardAvoidingView style={{ marginBottom: 10 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Jane Doe"
                onChangeText={text => {
                    setUserData(text)
                }} />
        </KeyboardAvoidingView >
        <Text style={{ color: '#000', fontSize: 14, paddingBottom: 10 }}>Once selected name can be changed only by restarting app.</Text>

        <Pressable style={styles.btn} onPress={onContine}>
            {
                !loading ?
                    <Text style={{ color: '#fff', fontSize: 16 }}> Continue</Text>
                    :
                    <ActivityIndicator color="#fff" />
            }
        </Pressable>
        <View style={{ height: 100 }}></View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#949DB0',
        width: '100%',
        padding: 10,
        fontSize: 18,
        borderRadius: 5
    },
    label: {
        fontSize: 16,
        color: '#101727',
        marginBottom: 5
    },
    btn: {
        backgroundColor: '#101727',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5
    }
});

export default Home;