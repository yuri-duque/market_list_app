import firebase, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type FirestoreDocument = {
  id: string;
  [key: string]: any;
};

type BaseCollection = (
  firebase: FirebaseFirestoreTypes.Module,
) => FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

export class FirestoreRepository<T extends FirestoreDocument> {
  protected db: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

  constructor(collection: BaseCollection) {
    this.db = collection(firebase());
  }

  async save(document: T): Promise<void> {
    await this.db.doc(document.id).set(document);
  }

  async update(document: T): Promise<void> {
    await this.db.doc(document.id).update(document);
  }

  async getById(id: string): Promise<T | null> {
    const snapshot = await this.db.doc(id).get();

    if (snapshot.exists) {
      return {id: snapshot.id, ...snapshot.data()} as T;
    }

    return null;
  }

  async getAll(): Promise<T[]> {
    const querySnapshot = await this.db.get();

    const documents: T[] = [];

    querySnapshot.forEach(doc => {
      documents.push({id: doc.id, ...doc.data()} as T);
    });

    return documents;
  }

  async delete(id: string): Promise<void> {
    await this.db.doc(id).delete();
  }
}
