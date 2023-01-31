import { CMS } from './CMS';

export namespace Post {
  export type PostDetailed = CMS.components['schemas']['Post'];
  export type PostCreate = CMS.components['schemas']['PostCreate'];
  export type PostPaginated = CMS.components['schemas']['PostPaginated'];
}
