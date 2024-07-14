import {Auth, FirestoreRepository} from "@core/integration";
import {User} from "../../types/user";

export class UserService {
  private repository: FirestoreRepository<User>;
  private auth: Auth;

  constructor() {
    this.repository = new FirestoreRepository(firebase =>
      firebase.collection("users"),
    );
    this.auth = new Auth();
  }

  async userLogged() {
    const user = this.auth.userId;
    if (!user) {
      return false;
    }

    return true;
  }

  async save(newUser: User) {
    const user = await this.auth.createUser(newUser.email, newUser.password);

    const baseUser: User = {
      ...newUser,
      email: user.email as string,
      id: user.uid,
    };

    await this.repository.save(baseUser);
  }

  async login(email: string, password: string) {
    const user = await this.auth.loginUser(email, password);

    const savedUser = await this.repository.getById(user.uid);
    return savedUser;
  }
}
