import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getDataFromFirestore = async (collectionId, docId) => {
  try {
    const studentRef = doc(db, collectionId, docId);
    const docSnap = await getDoc(studentRef);

    if (docSnap.exists()) {
      return docSnap.data(); // returns student data
    } else {
      console.log(`No such document "${docId}" in collection "${collectionId}"!`);
      return null;
    }
  } catch (e) {
    console.error(`Error getting document "${docId}" in collection "${collectionId}":`, e);
    return null;
  }
};