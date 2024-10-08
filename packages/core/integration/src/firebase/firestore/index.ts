import firebase, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type FirestoreDocument = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  [key: string]: any;
};

type BaseCollection = (
  firebase: FirebaseFirestoreTypes.Module,
) => FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

export class FirestoreRepository<T extends FirestoreDocument> {
  db: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

  constructor(collection: BaseCollection) {
    this.db = collection(firebase());
  }

  generateId(): string {
    return this.db.doc().id;
  }

  async save(document: T): Promise<T> {
    document.createdAt = new Date();

    if (!document.id) {
      document.id = this.generateId();
    }

    const newDocument = this.deleteUndefinedValues(document);

    await this.db.doc(document.id).set(newDocument);
    return document;
  }

  deleteUndefinedValues(obj: T): T {
    for (const key in obj) {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  }

  async update(document: T): Promise<void> {
    document.updatedAt = new Date();
    const newDocument = this.deleteUndefinedValues(document);
    await this.db.doc(document.id).update(newDocument);
  }

  async getById(id: string): Promise<T | undefined> {
    const snapshot = await this.db.doc(id).get();

    if (snapshot.exists) {
      return {id: snapshot.id, ...snapshot.data()} as T;
    }

    return undefined;
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
