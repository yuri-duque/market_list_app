import {Auth, FirestoreRepository} from "@core/integration";
import {BaseProduct, Product} from "../../types";
import {ProductHistoryService} from "../productHistoryService";

export class BaseProductService {
  private auth = new Auth();
  private repository: FirestoreRepository<BaseProduct>;
  private productHistoryService: ProductHistoryService;

  constructor() {
    this.repository = new FirestoreRepository(firebase =>
      firebase
        .collection("users")
        .doc(this.auth.userId)
        .collection("baseProducts"),
    );
    this.productHistoryService = new ProductHistoryService();
  }

  getAll(): Promise<BaseProduct[]> {
    return this.repository.getAll();
  }

  async addNewBaseProduct(product: Product): Promise<void> {
    const savedBaseProduct = await this.getAllByName(product.name as string);

    if (savedBaseProduct.length) {
      product.baseProductId = savedBaseProduct[0].id;
      await this.updateBaseProduct(product);
      return;
    }

    const baseProductMaped = this.mapProductToBaseProduct(product);
    const baseProduct = await this.save(baseProductMaped);

    await this.productHistoryService.addNewHistory(
      baseProduct.id as string,
      product,
    );
  }

  async updateBaseProduct(product: Product): Promise<void> {
    const baseProduct = await this.getById(product.baseProductId as string);
    if (baseProduct) {
      await this.productHistoryService.addNewHistory(
        baseProduct.id as string,
        product,
      );

      await this.updateAvgPrice(baseProduct);
    }
  }

  private async updateAvgPrice(baseProduct: BaseProduct): Promise<void> {
    const newBasePrice = await this.productHistoryService.calculateAvgPrice(
      baseProduct.id as string,
    );

    baseProduct.basePrice = newBasePrice;

    return this.repository.update(baseProduct);
  }

  private mapProductToBaseProduct(product: Product): BaseProduct {
    return {
      name: product.name as string,
      basePrice: product.price as number,
      category: product.category as string,
      subcategory: product.subcategory as string,
    };
  }

  private async getById(id: string): Promise<BaseProduct | null> {
    return this.repository.getById(id);
  }

  private async getAllByName(name: string): Promise<BaseProduct[]> {
    const querySnapshot = await this.repository.db
      .where("name", "==", name)
      .get();
    const documents: BaseProduct[] = [];

    querySnapshot.forEach(doc => {
      documents.push({id: doc.id, ...doc.data()} as BaseProduct);
    });

    return documents;
  }

  private save(baseProduct: BaseProduct): Promise<BaseProduct> {
    return this.repository.save(baseProduct);
  }
}
