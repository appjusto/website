import React from 'react';
import { getFirebaseProjectsClient } from '../../firebaseProjects';
import { Complement, ComplementGroup, Ordering, WithId } from '../types';
import { getComplementsObjects, getGroupsObjects, getOrderedCategories } from '../utils/businesses';

export const useComplementsGroups = (businessId?: string, productId?: string) => {
  // state
  const [unorderedGroups, setUnorderedGroups] = React.useState<WithId<ComplementGroup>[] | null>();
  const [complements, setComplements] = React.useState<WithId<Complement>[] | null>();
  const [ordering, setOrdering] = React.useState<Ordering | null>();
  const [groups, setGroups] = React.useState<WithId<ComplementGroup>[]>();
  // side effects
  React.useEffect(() => {
    if(!businessId || !productId) return;
    (async () => {
      const { db } = await getFirebaseProjectsClient();
      db.collection('businesses').doc(businessId).collection('complementsgroups').onSnapshot((snapshot) => {
        if(!snapshot.empty) setUnorderedGroups(getGroupsObjects(snapshot.docs));
        else setUnorderedGroups(null);
      });
      db.collection('businesses').doc(businessId).collection('complements').onSnapshot((snapshot) => {
        if(!snapshot.empty) setComplements(getComplementsObjects(snapshot.docs));
        else setComplements(null);
      });
      db.collection('businesses').doc(businessId).collection('menu').doc('complements').onSnapshot((snapshot) => {
        if(snapshot.exists) setOrdering(snapshot.data() as Ordering);
        else setOrdering(null);
      });
    })();
  }, [businessId, productId]);
  React.useEffect(()=> {
    if(!unorderedGroups || !complements || !ordering) return;
    const orderedGroups = getOrderedCategories<ComplementGroup, Complement>(unorderedGroups, complements, ordering);
    setGroups(orderedGroups);
  }, [unorderedGroups, complements, ordering])
  return groups;
}
