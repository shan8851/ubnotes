import { doc, deleteDoc, addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const notesCollectionRef = collection(db, 'notes');

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

const colorLookup = {
  whale: 'blue',
  fish: 'green',
  nit: 'red',
  lag: 'cyan',
  passive: 'yellow',
  reg: 'orange',
  goodReg: 'pink',
  badReg: 'lime'
}

export const getLabelColor = (label) => {
  return colorLookup[label]
}
