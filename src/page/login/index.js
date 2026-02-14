// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';

export default function Login() {

    const [email, SetEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const esqueceu_senha = (idModal) => {
        navigation.navigate(idModal)
    }
    const entrar = (idModal ) => {
        navigation.navigate(idModal)
    }

    const validarCampos = (email, senha) => {
        enviarFrom = true;
        if (!email.value) { console.log('Nome está vazio'); // ! Evitar comandos DROP etc.. SQL
        enviarForm = false; } else if (!senha.value) { console.log('Senha está vazia');
        enviarForm = false; } else if (senha.value.length < 4 || senha.value.length > 10) { console.log('Senha deve ter entre 4 e 10 caracteres');
        enviarForm = false; } 
        if (enviarForm) { console.log('Formulário válido, enviando...');
        }; // Aqui terá uma função responsável para ligar ou  
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
                                keyboardType="email-address"
                                underlineColorAndroid="transparent" // Remove aquela linha em baixo das palavras, enquanto escrevemos!
                                maxLength={100}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.Continput}>
                            <Image source={require('./img/cadeado.png')}/>
                            <TextInput
                                style={styles.input}
                                onChangeText={setSenha}
                                value={senha}
                                keyboardType="visible-password"
                                underlineColorAndroid="transparent" // Remove aquela linha em baixo das palavras, enquanto escrevemos!
                                maxLength={20}
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
                        <Pressable onPress={() => validarCampos(email, senha)} style={styles.stylesButton}>
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