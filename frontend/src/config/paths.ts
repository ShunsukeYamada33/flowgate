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
        applicationRegister: {
            path: '/app/application-register',
            getHref: () => '/app/application-register',
        },
        applicationCheck: {
            path: '/app/application-check',
            getHref: () => '/app/application-check',
        },
    },
    error: {
        root: {
            path: '/error',
            getHref: () => '/error',
        }
    }
} as const;