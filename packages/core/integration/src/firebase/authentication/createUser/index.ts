import auth from "@react-native-firebase/auth";

export const createUser = async (email: string, password: string) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email address is already in use.");
    }
    throw new Error(
      error.code || "Failed to create user. Please try again later.",
    );
  }
};
