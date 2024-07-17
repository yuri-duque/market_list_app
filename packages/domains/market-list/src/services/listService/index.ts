import {Auth, FirestoreRepository} from "@core/integration";
import {Product} from "../../types";
import {List} from "../../types/List";
import {BaseProductService} from "../baseProductService";
import {ProductListService} from "../productListService";

export class ListService {
  private auth = new Auth();
  private repository: FirestoreRepository<List>;
  private baseProductService: BaseProductService;

  constructor() {
    this.repository = new FirestoreRepository(firebase =>
      firebase.collection("users").doc(this.auth.userId).collection("lists"),
    );
    this.baseProductService = new BaseProductService();
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

  async finish(id: string) {
    const productListService = new ProductListService(id);

    const products = await productListService.getAll();
    const productsOnCart = products.filter(product => product.addedAtCart);

    await this.updateBaseProducts(productsOnCart);
    await this.addNewBaseProducts(productsOnCart);

    await this.delete(id);
  }

  private async updateBaseProducts(products: Product[]) {
    const productsWithBaseProduct = products.filter(
      product => product.baseProductId,
    );
    productsWithBaseProduct.forEach(product => {
      this.baseProductService.updateBaseProduct(product);
    });
  }

  private async addNewBaseProducts(products: Product[]) {
    const productsWithoutBaseProduct = products.filter(
      product => !product.baseProductId,
    );
    productsWithoutBaseProduct.forEach(product => {
      this.baseProductService.addNewBaseProduct(product);
    });
  }

  private save(list: List): Promise<List> {
    return this.repository.save(list);
  }

  private getAll(): Promise<List[]> {
    return this.repository.getAll();
  }

  private delete(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
