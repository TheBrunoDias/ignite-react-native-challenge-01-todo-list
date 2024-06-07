import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: globalStyles.colors.base.gray400,
    borderTopWidth: 1,
    paddingTop: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boldText: {
    marginTop: 16,
    fontSize: globalStyles.fontSize.sm,
    color: globalStyles.colors.base.gray300,
    fontWeight:globalStyles.fontWeight.bold,
  },
  text: {
    color: globalStyles.colors.base.gray300,
    fontSize: globalStyles.fontSize.sm,
  }
})