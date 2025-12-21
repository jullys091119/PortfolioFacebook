import { db } from "./firebase.js";
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

export async function setProjects() {
    const docRef = await addDoc(collection(db, "proyectos"),
        {
            titulo: "Proyecto uno",
            descripcion: "Contador básico para demostrar manejo de eventos",
            image: "https://...",
            links: "",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            destacado: true,
            fechaCreacion: "",
            comentarios: [
                {
                    usuario: "A",
                    texto: "Buen proyecto",
                    fecha: ""
                }
            ]
        }

    );
    console.log("Document written with ID: ", docRef.id);
}

export async function addComments(texto, projectId) {
    await addDoc(
        collection(db, "comentarios", projectId, "comments"),
        {
            texto,
            usuario: "Anon",
            fecha: serverTimestamp()
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