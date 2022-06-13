import { Business, Category, Complement, ComplementGroup, FirebaseDocument, Fleet, Ordering, Product, WithId } from "../types";
import { DocumentData, QueryDocumentSnapshot, query, getDocs, collection, doc, getDoc, where, orderBy } from 'firebase/firestore';
import { getFirebaseProjectsClient } from "../../firebaseProjects";
import { getDownloadURL, ref } from 'firebase/storage'

// firebase utils
const { storage, db } = getFirebaseProjectsClient();

// fleets
export const getFleet = async (fleetId: string) => {
  const fleetRef = doc(db, 'fleets', fleetId);
  return getDoc(fleetRef).then((snapshot) => {
    if(snapshot.exists) {
      const fleet = snapshot.data() as Fleet;
      return {
        name: fleet.name,
        minimumFee: fleet.minimumFee,
        distanceThreshold: fleet.distanceThreshold,
        additionalPerKmAfterThreshold: fleet.additionalPerKmAfterThreshold,
        maxDistance: fleet.maxDistance,
        maxDistanceToOrigin: fleet.maxDistanceToOrigin,
      };
    } else return null;
  });
};

// business
export const getBusinessBySlug = async (slug: string) => {
  const q = query(collection(db, 'businesses'), where('slug', '==', slug));
  return getDocs(q).then((snapshot) => {
    if(!snapshot.empty) return getBusinessObject(snapshot.docs);
    else return null;
  })
}

export const getBusinessByCode = async (code: string) => {
  const q = query(collection(db, 'businesses'), where('code', '==', code));
  return getDocs(q).then((snapshot) => {
    if(!snapshot.empty) return getBusinessObject(snapshot.docs);
    else return null;
  })
}

export const getBusinessesSlugs = async () => {
  const q = query(collection(db, 'businesses'), orderBy('slug'));
  return await getDocs(q).then((res) => {
    if(!res.empty) {
      const slugs = getBusinessesObject(res.docs).map((business) => business.slug);
      return slugs;
    }
    return [];
  })
}

// products
export const getBusinessProduct = async (businessId: string, productId: string) => {
const productRef = doc(db, "businesses", businessId, 'products', productId);
  return getDoc(productRef).then((snapshot) => {
    if(snapshot.exists) return getProductObject(snapshot.id, snapshot.data());
    else return null;
  })
}

export const getDownloadURLByPath = (path: string, resultHandler: (url: string | null) => void) => {
  const imageRef = ref(storage, path);
  getDownloadURL(imageRef).then(uri => {
    if(!uri || uri === 'not_found') resultHandler(null);
    else resultHandler(uri);
  });
};


export const getBusinessCategories = async (businessId: string) => {
  const subcollectionRef = collection(db, "businesses", businessId, 'categories');
  return getDocs(subcollectionRef).then((snapshot) => {
    if(!snapshot.empty) {
      return getCategoriesObjects(snapshot.docs);
    } else return [];
  });
};

export const getBusinessProducts = async (businessId: string) => {
  const subcollectionRef = collection(db, "businesses", businessId, 'products');
  return getDocs(subcollectionRef).then((snapshot) => {
    if(!snapshot.empty) {
      return getProductsObjects(snapshot.docs);
    } else return [];
  });
};

export const getBusinessMenuOrdering = async (businessId: string) => {
  const docRef = doc(db, 'businesses', businessId, 'menu', 'default');
  return getDoc(docRef).then((data) => data.data());
};

export const getBusinessComplementsGroups = async (businessId: string) => {
  const subcollectionRef = collection(db, "businesses", businessId, 'complementsgroups');
  return getDocs(subcollectionRef).then((snapshot) => {
    if(!snapshot.empty) {
      return getGroupsObjects(snapshot.docs);
    } else return [];
  });
};

export const getBusinessComplements = async (businessId: string) => {
  const subcollectionRef = collection(db, "businesses", businessId, 'complements');
  return getDocs(subcollectionRef).then((snapshot) => {
    if(!snapshot.empty) {
      return getComplementsObjects(snapshot.docs);
    } else return [];
  });
};

export const getBusinessComplementsOrdering = async (businessId: string) => {
  const docRef = doc(db, 'businesses', businessId, 'menu', 'complements');
  return getDoc(docRef).then((data) => data.data());
};

// formatters
export const getBusinessObject = (docs: QueryDocumentSnapshot<DocumentData>[]) => {
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

export const getBusinessesObject = (docs: QueryDocumentSnapshot<DocumentData>[]) => {
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
