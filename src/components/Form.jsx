/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import {useParams, useSearchParams, useNavigate} from "react-router-dom"

import { useOutletContext } from "react-router-dom";

function Form() {

    const navigate = useNavigate();

    const [contacts, setContacts] = useOutletContext();

    const [singleContact, setSingleContact] = useState({
        id: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
    });
    
    const { monparams } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get("mode") ?? "ajouter"

    const contactIndex = contacts.findIndex((element) => element.id === Number(monparams));

    useEffect(() => {
        setSingleContact(contacts[contactIndex]);
    }, [contacts, contactIndex]);

    const inputNom = useRef();
    const inputPrenom = useRef();
    const inputEmail = useRef();
    const inputTelephone = useRef();
  
    const addNewContact = (event) => {
        event.preventDefault();
        setContacts([...contacts, {
            id: uuidv4(),
            nom: inputNom.current.value,
            prenom: inputPrenom.current.value,
            email: inputEmail.current.value,
            telephone: inputTelephone.current.value
      }])
      navigate("/");
    }

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setSingleContact({ ...singleContact, [id]: value })
    }

    const updateContact = (event) => {
        event.preventDefault();
        const contactIndex = contacts.findIndex((element) => element.id === Number(monparams))

        if (contactIndex != -1) {
            const copyContacts = [...contacts]
            copyContacts[contactIndex] = singleContact;
            setContacts(copyContacts)
        }
        navigate("/");
    }

    const removeContact = (event) => {
        event.preventDefault();
        const contactIndex = contacts.findIndex((element) => element.id === Number(monparams))
        console.log(contactIndex);

        if (contactIndex != -1) {
            const copyContacts = [...contacts]
            console.log(copyContacts);
            const newContacts = copyContacts.filter(element => element.id !== Number(monparams))
            console.log(newContacts);
            setContacts(newContacts)
        }
        navigate("/");
    }

    if (mode === "modifier") {
        return ( 
            <form onSubmit={updateContact} >
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" ref={inputNom} value={singleContact.nom} onInput={handleInputChange} />
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" ref={inputPrenom} value={singleContact.prenom} onInput={handleInputChange}/>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={inputEmail} value={singleContact.email} onInput={handleInputChange}/>
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" ref={inputTelephone} value={singleContact.telephone} onInput={handleInputChange}/>
              <button type="submit">Modifier</button>
            </form>
         );
    }
    if (mode === "supprimer") {
    return ( 
        <form onSubmit={removeContact} >
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" value={singleContact.nom} readOnly/>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" value={singleContact.prenom} readOnly/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={singleContact.email} readOnly/>
          <label htmlFor="telephone">Téléphone</label>
          <input type="tel" id="telephone" value={singleContact.telephone} readOnly/>
          <button type="submit">Supprimer</button>
        </form>
     );
    }

    if (mode === "ajouter") {
        return (
            <form onSubmit={addNewContact}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" ref={inputNom} />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" ref={inputPrenom}  />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={inputEmail} />
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" ref={inputTelephone} />
                <button type="submit">Ajouter</button>
            </form>
        )
    }
    
}

export default Form;