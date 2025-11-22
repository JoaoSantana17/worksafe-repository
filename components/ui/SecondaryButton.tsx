import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../constants/theme";

type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function SecondaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.pill,
    alignItems: "center",
    backgroundColor: theme.colors.surface,
  },
  text: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.primary,
    fontWeight: "600",
  },
});
