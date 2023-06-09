export type Status =
  | "subscribed"
  | "unsubscribed"
  | "cleaned"
  | "pending"
  | "transactional"
  | "archived";
export interface IEmail {
  address: string;
  dateChange?: string;
}
export interface IAddress {
  line1?: string;
  line2?: string;
  city?: string;
  zip?: number | "" | string;
  state?: string;
  country?: string;
}
export interface IPhone {
  number?: string;
  dateChanged?: string;
}
export interface ITodayVisitorsAttribute {
  value?: "Yes" | "No" | string;
  dateChanged?: string;
}
export interface IContact {
  firtsName?: string;
  lastName?: string;
  status?: Status;
  systemRecordId: string;
  dateChanged: string;
  email: IEmail;
  tva?: ITodayVisitorsAttribute;
  address?: IAddress;
  phone?: IPhone;
}
export interface IMerge_fields {
  FNAME?: string;
  LNAME?: string;
  ADDRESS1?: string;
  PHONE?: string;
  BIRTHDAY?: string;
  TVA?: "Yes" | "No" | string;
  TVADC?: string;
  PDC?: string;
  EADC?: string;
  ADDRESS2?: string;
  CITY?: string;
  COUNTRY?: string;
  ZIP?: number | "" | string;
  STATE?: string;
}

export interface IMember {
  id?: string;
  email_address: string;
  unique_email_id?: string;
  contact_id: string;
  full_name?: string;
  web_id?: number;
  email_type?: string;
  status?: Status;
  consents_to_one_to_one_messaging?: boolean;
  merge_fields: IMerge_fields;
  stats: {
    avg_open_rate: number;
    avg_click_rate: number;
  };
  ip_opt: string;
  timestamp_opt: string;
  member_rating: number;
  last_changed: string;
  language: string;
  vip: boolean;
  email_client: string;
  location: {
    latitude: number;
    longitude: number;
    gmtoff: number;
    dstoff: number;
    country_code: string;
    timezone: string;
    region: string;
  };
  source: string;
  tags_count: number;
  tags: any[];
  list_id: string;
  _links: {
    rel: string;
    href: string;
    method?: string;
    targetSchema?: string;
    schema?: string;
  }[];
  // Optional properties
  ip_signup?: string;
  timestamp_signup?: string;
}

export interface ISend {
  email_address: string;
  status: Status;
  merge_fields: IMerge_fields;
}

export interface ListOptions {
  skipMergeValidation?: boolean;
  fields?: string[];
  excludeFields?: string[];
  count?: number;
  offset?: number;
  beforeDateCreated?: string;
  sinceDateCreated?: string;
  beforeCampaignLastSent?: string;
  sinceCampaignLastSent?: string;
  email?: string;
  sortField?: string;
  sortDir?: string;
  hasEcommerceStore?: boolean;
  includeTotalContacts?: boolean;
  required?: boolean;
  status?: Status;
}
