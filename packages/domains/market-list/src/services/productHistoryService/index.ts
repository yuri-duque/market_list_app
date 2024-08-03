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

  async addNewHistory(baseProductId: string, product: Product) {
    const historyProduct = this.mapProductToBaseProduct(product);

    this.save(baseProductId, historyProduct);
  }

  async calculateAvgPrice(baseProductId: string) {
    const products = await this.getLast3HistoryProducts(baseProductId);
    if (products) {
      const total = products.reduce((acc, product) => {
        return acc + (product.price / product.quantity);
      }, 0);
      return total / products.length;
    }
  }

  private mapProductToBaseProduct(product: Product): ProductHistory {
    return {
      name: product.name as string,
      price: product.price as number,
      quantity: product.quantity as number,
    };
  }

  private async save(baseProductId: string, productHistory: ProductHistory) {
    const newDocument = this.repository.deleteUndefinedValues(productHistory);
    newDocument.createdAt = new Date();
    return this.db(baseProductId).doc(productHistory.id).set(newDocument);
  }

  private async getLast3HistoryProducts(baseProductId: string) {
    const querySnapshot = await this.db(baseProductId)
      .orderBy("createdAt", "desc")
      .limit(3)
      .get();
    const documents: ProductHistory[] = [];
    querySnapshot.forEach(doc => {
      documents.push(doc.data() as ProductHistory);
    });
    return documents;
  }

  private db(baseProductId: string) {
    return this.repository.db.doc(baseProductId).collection("history");
  }
}
