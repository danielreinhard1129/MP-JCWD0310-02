export interface Promotion {
    code: string;
    discount: number;
    startDate: Date;
    endDate: Date;
    maxUses: number;

    event: Event;
  }

  export interface IFormCreatePromotion {
    code: string;
    discount: string;
    startDate: string;
    endDate: string;
    maxUses: string;
    eventId?: number
  }