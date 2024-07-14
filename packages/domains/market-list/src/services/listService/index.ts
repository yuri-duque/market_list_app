import {Auth, FirestoreRepository} from "@core/integration";
import {List} from "../../types/List";

export class ListService {
  private auth = new Auth();
  private repository: FirestoreRepository<List>;

  constructor() {
    this.repository = new FirestoreRepository(firebase =>
      firebase.collection("users").doc(this.auth.userId).collection("lists"),
    );
  }

  async start() {
    const lists = await this.getAll();
    if (lists.length) {
      return lists[0];
    }

    let newList: List = {
      name: "My List",
    };
    return this.save(newList);
  }

  private save(list: List): Promise<List> {
    return this.repository.save(list);
  }

  getAll(): Promise<List[]> {
    return this.repository.getAll();
  }

  getById(id: string): Promise<List | null> {
    return this.repository.getById(id);
  }
}
