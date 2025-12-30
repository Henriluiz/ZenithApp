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
            <View style={{alignItems: "center"}}>
                <Image
                    style={styles.logo}
                    source={require('./img/logo.png')}/>
            </View>
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
                                underlineColorAndroid="transparent"
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
                                underlineColorAndroid="transparent"
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
                        <Pressable onPress={() => enviar('login')} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingRight: 50,}}>
                            <Text style={styles.entrarText}>Entrar</Text>
                            <View>
                                <ImageBackground style={styles.imgfSeta} source={require('./img/fundoIcone.png')}/>
                                <ImageBackground style={styles.seta} source={require('./img/seta.png')}/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.contaNova}>
                        <Text style={{color: "rgba(255, 255, 255, 1)", fontSize: 17,}}>É novo por aqui? </Text>
                        <Text style={{color: "rgba(255, 255, 255, 1)", fontSize: 17,textDecorationLine: "underline", fontWeight: "bold"}}>Cadastre-se</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}