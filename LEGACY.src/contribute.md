# How to Contribute

## How to Create Pages

### 1. Get Access to the Repository
To add or edit pages in the mdBook, you need to be a member of the DD GitHub organization. If you haven't received an invite to the GitHub organization yet, please ask one of the organization Owners to invite you [here](https://discord.com/channels/1328761294085554176/1338550392065232936).


### 2. Navigate to the Repository
1. Open the GitHub repository by clicking this link: [https://github.com/Dimension-Delvers/dimension-delvers-docs/](https://github.com/Dimension-Delvers/dimension-delvers-docs/)

### 3. Find the `src` Folder
1. Inside the repository, look for a folder named `src`.
2. This folder contains all the `.md` (Markdown) files used in the documentation.

### 4. Create a New Page
1. Click the `Add file` button and select `Create new file`.
2. Name your file with a `.md` extension (e.g., `new_page.md`). If you want to put the file in a folder, type the folder name followed by a / before the file name (e.g., `folder_name/new_page.md`).
3. Write your content in Markdown format.

### 5. Edit an Existing Page
1. Inside the `src` folder, find the file you want to edit.
2. Click on it, then press the `Edit` button (pencil icon).
3. Make your changes using Markdown syntax.

### 6. Link Your Page
To make your page accessible from the book’s navigation:
1. Open the `SUMMARY.md` file in the `src` folder.
2. Add a new line with a link to your page in this format:
   ```md
   - [Page Title](new_page.md)
   ```
3. Save your changes.

### 7. Commit Your Changes
1. Press the green button in the top right of the page that says "Commit changes..."
2. Add a short commit message (e.g., `Added new_page.md`).
3. Click `Commit changes`.

### Markdown Quick Reference
- **Headings**: `# Title`, `## Subtitle`, `### Section`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Lists**:
    - `- Item` (unordered)
    - `1. Item` (ordered)
- **Code Blocks**:
  ```
  \```language
  Code here
  \```
  ```
  (Remove the backslashes)

If you have any questions, feel free to ask in the Discord server
