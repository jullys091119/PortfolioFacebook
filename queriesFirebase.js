import { setNewProject } from "./admin.js";
import { db } from "./firebase.js";
import {
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    deleteDoc,
    Timestamp,
    setDoc, doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function getPerfilImages() {
    const querySnapshot = await getDocs(collection(db, "perfil"));
    let data;
    querySnapshot.forEach((doc) => {
        data = doc.data()
    });

    return data;
}

export async function getProjects() {
    const querySnapshot = await getDocs(collection(db, "proyectos"));
    let data = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })
    return data;
}

export async function setProjects(titulo, descripcion, destacado, fecha, imagen, link, lenguajeSelected) {
    // 🔒 Blindaje
    if (!(fecha instanceof Date)) {
        console.error("fecha NO es Date:", fecha, typeof fecha);
        return;
    }

    const docRef = await addDoc(collection(db, "proyectos"),
        {
            titulo: titulo,
            descripcion: descripcion,
            image: imagen,
            links: link,
            tecnologias: lenguajeSelected,
            destacado: destacado,
            fechaCreacion: Timestamp.fromDate(fecha),

        }

    );
    console.log("Document written with ID: ", docRef.id);
}

export async function addComments(texto, projectId) {
    console.log(texto)
    await addDoc(
        collection(db, "comentarios", projectId, "comments"),
        {
            texto,
            usuario: "Anon",
            fecha: serverTimestamp(),

        }
    );
}


export async function getComments(idPostComments) {
    const q = query(
        collection(db, "comentarios", idPostComments, "comments"),
        orderBy("fecha", "asc")
    );

    const snapshot = await getDocs(q);

    const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return comments;


}


export async function addLike(postId, userId = "Anon") {
    if (!postId) return;
    await setDoc(doc(db, "posts", postId, "likes", userId), {
        userId,
        fecha: serverTimestamp()
    });
}

export async function removeLike(postId, userId = "Anon") {
    await deleteDoc(doc(db, "posts", postId, "likes", userId));
}


export async function getLikes(postId) {
    const likesCol = collection(db, "posts", postId, "likes");
    const snapshot = await getDocs(likesCol);
    const likes = snapshot.docs.map(doc => doc.data().userId);
    return likes;
}
export default setNewProject
