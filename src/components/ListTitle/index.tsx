import { Text, View, StyleSheet } from "react-native";
import { styles } from "./style"

type Props = {
    color: string;
    name: string;
    number: number;
}

export function ListTitle({ color, name, number }: Props) {
    return (
        <View style={{ flexDirection: "row", height: 19 }} >
            <Text style={{ color: color, fontWeight: "bold" }}>
                {name}
            </Text>
            <View style={styles.container}>
                <Text style={{ }}>
                    {number}
                </Text>
            </View>
        </View>
    )
}