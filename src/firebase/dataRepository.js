import Dexie from 'dexie';
import { messageList } from './initialData'

/*
Her er det en smak på PWD
Nå bruker vi Dexie som lag oppå IndexedDb
https://dexie.org/
https://dexie.org/docs/

TODO:  
  [ ] Fyll ut likes metoden, se nøye på dokumentasjonen
      https://dexie.org/docs/Table/Table.update()

  [ ] Fikk du til likes? Fyll ut reply metoden på samme måte
      Merk at her må du håndtere ID på reply selv

  [ ] Lag til opplegg for brukere, med seed av bruker/passord
  [ ] Lag til login metode, må du ha en tabell der du husker pålogget??

  [ ] Dersom pålogget fungerer, kan du endre tenke på hvordan du kan 
      bruke pålogget bruker til posting, like og reply

*/

var db = new Dexie("sluckDb");
db.version(1).stores({
    messages: '++id,messageText,fromEmail,date,likes,replies',
    users: '++id,email,fullname'
});


export const seed = () => {

    db.messages.count().then(numMessages => {
        
        console.log(numMessages)

        if (numMessages === 0) {
            messageList.map(message => {
                postMessage(message)
            })
        }
    })    
}

seed()


export const likePost = (message) => {
    console.log(message);

    // TODO her må noko gjerast....
}

export const reply = (message) => {
    console.log(message);

    // TODO her må også noko gjerast....
}

export const likeReply = (message, replyId) => {
    console.log(message);

    // TODO her må også noko gjerast....
}

export const postMessage = (message) => {

    db.messages.put(message).then(function (id) {
        console.log('Record inserted #', id)
    }).catch(function (error) {
        console.log("Ooops: " + error)
    })
}

/**
 * Funksjon for å hente alle rader
 * @param {*} setMessageFunc 
 */
export const getMessages = (setMessageFunc) => {

    // TODO kune du sendt inne både message og error funksjon her??

    db.messages.toArray(
        messageList => setMessageFunc(messageList)
    )
}

//https://prod.liveshare.vsengsaas.visualstudio.com/join?24885D3CDDD1EE48C561169387521304B93C
