import { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../firebase';

export const Messages = () => {

    const FirebaseRepository = useContext(FirebaseContext)

    const [messages, setMessages] = useState([])
    const [error, setError] = useState('')

    const fetchMessages = async () => {
        try {
            const response = FirebaseRepository.db.collection('messages');
            const data = await response.get();
            console.log(data)
            let _messages = []
            data.docs.forEach(item => {
                let _data = item.data()
                _messages.push(_data)
                //console.log(_data)
                //setMessages([...messages, _data])
            })            
            setMessages(_messages)
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchMessages();
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
            {messages && messages.map(message => {
                return (
                    <div className="blog-container">
                        <h4>{message.uid}</h4>
                        <p>{message.text}</p>
                    </div>
                )
            })
            }
        </>
    )


}