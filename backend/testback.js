import { getAllFilmsSorted, getAllActivitiesSorted, getAllGuestsSorted, getFilmById, getActivityById, getGuestById, getActivitiesByGuestId, getActivitiesByGuestName, addFilm, updateFilm, addActivity, updateActivity, 
    addGuest, updateGuest } from './backend.mjs';
/*
try {
    const films = await getAllFilmsSorted();
    console.table(films);
} catch (e) {
    console.error(e);
} 

try {
    const activities = await getAllActivitiesSorted();
    console.table(activities);
} catch (e) {
    console.error(e);
}

try {
    const guests = await getAllGuestsSorted();
    console.table(guests);
} catch (e) {
    console.error(e);
}

try {
    const film = await getFilmById('1nytm42oyw6b3sm');
    console.log(film);
} catch (e) {
    console.error(e);
}

try {
    const activity = await getActivityById('678dhq6py00u7zs');
    console.log(activity);
} catch (e) {
    console.error(e);
} 

    try {
        const guest = await getGuestById('z7a8r9njtcm3s9w');
        console.log(guest);
    } catch (e) {
        console.error(e);
    } 

        try {
            const activities = await getActivitiesByGuestId('z26c25mt86idgy5');
            console.table(activities);
        } catch (e) {
            console.error(e);
        } 

            try {
                const activities = await getActivitiesByGuestName('Reeves');
                console.table(activities);
            } catch (e) {
                console.error(e);
            } 

                try {
                    const newFilm = await addFilm({ titre: "Nouveau Film", annee_sortie: 2025, genre: "Science-fiction" });
                    console.log(newFilm);
                } catch (e) {
                    console.error(e);
                } 
    
                    try {
                        const updatedFilm = await updateFilm('2h65i003b3fib7z', { titre: "Film Modifié" });
                        console.log(updatedFilm);
                    } catch (e) {
                        console.error(e);
                    } 

                        try {
                            const newActivity = await addActivity({ type: "Atelier", description: "Atelier SF" });
                            console.log(newActivity);
                        } catch (e) {
                            console.error(e);
                        }

                            try {
                                const updatedActivity = await updateActivity('381ui325q0t24w5', { description: "Nouvelle description" });
                                console.log(updatedActivity);
                            } catch (e) {
                                console.error(e);
                            }
                            
                            
                            try {
                                const newGuest = await addGuest({ nom: "Nouveau", prenom: "Invité", role: "Acteur" });
                                console.log(newGuest);
                            } catch (e) {
                                console.error(e);
                            }
                            
                            
                            try {
                                const updatedGuest = await updateGuest('z26c25mt86idgy5', { role: "Réalisateur" });
                                console.log(updatedGuest);
                            } catch (e) {
                                console.error(e);
                            } */