import { openDB, uuid } from 'idb';
import { async } from 'q';

const db = () => {
  if (!("indexedDB" in window)) {
    throw new Error("Browser does not support IndexedDB");
  }

  return openDB('vuex_project_db', 1, {
    upgrade(db) {
      db.createObjectStore('posts');
    }
  })
}

const create = async (storeName, post) => {
  try {
    const dbPromise = await db();
    const date = new Date();
    const data = {
      "data": post,
      "created_date": date.toString()
    }
    const transaction = dbPromise.transaction(storeName, 'readwrite');
    transaction.objectStore(storeName).put(JSON.stringify(data), post);
    return transaction.complete;
  } catch (error) {
    throw new Error(`Error During Storing Data With Error Message ${error}`);
  }
}

const findAll = async (storeName) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName);
    const items = transaction.objectStore(storeName).getAll();
    return items
  } catch (error) {
    throw new Error(`Error During Getting All Data With Error Message ${error}`);
  }
}

const deleteAll = async (storeName) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName, 'readwrite');
    const items = transaction.objectStore(storeName).getAllKeys();
    items.then(data => {
      data.forEach(key => {
        transaction.objectStore(storeName).delete(key)
      })
    })
  }
  catch (error) {
    throw new Error(`Error During Remove All Data With Error Message ${error}`)
  }
}

const deleteByKey = async (storeName, key) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName, 'readwrite')
    transaction.objectStore(storeName).delete(key)
  } catch (error) {
    throw new Error(`Error During Delete By Key With Error Message ${error}`)
  }
}

export default {
  create,
  findAll,
  deleteAll,
  deleteByKey
}