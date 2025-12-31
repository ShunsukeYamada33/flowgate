export const paths = {
    home: {
        path: '/',
        getHref: () => '/',
    },

    auth: {
        register: {
            path: '/auth/register',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
        login: {
            path: '/auth/login',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
    },
    app: {
        root: {
            path: '/app',
            getHref: () => '/app',
        },
        applications: {
            path: '/app/applications',
            getHref: () => '/app/applications',
        },
        discussions: {
            path: 'discussions',
            getHref: () => '/app/discussions',
        },
        discussion: {
            path: 'discussions/:discussionId',
            getHref: (id: string) => `/app/discussions/${id}`,
        },
        users: {
            path: 'users',
            getHref: () => '/app/users',
        },
        profile: {
            path: 'profile',
            getHref: () => '/app/profile',
        },
    },
    error: {
        root: {
            path: '/error',
            getHref: () => '/error',
        }
    }
} as const;