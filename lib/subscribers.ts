/**
 * Módulo de gestión de suscriptores usando JSON en memoria.
 */
type Subscriber = {
  name: string;
  email: string;
  profession: string;
  interests: string[];
};

const db: Subscriber[] = [];

export async function addSubscriber(sub: Subscriber) {
  db.push(sub);
}

export async function getAllSubscribers() {
  return db;
}
