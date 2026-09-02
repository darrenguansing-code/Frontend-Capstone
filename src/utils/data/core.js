export const STORAGE_KEY = "adminData-v2";
export const STORAGE_EVENT = "adminDataChanged";

export function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

export function writeStore(patch) {
  const next = { ...readStore(), ...patch };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(STORAGE_EVENT));
  return next;
}

export function subscribe(callback) {
  const onStorage = () => callback(readStore());
  window.addEventListener(STORAGE_EVENT, onStorage);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(STORAGE_EVENT, onStorage);
    window.removeEventListener("storage", onStorage);
  };
}
