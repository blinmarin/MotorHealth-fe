import { Fragment } from 'react';

import { useAuthMiddleware } from '@/hooks/useAuthMiddleware';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { UseAuthMiddlewareProps } from '@/hooks/useAuthMiddleware';

// главный компонент AppLayout для отображения содержимого web-интерфейса
export type NextPageMeta = {
    title?: string;
    description?: string;
    keywords?: string[];
};

export type NextLayout<P = {}> = React.FunctionComponent<NextPageLayoutProps & P & {
    children: React.ReactNode;
}>;

type NextPageLayoutProps = {
    Layout?: NextLayout;
    meta?: NextPageMeta;
    auth?: UseAuthMiddlewareProps;
};

export type NextPageWithLayout = NextPage & {
    layoutProps?: NextPageLayoutProps;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export const AppLayout = ({ Component, pageProps }: AppPropsWithLayout) => {
    const { auth, Layout } = Component.layoutProps ?? {};

    useAuthMiddleware(auth);

    const BaseLayout = Layout ?? Fragment;

    return (
        <BaseLayout {...(Layout ? Component.layoutProps : {})}>
            <Component {...pageProps} />
        </BaseLayout>
    );
};
