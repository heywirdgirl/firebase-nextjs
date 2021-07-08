import { firestore } from "./firebase";

const getUsers = async () => {
  const snapshot = await firestore.collection("*").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getUsers };