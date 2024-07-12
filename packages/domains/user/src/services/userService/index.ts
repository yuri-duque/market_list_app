import {Auth, FirestoreRepository} from "@core/integration";
import {User} from "../../types/user";

export class UserService {
  private repository = new FirestoreRepository("users");
  private auth = new Auth();

  async save(newUser: User) {
    try {
      const user = await this.auth.createUser(newUser.email, newUser.password);

      const baseUser: User = {
        ...newUser,
        email: user.email as string,
        id: user.uid,
      };

      await this.repository.save(baseUser);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await this.auth.loginUser(email, password);

      const savedUser = await this.repository.getById(user.uid);
      return savedUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
