// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';

export default function Login() {

    const [email, SetEmail] = useState("");
    const [senha, setSenha] = useState("");
    const esqueceu_senha = (idModal) => {
        navigation.navigate(idModal)
    }
    const enviar = (idModal ) => {
        navigation.navigate(idModal)
    }

    return (
        <View style={styles.container}>
            {/* Flex:  1 */}
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('./img/logo.png')}/>
            </View>
            {/* Flex: 2 */}
            <View style={styles.container2}>

                <Text style={styles.titulo}>QUE BOM TER VOCÊ DE VOLTA!</Text>
                <Text style={styles.descricao}>Sua próxima sessão está quase lá.</Text>
                
                {/* Container Geral dos inputs */}
                <View style={styles.contEntradas}>
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.Continput}>
                            <Image source={require('./img/email.png')}/>
                            <TextInput
                                style={styles.input}
                                onChangeText={SetEmail}
                                value={email}
                                keyboardType="email"
                                underlineColorAndroid="transparent" // Remove aquela linha em baixo das palavras, enquanto escrevemos!
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.Continput}>
                            <Image source={require('./img/cadeado.png')}/>
                            <TextInput
                                style={styles.input}
                                onChangeText={SetEmail}
                                value={email}
                                keyboardType="email"
                                underlineColorAndroid="transparent" // Remove aquela linha em baixo das palavras, enquanto escrevemos!
                            />
                        </View>
                        <Pressable onPress={() => esqueceu_senha('login')}>
                            <Text style={styles.esenha}>Esqueci a minha senha</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Fim do Container Inputs */}

                {/* Início do botão */}
                <View style={styles.contEntra}>
                    <View style={styles.botaoEntra}>
                        <Pressable onPress={() => enviar('login')} style={styles.stylesButton}>
                            <Text style={styles.entrarText}>Entrar</Text>
                            <View>
                                <ImageBackground style={styles.imgfSeta} source={require('./img/fundoIcone.png')}/>
                                <ImageBackground style={styles.seta} source={require('./img/seta.png')}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.contaNova}>
                        <Text style={styles.textCadastre}>É novo por aqui? </Text>
                        <Text style={styles.linkCadastre}>Cadastre-se</Text>
                    </View>
                </View>
                {/*Final do botão*/}

            </View>
        </View>
    )
}