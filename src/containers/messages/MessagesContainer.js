import { useState, useEffect } from 'react'
import { getMessages, postMessage, likePost, likeReply } from '../../firebase'
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

===================================================================================
Frontend fagrrupe 8 April 2021
-----------------------------------------------------------------------------------
Endringer siden forrige møte:
Vi bruker IndextedDb via dexie biblioteket, se repository file, denne er påbegynt,
men ikke ferdigstilt.  Her snakker vi PWA teknikker...

Det er lagt til litt mer form og farge, vha styled components, men det var ikke mange 
linjene som skulle til..

[ ] Du må kunne poste en ny melding, du må ha komponent med 
    inputfelt og ok knapp.  Ok knappen må ha en onClick event, som kaller lagre metoden.
    Hva er forskjellen på onClick={doStuff} og onClick={() => doStuff()}
    Kanskje du bør hente data på nytt? Hvordan settes datoen til ISOstring
    Google kan sikkert gi svar på alt dette...
    Må du fikse noe i repository for å legge til melding ???
[ ] Du vise hvem som har laika, og den skal kunne toggles. Dvs klikk på "3 likes"
    skal vise på linjen under, liste over alle personenen som har laika.
    Kanskje du trenger en ny state?
    Kanskje det lureste er å begynne med å vise begge først, før du bruker state til å toggle..
[ ] Du må kunne laike en melding, (se repo, du må fikse metode som lagrer laikene) 
[ ] Du må kunne laike et reply, men fungerer dette slike det er implementert nå??
[ ] Du må kunne svare på en melding (se repo, du må fikse  metode som lagrer reply)

[ ] Blir du tidlig ferdig med dette, kan du jo ta en titt på pålogging.
    Hvordan vil du håndtere state med pålogget. 
    Kanskje en en ny tabell med bare en post som holder på et "fake" oauth token??  
    Må du inn i repository å gjøre noe??  
[ ] Avlogging? Har du en post i en tabell, kan du slette denne.
[ ] Har du metode for å sjekke om du er pålogget i repository, da kan du 
    kanskje ikke vise messages menyen dersom du ikke er pålogget. 
    Da må du styre både routes og meny med hva som skal være tilgjengelig
    

For dem som vil prøve seg på map/sort/reduce
[ ] Hvordan sorterer du meldingene, ideelt skal den som har den nyeste kommentaren, 
    eller den som har nyeste like/eller svar komme først, hvordan skal det løses
    
For dem som syns dette var alt for enkelt
[ ] Skal du kunne ekspandere/minimere replies (toggle)?
[ ] Kanskje du kan legge til filtrering på person, 
    vis kun inlegg fra, kommentert eller likt av
    Du må da ha en filter input et eller annet sted, (header, på toppen av siden??) 

[ ] Vi bruker local IndexedDb for å håndter lokal database.  Det er en av
    teknikkene i progressive web apps.  Kan man intercepte en axios fetch 
    kommando, og hente fra localdb dersom du ikke er online??
    Google.....

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
                        likeReply={likeReply}
                    />
                )
            })}
        </>
    )


}