import {Auth, FirestoreRepository} from "@core/integration";
import {Product, ProductHistory} from "../../types";

export class ProductHistoryService {
  private auth = new Auth();
  private repository: FirestoreRepository<ProductHistory>;

  constructor() {
    this.repository = new FirestoreRepository(firebase =>
      firebase
        .collection("users")
        .doc(this.auth.userId)
        .collection("baseProducts"),
    );
  }

  async saveAll(products: Product[]) {
    const productHistories: ProductHistory[] = products.map(product => {
      const newProductHistory: ProductHistory = {
        id: product.id,
        name: product.name as string,
        price: product.price as number,
        quantity: product.quantity as number,
      };

      return newProductHistory;
    });

    productHistories.forEach(productHistory => {
      this.save(productHistory);
    });
  }

  async save(productHistory: ProductHistory) {
    return this.repository.db.doc(productHistory.id).set(productHistory);
  }
}
