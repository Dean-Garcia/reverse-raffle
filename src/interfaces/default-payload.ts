/**
 * Default payload.
 */
export interface DefaultPayload {
  [key: string]: unknown;
  /**
   * Action type.
   */
  type: string;
}

export default DefaultPayload;
