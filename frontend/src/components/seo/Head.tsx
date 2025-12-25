import {useEffect} from 'react';

type HeadProps = {
    title?: string;
    description?: string;
};

export const Head = ({title, description}: HeadProps) => {
    useEffect(() => {
        document.title = title
            ? `${title} | Flow Gate`
            : 'Flow Gate';
    }, [title]);

    useEffect(() => {
        if (!description) return;

        let meta = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        );

        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }

        meta.content = description;
    }, [description]);

    return null;
};
