import {Auth, FirestoreDocument, FirestoreRepository} from "@core/integration";
import {ProductHistory} from "../../types";

export class ProductHistoryService {
  private auth = new Auth();
  private repository: FirestoreRepository<ProductHistory>;

  constructor(prodcutId: string) {
    this.repository = new FirestoreRepository(firebase =>
      firebase
        .collection("users")
        .doc(this.auth.userId)
        .collection("products")
        .doc(prodcutId)
        .collection("history"),
    );
  }

  save(product: ProductHistory): Promise<ProductHistory> {
    return this.repository.save(product);
  }

  getAll(): Promise<ProductHistory[]> {
    return this.repository.getAll();
  }
}
