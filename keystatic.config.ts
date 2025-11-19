import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'slug',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                slug: fields.text({ label: 'Slug', validation: { length: { min: 1 } } }),
                title: fields.text({ label: 'Title' }),
                pubDate: fields.date({ label: 'Published Date' }),
                description: fields.text({ label: 'Description' }),
                content: fields.mdx({
                    label: 'Content',
                    extension: 'md',
                    options: {
                        image: {
                            directory: 'src/assets/images/blog',
                            publicPath: '../../assets/images/blog/',
                        },
                    },
                    components: {
                        // Add any custom components here if needed
                    }
                }),
            },
        }),
    },
});
