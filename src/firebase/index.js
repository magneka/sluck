import FirebaseContext from './context';
import FirebaseRepository from './firebase';
import { getMessages, postMessage, likePost, reply, likeReply } from './dataRepository'

export default FirebaseRepository;

export { FirebaseContext, FirebaseRepository, getMessages, postMessage, likePost, reply, likeReply  };