import {Auth, FirestoreRepository} from "@core/integration";
import {BaseProduct} from "../../types";

export class BaseProductService {
  private auth = new Auth();
  private repository: FirestoreRepository<BaseProduct>;

  constructor(userId: string) {
    this.repository = new FirestoreRepository(firebase =>
      firebase.collection("users").doc(this.auth.userId).collection("products"),
    );
  }

  save(product: BaseProduct): Promise<BaseProduct> {
    return this.repository.save(product);
  }

  getAll(): Promise<BaseProduct[]> {
    return this.repository.getAll();
  }
}
