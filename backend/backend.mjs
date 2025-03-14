import PocketBase from 'pocketbase';
const pb = new PocketBase('https://scifistival.noah-barret.fr:443');

export { pb };

export async function getAllFilmsSorted() {
    let records = await pb.collection('films').getFullList({
        sort: 'date_projection',
        expand: 'invites',
    });
    records = records.map((record) => {
        record.imageUrl = pb.files.getURL(record, record.affiche);
        return record;
    })
    return records;
}

export async function getAllActivitiesSorted() {
    let records = await pb.collection('activites').getFullList({
        sort: 'date',
        expand: 'invites',
    });

    records = records.map((record) => {
        record.imageUrl = pb.files.getUrl(record, record.image);
        record.inviteName = record.expand?.invite 
        return record;
    });

    return records;
}
export async function getAllGuestsSorted() {
    let records = await pb.collection('invites').getFullList({
        sort: 'nom',
    });

    records = records.map((record) => {
        return {
            ...record,
            photoUrl: record.photo ? pb.files.getUrl(record, record.photo) : '/default-avatar.jpg',
        };
    });

    return records;
}

export async function getFilmById(id) {
    const record = await pb.collection('films').getOne(id);
    return record;
}

export async function getActivityById(id) {
    const record = await pb.collection('activites').getOne(id);
    record.imageUrl = pb.files.getUrl(record, record.image);
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

