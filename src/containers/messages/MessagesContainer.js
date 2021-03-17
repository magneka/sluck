import { useState, useEffect } from 'react'
import { getMessages, postMessage } from '../../firebase'

/*
Frontend fagrrupe 12 mars 2021

TODOS: 
[ ] Dette er en container, du trenger flere componenter til å presentere en melding, respons og likes lag disse
[ ] Disse kompoenentene må du lage som styled components 
[ ] Hvor skal disse ligge (underkataloger eller globale)
[ ] For å presentere meldingene må du ha en slik struktur som dette: 
   {messages && messages.map(message => {
                return ( .. kompoenenter her)
    }
[ ] Husk at du skal du fikse ukjent antall replies også
[ ] Du må ha komponenter der du skal kunne like en melding
[ ] Du må ha komponenter der du skal kunne svare på en melding
[ ] I utgangspunktet vises antall likes, men man skal også kunne se hvem

For dem som vil prøve seg på map/sort/reduce
[ ] Hvordan sorterer du meldingene, ideelt skal den som har den nyeste kommentaren, 
    eller den som har nyeste like/eller svar komme først, hvordan skal det løses

For dem som syns dette var alt for enkelt
[ ] Kanskje du kan legge til filtrering på person, 
    vis kun inlegg fra, kommentert eller likt av
    Du må da ha en filter input et eller annet sted, (header, på toppen av siden??) 

For dem som er noe så inni he#$#% expert.... 
[ ] Lag dark mode og ligth mode på stylingen
    
*/

export const MessagesContainer = () => {

    const [messages, setMessages] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        // Send inn setMessages funksjon, vil fungere dersom firebase har nye poster
        getMessages(setMessages);
    }, [])

    if (error) {
        return (
            <>
                {error}
            </>
        )
    }

    return (
        <>
            her skal meldingene komme
        </>
    )


}