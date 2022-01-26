import { Business, Category, Complement, ComplementGroup, Ordering, Product, WithId } from "../types";
import firebase from 'firebase/app';
import { getFirebaseProjectsClient } from "../../firebaseProjects";

export type FirebaseDocument =
  | firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;

export const getBusinessObject = (docs: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]) => {
  const businesses = docs.map(doc => {
    const docData = doc.data() as Business;
    return {
      id: doc.id,
      cnpj: docData.cnpj,
      name: docData.name,
      cuisine: docData.cuisine,
      description: docData.description,
      phone: docData.phone,
      slug: docData.slug,
      businessAddress: docData.businessAddress,
      schedules: docData.schedules,
    }
  });
  if(businesses) return businesses[0];
  else return null;
};

export const getBusinessesObject = (docs: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]) => {
  const businesses = docs.map(doc => {
    const docData = doc.data() as Business;
    return {
      id: doc.id,
      cnpj: docData.cnpj,
      name: docData.name,
      cuisine: docData.cuisine,
      description: docData.description,
      phone: docData.phone,
      slug: docData.slug,
      businessAddress: docData.businessAddress,
      schedules: docData.schedules,
    }
  });
  if(businesses) return businesses;
  else return null;
};

export const documentAs = <T extends object>(doc: FirebaseDocument): WithId<T> => ({
  ...(doc.data() as T),
  id: doc.id,
});

export const documentsAs = <T extends object>(docs: FirebaseDocument[]): WithId<T>[] =>
  docs.map((doc) => documentAs<T>(doc));

const ordered = <T extends object>(items: WithId<T>[], order: string[]): WithId<T>[] => {
  return items
    .filter((i) => order.indexOf(i.id) !== -1) // filtering out first
    .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};

export const getCategoriesObjects = (docs: FirebaseDocument[]): WithId<Category>[] => {
  return docs.map((item) => {
    const { name, enabled } = item.data();
    return { id: item.id, name, enabled };
  });
};

export const getProductsObjects = (docs: FirebaseDocument[]): WithId<Product>[] => {
  return docs.map((item) => {
    const { name, description, imageExists, price, enabled, complementsGroupsIds } = item.data();
    return {
      id: item.id,
      name,
      description: description ?? '',
      imageExists: imageExists ?? false,
      price,
      enabled,
      complementsGroupsIds: complementsGroupsIds ?? []
    };
  });
};

export const getGroupsObjects = (docs: FirebaseDocument[]): WithId<ComplementGroup>[] => {
  return docs.map((item) => {
    const { name, required, minimum, maximum, enabled } = item.data();
    return { id: item.id, name, required, minimum, maximum, enabled };
  });
};

export const getComplementsObjects = (docs: FirebaseDocument[]): WithId<Complement>[] => {
  return docs.map((item) => {
    const { name, description, imageExists, price, enabled } = item.data();
    return {
      id: item.id,
      name,
      description: description ?? '',
      imageExists: imageExists ?? false,
      price,
      enabled
    };
  });
};

export const getProductObject = (id: string, data: any): WithId<Product> => {
  console.log('Snapshot.data', data);
  const { name, description, imageExists, price, enabled, complementsGroupsIds } = data;
  return { id, name, description, imageExists, price, enabled, complementsGroupsIds: complementsGroupsIds ?? [] };
};

export const getOrderedCategories = <T extends object, T2 extends object>(
  firstLevels: WithId<T>[],
  secondLevels: WithId<T2>[],
  config: Ordering | undefined
) => {
  if (firstLevels.length === 0 || !config) return [];
  const { firstLevelIds, secondLevelIdsByFirstLevelId } = config;
  return ordered(firstLevels, firstLevelIds).map((parent) => {
    if (!secondLevelIdsByFirstLevelId) {
      return {
        ...parent,
        items: [],
      };
    }
    return {
      ...parent,
      items: ordered(secondLevels, secondLevelIdsByFirstLevelId[parent.id]),
    };
  });
};

export const getDownloadURL = async (ref: any) => {
  const uri = await ref
    .getDownloadURL()
    .then((res: string | null) => res)
    .catch(() => 'not_found');
  return uri;
};

export const productFetcher = async (businessId: string, productId: string) => {
  const { db } = await getFirebaseProjectsClient();
  const dbQuery = db.collection('businesses').doc(businessId).collection('products').doc(productId);
  const result = await dbQuery.get().then(snapshot => {
    if(snapshot.exists) return getProductObject(snapshot.id, snapshot.data());
    else return null;
  });
  return result;
}
