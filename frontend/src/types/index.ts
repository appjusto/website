import firebase from 'firebase/app';

export type FirebaseDocument =
  | firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
  | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;

export type WithId<T extends object> = T & {
  id: string;
};

export type FleetSituation = 'pending' | 'approved' | 'rejected' | 'blocked';

export interface FleetFareParams {
  minimumFee: number; // (in cents) minimum fee charged by couriers
  distanceThreshold: number; // (in meters) distanced covered by the minimumFee
  additionalPerKmAfterThreshold: number; // (in cents) fee charged every km after distanceThreshold
  maxDistance: number; // (in meters) maximum trip distance
  maxDistanceToOrigin: number; // (in meters) maximum distance to the pickup place
}

export interface FleetDetails extends FleetFareParams {
  name: string;
  description: string;
  // metadata
  createdOn: any;
  createdBy?: string;
}

export interface Fleet extends FleetDetails {
  situation: FleetSituation;
  participantsOnline: number;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export type ProfileSituation =
  | 'pending'
  | 'submitted'
  | 'verified'
  | 'invalid'
  | 'approved'
  | 'rejected'
  | 'blocked'
  | 'deleted';

export interface Cuisine {
  name: string;
  imagePath?: string;
  order?: number;
}

export interface BusinessAddress {
  cep: string;
  address: string;
  number?: string;
  additional?: string;
  city: string;
  state: string;
  latlng?: LatLng;
}

export interface BusinessStatistics {
  totalOrders: number;
  averagePreparationTime: number; // in seconds
  averageTicketPrice: number;
  averageWaitingTime: number;
}

export type BusinessType = 'restaurant';
export type BusinessStatus = 'open' | 'closed';

export type ScheduleObject = {
  day: string;
  checked: boolean;
  schedule: { from: string; to: string }[];
};
export type BusinessSchedule = ScheduleObject[];

export interface Business {
  type: BusinessType;
  code?: string;
  name?: string;
  companyName?: string;
  cnpj?: string;
  phone?: string;
  managers?: string[]; // emails
  businessAddress?: BusinessAddress;
  status: BusinessStatus;
  situation: ProfileSituation;
  enabled: boolean;
  profileIssues?: string[];
  profileIssuesMessage?: string;
  cuisine?: string; // cuisine's name
  description?: string;
  minimumOrder?: number; // in cents
  averageCookingTime?: number; // in seconds
  orderAcceptanceTime?: number | null; // in seconds
  deliveryRange?: number; // in meters
  statistics?: BusinessStatistics;
  onboarding?: string;
  logoExists: boolean;
  coverImageExists: boolean;
  schedules: BusinessSchedule;
  orderPrinting?: boolean;
  slug?: string;
}

export interface PartialBusiness {
  id: string;
  cnpj: string;
  name: string;
  cuisine: string;
  description: string;
  businessAddress: BusinessAddress;
  schedules: BusinessSchedule;
  logoUrl?: string;
  coverUrl?: string;
}

export interface Ordering {
  firstLevelIds: string[];
  secondLevelIdsByFirstLevelId: {
    [firstLevelId: string]: string[];
  };
}

export interface Product {
  name: string;
  description?: string;
  imageExists?: boolean;
  price: number;
  externalId?: string;
  enabled: boolean;
  classifications?: string[];
  complementsEnabled?: boolean;
  complementsGroupsIds?: string[];
  //statistics?: ProductStatistics;
  availability?: BusinessSchedule;
  // transient
  //complementsGroups?: WithId<ComplementGroup>[];
}

export interface Category {
  name: string;
  enabled: boolean;
  // transient
  items?: WithId<Product>[];
}

export interface ComplementGroup {
  name: string;
  required: boolean;
  minimum: number;
  maximum: number;
  enabled?: boolean;
  // transient
  items?: WithId<Complement>[];
}

export interface Complement {
  imageExists?: boolean;
  name: string;
  description?: string;
  price: number;
  maximum?: number;
  enabled?: boolean;
  externalId?: string;
}

