<div align="center">
  <h1>Minted Directory Astro</h1>
  <p>Markdown driven directory template. Built with Astro and Tailwindcss. Optimized for SEO. Beautiful Customizable Style</p>
</div>

<br/>

<div align="center">
  <img src="https://github.com/user-attachments/assets/952a6903-841b-4102-a34b-d6f297079e03" width="85%" alt="Minted Directory Screenshot" />
</div>

<br/>

### Features:
+ 🖌️ Add Listings with markdown.
+ 🔋 Batteries included for SEO.
+ 💻 Pre-built components for directories.
+ 💅 Customizable style.
+ 🌙 Dark/Light mode
+ 💸 Sponsored Content

## Getting Started

### Local Development

Duplicate the template then clone the repository.

```sh
git clone git@github.com:youraccount/projectname.git my-directory
```

Or use the github cli to create a repository based on the template and clone in one command:

```sh
gh repo create my-directory --template masterkram/minted-directory --private --clone
```

Go to the cloned folder:
```sh
cd my-directory
```

Install dependencies

```sh
pnpm install
```

Run the website:

```sh
pnpm dev
```

Congrats :tada:

You can start customizing and building your directory.

### Customization

To customize the directory style:
+ Change the `primary`, `secondary` color and `fontFamily` in `tailwind.config.ts`
+ Customize the `app.config.ts`

Read about the possible changes to the app config [here](https://minteddirectory/docs/settings).

### Adding Content

Add listings by adding markdown files to `/src/content/directory`

### Deployment

Deploy as a pre-rendered, static site for best SEO performance:

```bash
pnpm run build
```