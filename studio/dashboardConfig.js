export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '624f50ff4677fe5d079d552f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dpsg6d2h',
                  apiId: 'a1cadcf9-7c69-4176-9da4-183b1d2b7973'
                },
                {
                  buildHookId: '624f51003ea06d53568994ea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ap1zj98i',
                  apiId: 'f9f65255-819b-454b-ac9f-c72caee0aa54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnnorSeth/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ap1zj98i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
