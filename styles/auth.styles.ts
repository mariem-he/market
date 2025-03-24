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
    imagePicker: {
      width: '100%',
      height: 150,
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    //buttonText: { color: 'white', fontSize: 18 },
    productItem: {
       padding: 12, 
       borderBottomWidth: 1, 
       borderBottomColor: '#ccc' 
      },
      header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
      //container: { flex: 1, padding: 16, backgroundColor: 'white' },
      //header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
      /*input: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        padding: 12, 
        marginBottom: 12, 
        borderRadius: 8,
        fontSize: 16
      },*/
      //label: { fontSize: 16, fontWeight: '600', marginBottom: 8, marginTop: 4 },
      /*pickerContainer: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 8, 
        marginBottom: 12,
        overflow: 'hidden'
      },*/
      //picker: { height: 50 },
      /*imagePicker: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 100, 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 8, 
        marginBottom: 12 
      },*/
      //image: { width: 100, height: 100, borderRadius: 8 },
      removeImageButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      /*button: { 
        backgroundColor: '#4CAF50', 
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 8,
        marginVertical: 10
      },*/
      //buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
      /*productItem: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center'
      },*/
      productImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 15
      },
      productInfo: {
        flex: 1
      },
      productName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4
      },
      stockInfo: {
        marginTop: 8
      },
      stockBarContainer: {
        height: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginTop: 5,
        overflow: 'hidden'
      },
      stockBar: {
        height: '100%',
        borderRadius: 5
      },
      emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888'
      },
      imageSection: {
          marginBottom: 20,
        },
        imageListContainer: {
          height: 120, // Fixed height for the image list
          marginTop: 10,
        },
        imageListContent: {
          alignItems: 'center',
        },
        imageWrapper: {
          marginRight: 15,
          position: 'relative',
        },
        selectedImage: {
          width: 100,
          height: 100,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#ddd',
        },
        /*removeImageButton: {
          position: 'absolute',
          top: 5,
          right: 5,
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 10,
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        },*/
  })