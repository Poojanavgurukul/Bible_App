import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  para: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  listItem: {
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 5,
  },
});
