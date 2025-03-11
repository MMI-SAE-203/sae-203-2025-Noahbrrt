import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getAllFilmsSorted() {
    const records = await pb.collection('films').getFullList({
        sort: 'date_projection'
    });
    return records;
}

export async function getAllActivitiesSorted() {
    const records = await pb.collection('activites').getFullList({
        sort: 'date'
    });
    return records;
}

export async function getAllGuestsSorted() {
    const records = await pb.collection('invites').getFullList({
        sort: 'nom'
    });
    return records;
}

export async function getFilmById(id) {
    const record = await pb.collection('films').getOne(id);
    return record;
}

export async function getActivityById(id) {
    const record = await pb.collection('activites').getOne(id);
    return record;
}

export async function getGuestById(id) {
    const record = await pb.collection('invites').getOne(id);
    return record;
}

export async function getActivitiesByGuestId(guestId) {
    const records = await pb.collection('activites').getFullList({
        filter: `invites = "${guestId}"`
    });
    return records;
}

export async function getActivitiesByGuestName(nom) {
    const guest = await pb.collection('invites').getFirstListItem(`nom = "${nom}"`);
    const records = await pb.collection('activites').getFullList({
        filter: `invites = "${guest.id}"`
    });
    return records;
}

export async function addFilm(data) {
    const record = await pb.collection('films').create(data);
    return record;
}

export async function updateFilm(id, data) {
    const record = await pb.collection('films').update(id, data);
    return record;
}

export async function addActivity(data) {
    const record = await pb.collection('activites').create(data);
    return record;
}

export async function updateActivity(id, data) {
    const record = await pb.collection('activites').update(id, data);
    return record;
}

export async function addGuest(data) {
    const record = await pb.collection('invites').create(data);
    return record;
}

export async function updateGuest(id, data) {
    const record = await pb.collection('invites').update(id, data);
    return record;
}