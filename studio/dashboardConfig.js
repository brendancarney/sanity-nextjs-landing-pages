export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e79fea1548b32ce3c3c78d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sszfjzos',
                  apiId: '0c55a003-250d-4ba1-96fc-8d656b4d0a5f'
                },
                {
                  buildHookId: '5e79fea200351717da918969',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7sai21rv',
                  apiId: '5d4961c5-11f9-433e-abb9-b8b1b6266409'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brendancarney/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7sai21rv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
