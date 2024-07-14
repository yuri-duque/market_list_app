import {FirestoreDocument, FirestoreRepository} from "@core/integration";

export class ListService {
  private repository: FirestoreRepository<FirestoreDocument>;

  constructor(userId: string) {
    this.repository = new FirestoreRepository(firebase =>
      firebase.collection("users").doc(userId).collection("lists"),
    );
  }

  async save(product: FirestoreDocument) {
    await this.repository.save(product);
  }
}
