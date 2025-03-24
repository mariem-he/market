import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/auth.styles'

const forgotpassword: React.FC = () => {
  const [verif_code, setCode] = useState<string>('');
  const [newpassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  return (
    <View>

        <Text style={styles.label}>Verification code</Text>
            <TextInput
                style={styles.input}
                placeholder="enter verification code"
                value={verif_code}
                onChangeText={setCode}
                secureTextEntry
            />
        <Text style={styles.label}>New Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Create a new password (min. 8 characters)"
                value={newpassword}
                onChangeText={setNewPassword}
                secureTextEntry
            />
                    
        <Text style={styles.label}>Confirm New Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm your new password"
                value={confirmNewPassword}
                onChangeText={setConfirmNewPassword}
                secureTextEntry
            />
    </View>
  )
};
export default forgotpassword;