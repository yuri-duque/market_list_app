import {Auth, FirestoreRepository} from "@core/integration";
import {Product} from "../../types";

export class ProductListService {
  private auth = new Auth();
  private repository: FirestoreRepository<Product>;

  constructor(listId: string) {
    this.repository = new FirestoreRepository(firebase =>
      firebase
        .collection("users")
        .doc(this.auth.userId)
        .collection("lists")
        .doc(listId)
        .collection("products"),
    );
  }

  async getAll(): Promise<Product[]> {
    const querySnapshot = await this.repository.db
      .orderBy("createdAt", "desc")
      .get();

    const documents: Product[] = [];

    querySnapshot.forEach(doc => {
      documents.push({id: doc.id, ...doc.data()} as Product);
    });

    return documents;
  }

  save(product: Product): Promise<Product> {
    return this.repository.save(product);
  }

  async update(product: Product): Promise<void> {
    await this.repository.update(product);
  }

  async delete(productId: string): Promise<void> {
    await this.repository.delete(productId);
  }
}
