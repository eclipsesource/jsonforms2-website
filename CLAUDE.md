# JSON Forms Documentation Website

Docusaurus-based documentation website for [JSON Forms](https://github.com/eclipsesource/jsonforms), a declarative framework for building JSON Schema based forms.

For detailed architecture, see [.prompts/project-info.prompttemplate](.prompts/project-info.prompttemplate).

## Development Commands

### Install Dependencies
```bash
npm ci
```

### Start Development Server
```bash
npm start
```
This starts the local development server at `http://localhost:3000` with hot-reloading.

### Build for Production
```bash
npm run build
```
This generates static files in the `/build` directory.

### Serve Production Build Locally
```bash
npm run serve
```
Serves the built site locally to verify the production build.

### Clear Cache
```bash
npm run clear
```
Clears the Docusaurus cache if you encounter build issues.

## Important Guidelines

### Always Build and Test Changes

**CRITICAL**: After making any changes to this repository, you MUST:

1. **Run the build** to ensure there are no compilation errors:
   ```bash
   npm run build
   ```

2. **Start the dev server** and verify your changes work correctly:
   ```bash
   npm start
   ```

3. **Check for console errors** in the browser when viewing affected pages.

Do not consider a task complete until the build passes and the changes have been visually verified.

### Content Guidelines

- Documentation files use MDX format (Markdown + JSX)
- Place new documentation in `/content/docs/`
- Place new examples in `/content/examples/`
- Update sidebar configurations in `/src/sidebars/` when adding new pages

### Component Development

- React components go in `/src/components/`
- Use the existing Demo component pattern for interactive examples
- Follow the CSS Modules pattern for component-specific styles
