export type IdleTimer = {
  start: () => Promise<void>;
  stop: () => void;
};

export type WordTheDayData = {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  from_who: string;
  creator: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  creator_uid: number;
  reviewer: number;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  commit_from: string;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: string;
  length: number;
};
