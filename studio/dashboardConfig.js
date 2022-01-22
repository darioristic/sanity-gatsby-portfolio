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
                  buildHookId: '61ebd5204855d8b0b82357ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-izuv8qyt',
                  apiId: '93bb355c-5d9c-4ad0-adfe-cb6547d309d1'
                },
                {
                  buildHookId: '61ebd52000889fbae97ae3e6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mb1rmgbp',
                  apiId: '97542811-081c-4197-8c64-6ef0cb6230df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darioristic/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mb1rmgbp.netlify.app',
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
