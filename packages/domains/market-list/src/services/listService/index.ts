import {Auth, FirestoreRepository} from "@core/integration";
import {List} from "../../types/List";
import {ProductHistoryService} from "../productHistoryService";
import {ProductListService} from "../productListService";

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

  async finish(id: string) {
    const productListService = new ProductListService(id);
    const productHistoryService = new ProductHistoryService();

    const products = await productListService.getAll();
    const productsOnCart = products.filter(product => product.addedAtCart);

    await productHistoryService.saveAll(productsOnCart);

    // await this.delete(id);
    // return this.start();
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
