import auth from "@react-native-firebase/auth";

export class Auth {
  async createUser(email: string, password: string) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      return userCredential.user;
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        throw new Error("The email address is already in use.");
      }
      throw new Error("Failed to create user. Please try again later.");
    }
  }
  async loginUser(email: string, password: string) {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return userCredential.user;
    } catch (error: any) {
      throw new Error("Failed to login. Please check your credentials.");
    }
  }

  async retrievePassword(email: string) {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error: any) {
      throw new Error(
        "Failed to reset password. Please check your email is correct.",
      );
    }
  }
}
