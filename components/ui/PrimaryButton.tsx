import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../constants/theme";

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.pill,
    alignItems: "center",
  },
  text: {
    fontSize: theme.typography.body.fontSize,
    color: "#fff",
    fontWeight: "600",
  },
});
