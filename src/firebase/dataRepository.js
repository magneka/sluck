/*
TODO:
  Populer messagelist slik at du kan bruke den til å hente data til messages
  
  // senere
  Kanskje flere metoder til: login logout ++ ??
  Legg messagelist i context for global tilgang ??
  Koble metodene til FIREBASE 

*/

export const likePost = (message) => {

}

export const reply = (messge, replyId) => {

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
                        fromEmail: '',
                        date: '2012-04-23T18:25:43.511Z',
                        likes: [
                            'torstein.vadla@uc.no'
                        ]
                    },
                    {
                        id: 2,
                        messageText: 'Me too...',
                        fromEmail: '',
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
