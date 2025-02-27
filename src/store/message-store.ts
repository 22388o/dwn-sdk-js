import type { Message } from '../message';
import { CID } from 'multiformats/cid';

export interface MessageStore {
  /**
   * opens a connection to the underlying store
   */
  open(): Promise<void>;
  /**
   * closes the connection to the underlying store
   */
  close(): Promise<void>;
  /**
   * adds a message to the underlying store. Uses the message's cid as the key
   * @param message
   */
  put(message: Message): Promise<void>;
  /**
   * fetches a single message by `cid` from the underlying store. Returns `undefined`
   * if no message was found
   * @param cid
   */
  get(cid: CID): Promise<Message>;
  /**
   * queries the underlying store for messages that match the query provided.
   * returns an empty array if no messages are found
   * @param query
   */
  // TODO: change type of `query`
  query(query: any): Promise<Message[]>;

  /**
   * deletes the message associated to the id provided
   * @param cid
   */
  delete(cid: CID): Promise<void>;

}