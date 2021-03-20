import { useState, useEffect } from 'react'
import { getMessages, postMessage, likePost } from '../../firebase'
import { MessageComponent } from './Components/MessageComponent'

/*
Frontend fagrrupe 12 mars 2021

TODOS: 
[x] Dette er en container, du trenger flere componenter til å presentere en melding, respons og likes lag disse
[x] Disse kompoenentene må du lage som styled components 
[x] Hvor skal disse ligge (underkataloger eller globale)
[x] For å presentere meldingene må du ha en slik struktur som dette: 
   {messages && messages.map(message => {
                return ( .. kompoenenter her)
    }
[x] Husk at du skal du fikse ukjent antall replies også

[X] Du må vise antall likes

[ ] Du må kunne poste en ny melding
[ ] Du vise hvem som like't, og den skal kunne toggles 
[ ] Du må kunne like en melding, (se repo, du må fikse metode som lagrer like) 
[ ] Du må kunne svare på en melding (se repo, du må fikse  metode som lagrer reply)

For dem som vil prøve seg på map/sort/reduce
[ ] Hvordan sorterer du meldingene, ideelt skal den som har den nyeste kommentaren, 
    eller den som har nyeste like/eller svar komme først, hvordan skal det løses

For dem som syns dette var alt for enkelt
[ ] Skal du kunne ekspandere/minimere replies (toggle)?
[ ] Kanskje du kan legge til filtrering på person, 
    vis kun inlegg fra, kommentert eller likt av
    Du må da ha en filter input et eller annet sted, (header, på toppen av siden??) 

[ ] Du kan jo prøve å lage til en reducer for håndtering av state?

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
            Vi har {messages.length} melding(er).

            {messages && messages.map(message => {
                return (
                    <MessageComponent
                        message={message}
                        likePost={likePost}
                    />
                )
            })}
        </>
    )


}