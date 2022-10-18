import {
  query,
  getDocs,
  collection,
  where,
  FieldValue,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { getFirebaseProjectsClient } from "../../firebaseProjects";
import { ClientFlavor } from "@appjusto/types";
import { documentAs, getDownloadURLByPath } from "./businesses";
import { getDownloadURL, ref } from "firebase/storage";

export type TargetOptions = "inner-page" | "outer-page";

export interface Banner {
  // withId
  id: string;
  // doc fields
  updatedBy: {
    id: string;
    email: string;
    name?: string;
  };
  // ordering: number;
  flavor: ClientFlavor;
  target: TargetOptions;
  pageTitle?: string;
  slug?: string;
  link: string;
  enabled: boolean;
  createdOn: FieldValue;
  updatedOn: FieldValue;
  images?: (string | null)[];
}

// firebase utils
const { storage, db } = getFirebaseProjectsClient();

// fleets
export const getBannerBySlug = async (slug: string) => {
  const q = query(collection(db, "banners"), where("slug", "==", slug));
  return getDocs(q).then(async (snapshot) => {
    if (!snapshot.empty) {
      // const banner = documentAs<Banner>(snapshot.docs[0]);
      const banner = getBannerObject(snapshot.docs);
      const images = [];
      try {
        const imageRef = ref(
          storage,
          `banners/${banner.flavor}/${banner.id}980x980.png`
        );
        const imageUrl = await getDownloadURL(imageRef);
        if (imageUrl) images.push(imageUrl);
      } catch (error) {
        console.error(error);
      }
      return {
        ...banner,
        images,
      };
    } else return null;
  });
};

// formatters
export const getBannerObject = (
  docs: QueryDocumentSnapshot<DocumentData>[]
) => {
  const banners = docs.map((doc) => {
    const docData = doc.data() as Banner;
    return {
      id: doc.id,
      flavor: docData.flavor,
      pageTitle: docData.pageTitle,
      link: docData.link,
    };
  });
  if (banners) return banners[0];
  else return null;
};

// export const getDownloadURLByPath = (path: string, resultHandler: (url: string | null) => void) => {
//   const imageRef = ref(storage, path);
//   getDownloadURL(imageRef).then(uri => {
//     if(!uri || uri === 'not_found') resultHandler(null);
//     else resultHandler(uri);
//   });
// };

// formatters
// export const getBusinessObject = (docs: QueryDocumentSnapshot<DocumentData>[]) => {
//   const businesses = docs.map(doc => {
//     const docData = doc.data() as Business;
//     return {
//       id: doc.id,
//       cnpj: docData.cnpj,
//       name: docData.name,
//       cuisine: docData.cuisine,
//       description: docData.description,
//       phone: docData.phone,
//       slug: docData.slug,
//       businessAddress: docData.businessAddress,
//       schedules: docData.schedules,
//     }
//   });
//   if(businesses) return businesses[0];
//   else return null;
// };
