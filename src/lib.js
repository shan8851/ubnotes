import { doc, deleteDoc, addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config";

const notesCollectionRef = collection(db, 'notes');

export const createNote = async (data) => {
  await addDoc(notesCollectionRef, data);
};

export const updateNote = async (id, data) => {
  const noteDoc = doc(db, 'notes', id)
  const newFields = {
    alias: data.alias,
    stakes: data.stakes,
    notes: data.notes,
    tag: data.tag
  }
  await updateDoc(noteDoc, newFields);
};

export const deleteNote = async (id) => {
  const noteDoc = doc(db, 'notes', id)
  await deleteDoc(noteDoc)
}

