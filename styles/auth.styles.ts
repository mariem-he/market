import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    homepage:{
      marginHorizontal: 22,
      marginTop: 12,
    },
    homepgbar:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // width: "100%",
      paddingVertical: 10,
    },
    location:{
      fontFamily: "semibold",
      fontSize: 20,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 30,
      marginTop: 20,
    },
    logo: {
      width: 100,
      height: 100,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#7f8c8d',
      marginBottom: 30,
      textAlign: 'center',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: '#34495e',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
      padding: 12,
      marginBottom: 15,
      fontSize: 16,
    },
    pickerContainer: {
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
      marginBottom: 15,
    },
    picker: {
      height: 50,
    },
    button: {
      backgroundColor: '#27ae60',
      borderRadius: 5,
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600',
    },
    forgotPasswordButton: {
      marginTop: 15,
      alignItems: 'center',
    },
    forgotPasswordText: {
      color: '#3498db',
      fontSize: 14,
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    signupText: {
      color: '#7f8c8d',
      fontSize: 14,
    },
    signupLink: {
      color: '#3498db',
      fontSize: 14,
      fontWeight: '600',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
      color: '#7f8c8d',
      fontSize: 14,
    },
    loginLink: {
      color: '#3498db',
      fontSize: 14,
      fontWeight: '600',
    },
  })