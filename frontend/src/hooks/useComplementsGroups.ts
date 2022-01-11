import React from 'react';
import { getFirebaseProjectsClient } from '../../firebaseProjects';
import { Complement, ComplementGroup, Ordering, WithId } from '../types';
import { getComplementsObjects, getGroupsObjects, getOrderedCategories } from '../utils/businesses';

export const useComplementsGroups = (businessId?: string, productId?: string, groupsIds?: string[]) => {
  console.log('useComplementsGroups', businessId, productId, groupsIds)
  // state
  const [unorderedGroups, setUnorderedGroups] = React.useState<WithId<ComplementGroup>[] | null>();
  const [complements, setComplements] = React.useState<WithId<Complement>[] | null>();
  const [ordering, setOrdering] = React.useState<Ordering | null>();
  const [groups, setGroups] = React.useState<WithId<ComplementGroup>[] | null>();
  const [sortedGroups, setSortedGroups] = React.useState<WithId<ComplementGroup>[] | null>();
  console.log('unorderedGroups', unorderedGroups);
  console.log('complements', complements);
  console.log('ordering', ordering);
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
    if(unorderedGroups === null || complements === null || ordering === null) {
      setGroups([]);
      return;
    };
    if(!unorderedGroups || !complements || !ordering) return;
    const orderedGroups = getOrderedCategories<ComplementGroup, Complement>(unorderedGroups, complements, ordering);
    setGroups(orderedGroups);
  }, [unorderedGroups, complements, ordering]);
  React.useEffect(() => {
    if(!groupsIds || !groups) {
      setSortedGroups(null);
      return;
    };
    setSortedGroups(groups.filter(group => groupsIds.includes(group.id)));
  }, [groupsIds, groups]);
  return sortedGroups;
}
