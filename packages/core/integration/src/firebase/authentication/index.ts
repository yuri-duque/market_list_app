import auth from "@react-native-firebase/auth";

export class Auth {
  public userId: string = "";

  constructor() {
    this.getCurrentUser();
    this.authStateChanged();
  }

  private authStateChanged() {
    auth().onAuthStateChanged(user => {
      this.userId = user?.uid || "";
    });
  }

  private getCurrentUser() {
    const user = auth().currentUser;
    this.userId = user?.uid || "";
    return this.userId;
  }

  public async signOut() {
    return auth().signOut();
  }

  public async createUser(email: string, password: string) {
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

  public async loginUser(email: string, password: string) {
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

  public async retrievePassword(email: string) {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error: any) {
      throw new Error(
        "Failed to reset password. Please check your email is correct.",
      );
    }
  }
}
