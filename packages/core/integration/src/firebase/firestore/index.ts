import firebase from "@react-native-firebase/firestore";

export type FirestoreDocument = {
  id: string;
  [key: string]: any;
};

export class FirestoreRepository<T extends FirestoreDocument> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  db() {
    return firebase().collection(this.collectionName);
  }

  async filter() {
    return firebase().collection(this.collectionName);
  }

  async save(document: T): Promise<void> {
    await this.db().doc(document.id).set(document);
  }

  async update(document: T): Promise<void> {
    await this.db().doc(document.id).update(document);
  }

  async getById(id: string): Promise<T | null> {
    const snapshot = await this.db().doc(id).get();

    if (snapshot.exists) {
      return {id: snapshot.id, ...snapshot.data()} as T;
    }

    return null;
  }

  async getAll(): Promise<T[]> {
    const querySnapshot = await this.db().get();

    const documents: T[] = [];

    querySnapshot.forEach(doc => {
      documents.push({id: doc.id, ...doc.data()} as T);
    });

    return documents;
  }

  async delete(id: string): Promise<void> {
    await firebase().collection(this.collectionName).doc(id).delete();
  }
}
