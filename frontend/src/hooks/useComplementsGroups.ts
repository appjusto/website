import React from 'react';
import { getFirebaseProjectsClient } from '../../firebaseProjects';
import { Complement, ComplementGroup, Ordering, WithId } from '../types';
import { getComplementsObjects, getGroupsObjects, getOrderedCategories } from '../utils/businesses';

export const useComplementsGroups = (businessId?: string, productId?: string) => {
  // state
  const [groups, setGroups] = React.useState<WithId<ComplementGroup>[]>();
  // side effects
  React.useEffect(() => {
    if(!businessId || !productId) return;
    (async () => {
      const { db } = await getFirebaseProjectsClient();
      const unorderedGroups = await db.collection('businesses').doc(businessId).collection('complementsgroups').get().then((data) => getGroupsObjects(data.docs));
      const complements = await db.collection('businesses').doc(businessId).collection('complements').get().then((data) => getComplementsObjects(data.docs));
      const ordering = await db.collection('businesses').doc(businessId).collection('menu').doc('complements').get().then((data) => data.data()) as Ordering;
      const orderedGroups = getOrderedCategories<ComplementGroup, Complement>(unorderedGroups, complements, ordering);
      setGroups(orderedGroups);
    })();
  }, [businessId, productId]);
  return groups;
}
