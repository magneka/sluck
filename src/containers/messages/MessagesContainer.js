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
[x] Du må ha komponenter der du skal kunne like en melding
[ ] Du må ha komponenter der du skal kunne svare på en melding
[ ] I utgangspunktet vises antall likes, men man skal også kunne se hvem

For dem som vil prøve seg på map/sort/reduce
[ ] Hvordan sorterer du meldingene, ideelt skal den som har den nyeste kommentaren, 
    eller den som har nyeste like/eller svar komme først, hvordan skal det løses

For dem som syns dette var alt for enkelt
[ ] Hvordan skal du løse oppfriske meldinger ?
[ ] Skal du kunne ekspandere/minimere replies ?
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