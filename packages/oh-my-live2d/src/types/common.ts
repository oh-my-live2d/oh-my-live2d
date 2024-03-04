export type IdleTimer = {
  start: () => Promise<void>;
  stop: () => void;
};
