import { openDB, uuid } from 'idb';

const db = () => {
  if (!("indexedDB" in window)) {
    throw new Error("Browser does not support IndexedDB");
  }

  return openDB('vuex_project_db', 1, {
    upgrade(db) {
      const posts_collection = db.createObjectStore('posts');
      posts_collection.createIndex('post', 'created_at');
    }
  })
}

const create = async (storeName, post) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName, 'readwrite');
    transaction.objectStore(storeName).put(post, post);
    return transaction.complete;
  } catch (error) {
    throw new Error(`Error During Storing Data With Error Message ${error}`);
  }
}

const findAll = async (storeName) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName);
    const items = transaction.objectStore(storeName).getAll()
    return items
  } catch (error) {
    throw new Error(`Error During Getting All Data With Error Message ${error}`);
  }
}

const deleteAll = async (storeName) => {
  try {
    const dbPromise = await db();
    const transaction = dbPromise.transaction(storeName, 'readwrite');
    const items = transaction.objectStore(storeName).getAllKeys()
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

export default {
  create,
  findAll,
  deleteAll
}