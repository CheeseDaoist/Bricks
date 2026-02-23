import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}
export default function DefaultContainer({children, style}:ContainerProps) {
    return (
        <View style={[Styles.container, style]}>
            <View style={{width: '100%', height: 56,  display: 'flex'}}>
                <View style={{height: '100%', width: '100%'}}>
                </View>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        height:800,
        width: 412,
        // backgroundColor: "blue",
        display: 'flex',
        alignSelf: 'center',
        // padding: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        gap: 12,
        backgroundColor: 'white'
        }
})