module.exports = {
  sidebar: [
    'what-is-jsonforms',
    'architecture',
    'getting-started',
    {
      type: 'category',
      label: 'UI Schema Elements',
      collapsed: false,
      items: ['uischema/uischema', 'uischema/controls', 'uischema/layouts', 'uischema/rules'],
    },
    'labels',
    'renderer-sets',
    'ref-resolving',
    'validation',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['tutorial/create-app', 'tutorial/custom-layouts', 'tutorial/custom-renderers', 'tutorial/multiple-forms'],
    },
    'api',
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: ['integrations/react', 'integrations/angular', 'integrations/vue'],
    },
  ],
};
