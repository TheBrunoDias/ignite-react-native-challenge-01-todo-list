import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: globalStyles.colors.base.gray700,
    paddingTop: 70,
    paddingBottom: 71,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: globalStyles.colors.base.gray600,
    flex: 1,
    paddingHorizontal: 24,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -24,
    marginBottom: 32,
    height: 54,
  },
  input: {
    flex: 1,
    marginRight: 4,
    height: '100%',
    backgroundColor: globalStyles.colors.base.gray500,
    color: globalStyles.colors.base.gray100,
    padding: 16,
    fontSize: globalStyles.fontSize.md,
    borderRadius: 6
  },
  button: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: globalStyles.colors.product.blueDark,
    padding: 18,
    borderRadius: 6
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: globalStyles.fontSize.sm,
    fontWeight: globalStyles.fontWeight.bold,
    paddingBottom: 20,
  },
  listHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderContentCreatedText: {
    color: globalStyles.colors.product.blue,
  },
  listHeaderContentCompletedText: {
    color: globalStyles.colors.product.purple,
  },
  listHeaderContentNumber: {
    marginLeft: 8,
    justifyContent:'center',
    alignItems:'center',
    color: globalStyles.colors.base.gray300,
    backgroundColor:globalStyles.colors.base.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  }
});