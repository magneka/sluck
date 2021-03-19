/*
TODO:
  Populer messagelist slik at du kan bruke den til å hente data til messages
  
  // senere
  Kanskje flere metoder til: login logout ++ ??
  Legg messagelist i context for global tilgang ??
  Koble metodene til FIREBASE 

  eller bruke DEXIE mot indexedDb
  https://dexie.org/docs/Samples

*/

export const likePost = (message) => {
    console.log(message);
}

export const reply = (message, replyId) => {

}

export const postMessage = (message) => {
    
}

export const getMessages = (setMessageFunc) => {

    const messageList =
        [
            {
                id: 1,
                messageText: 'The very first posting on sluck! It will be framed and hung on the wall', 
                fromEmail: 'magnea@uc.no',
                date: '2012-04-23T18:25:43.511Z',
                likes: [
                    'bill.gates@microsoft.com', 'steve.jobs@apple.com', 'nelson@mandela.com'
                ],
                replies: [
                    {
                        id: 1,
                        messageText: 'I am very impressed with your posting',
                        fromEmail: 'knut@uc.no',
                        date: '2012-04-23T18:25:43.511Z',
                        likes: [
                            'torstein.vadla@uc.no'
                        ]
                    },
                    {
                        id: 2,
                        messageText: 'Me too...',
                        fromEmail: 'robin@uc.no',
                        date: '2012-04-23T18:25:43.511Z',
                        likes: [
                            'torstein.vadla@uc.no'
                        ]
                    }
                ]
            },
            {
                id: 2,
                messageText: 'The second posting on sluck! It will be framed and hung on the wall',
                fromEmail: 'magnea@uc.no',
                date: '2012-04-23T18:25:43.511Z',
                likes: [],
                replies: []
            },           
            {
                id: 3,
                messageText: 'Har dere prøvd https://coolors.co/.  Fantastisk site som genererer en fargepalette med matchende farger.',
                fromEmail: 'magnea@uc.no',
                date: '2012-04-23T18:25:43.511Z',
                likes: [],
                replies: []                
            },
            ,
            {
                id: 3,
                messageText: 'Når du har markøren over antall likes, skal du vise alle personene.  Kan dette være noe å se på.',
                fromEmail: 'magnea@uc.no',
                date: '2012-04-23T18:25:43.511Z',
                likes: [],
                replies: [
                    {
                        id: 1,
                        messageText: 'Eg berre elska react',
                        fromEmail: 'tone.damli@drægni.no',
                        date: '2012-04-23T18:25:43.511Z',
                        likes: [
                            'torstein.vadla@uc.no'
                        ]
                    }
                ]
            }    
        ]
    
    setMessageFunc(messageList)

}

//https://prod.liveshare.vsengsaas.visualstudio.com/join?24885D3CDDD1EE48C561169387521304B93C
