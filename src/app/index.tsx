import { View, Text } from 'react-native'

import { Welcome } from '@/components/welcome'


export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
           
            <Text style={{ fontSize: 22}}>Hello React Native</Text>
            <Welcome />
        </View>
    )
}