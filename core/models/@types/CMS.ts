export namespace CMS {
  /**
   * This file was auto-generated by openapi-typescript.
   * Do not make direct changes to the file.
   */

  export interface paths {
    '/auth/login': {
      /** @description Login */
      post: {
        /** @description Login */
        requestBody: {
          content: {
            'application/json': {
              username: string;
              password: string;
            };
          };
        };
        responses: {
          /** @description Returns jwt token. */
          200: {
            content: {
              'application/json': {
                token: string;
              };
            };
          };
        };
      };
    };
    '/auth/is-auth': {
      /** @description Login */
      get: {
        /** @description Login */
        responses: {
          /** @description Is token valid. */
          200: {
            content: {
              'application/json': unknown;
            };
          };
        };
      };
    };
    '/auth/logout': {
      /** @description Login */
      post: {
        /** @description Login */
        responses: {
          /** @description Logout. */
          201: never;
        };
      };
    };
    '/images': {
      /** @description Create a Image */
      post: {
        /** @description Create a Image */
        requestBody: {
          content: {
            'multipart/form-data': {
              image: Record<string, never>;
            };
          };
        };
        responses: {
          /** @description Returns created image id. */
          200: {
            content: {
              'application/json': components['schemas']['ImageCreated'];
            };
          };
        };
      };
    };
    '/images/{path}': {
      /** @description Serves a Image */
      get: {
        /** @description Serves a Image */
        parameters: {
          /** @description image path */
          path: {
            path: string;
          };
        };
        responses: {
          /** @description Returns the image file. */
          200: {
            content: {
              'image/png': string;
            };
          };
        };
      };
    };
    '/posts': {
      /** @description Paginate Posts */
      get: {
        /** @description Paginate Posts */
        responses: {
          /** @description Returns posts paginated. */
          200: {
            content: {
              'application/json': components['schemas']['PostPaginated'];
            };
          };
        };
      };
      /** @description Create a Post */
      post: {
        /** @description Create a Post */
        requestBody: {
          content: {
            'application/json': components['schemas']['PostCreate'];
          };
        };
        responses: {
          /** @description Returns created post. */
          200: {
            content: {
              'application/json': components['schemas']['Post'];
            };
          };
        };
      };
    };
    '/posts/{slug}': {
      /** @description Returns a Post by slug */
      get: {
        /** @description Returns a Post by slug */
        parameters: {
          /** @description post slug */
          path: {
            slug: string;
          };
        };
        responses: {
          /** @description Returns the post. */
          200: {
            content: {
              'application/json': components['schemas']['Post'];
            };
          };
        };
      };
    };
  }

  export type webhooks = Record<string, never>;

  export interface components {
    schemas: {
      /** @description Post entity */
      Post: {
        /**
         * @description Post id
         * @example 15cbf48e-c7ed-4ec3-a65f-2a0f4759e9f1
         */
        id: string;
        /**
         * @description Post title
         * @example t??tulo de um post
         */
        title: string;
        /**
         * @description Post slug
         * @example titulo-de-um-post
         */
        slug: string;
        /**
         * @description Post tags
         * @example javascript,html
         */
        tags: string;
        /**
         * @description Post content body
         * @example ##Markup
         */
        body: string;
        images: components['schemas']['Image'][];
        /** @description Post date */
        createdAt: string;
      };
      /** @description Post paginated */
      PostPaginated: {
        content: components['schemas']['Post'][];
        /** @example 5 */
        rows: number;
        /** @example 0 */
        page: number;
        /** @example 10 */
        totalRecords: number;
      };
      /** @description Post create DTO */
      PostCreate: {
        /**
         * @description Post title
         * @example t??tulo de um post
         */
        title: string;
        /**
         * @description Post tags
         * @example javascript,html
         */
        tags: string;
        /**
         * @description Post content body
         * @example ##Markup
         */
        body: string;
        imagesIds: string[];
      };
      /** @description Image entity */
      Image: {
        /**
         * @description Image id
         * @example 15cbf48e-c7ed-4ec3-a65f-2a0f4759e9f1
         */
        id: string;
        /** @description Image small */
        small: string;
        /** @description Image medium */
        medium: string;
        /** @description Image large */
        large: string;
      };
      /** @description Image created succesfuly */
      ImageCreated: {
        /**
         * @description Image id
         * @example 15cbf48e-c7ed-4ec3-a65f-2a0f4759e9f1
         */
        imageId: string;
        /** @example image created succesfully */
        message: string;
      };
    };
    responses: never;
    parameters: {
      /** @description number of rows to be returned */
      rows: number;
      /** @description number of pages to be returned */
      page: number;
      /** @description ordering to be returned [ field,order ] */
      order: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
  }

  export type external = Record<string, never>;

  export type operations = Record<string, never>;
}
