import { useOutletContext, useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();
    const [contacts, setContacts] = useOutletContext();
    return ( 
        <>
            <h2>Home</h2>
            <button onClick={() => navigate(`/form/0?mode=ajouter`)}>
                Ajouter un contact
            </button>
            {contacts.map((element) => 
                <div key={element.id}>
                    <p>{element.nom}</p>
                    <p>{element.prenom}</p>
                    <p>{element.email}</p>
                    <p>{element.telephone}</p>
                    <button onClick={() => navigate(`/form/${element.id}?mode=modifier`)}>
                        Modifier
                    </button>
                    <button onClick={() => navigate(`/form/${element.id}?mode=supprimer`)}>
                        Supprimer
                    </button>
                </div>
            )}
        </>
     );
}

export default Home;