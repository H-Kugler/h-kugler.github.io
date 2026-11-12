# h-kugler.github.io

Personal website. GitHub Pages builds it on every push — nothing to install.

## Where the text lives

| To change…                    | Edit                                         |
|-------------------------------|----------------------------------------------|
| Name, position, links, interests, news, experience, education | top block of `profile.md` |
| Bio | the text below that block in `profile.md` |
| A paper / project             | its file in `_research/`                     |
| A blog post                   | its file in `_posts/`                        |

**Add a paper:** copy a file in `_research/` and change the fields. Papers are
sorted by `date`, newest first (only the year is shown). Under `links:`, each line is `Label: URL` —
any label works (PDF, Code, arXiv, Slides…).

**Add a post:** create `_posts/YYYY-MM-DD-some-title.md` with a `title:` in the
front matter. The date in the filename is required. It appears on the homepage
automatically, at `/blog/some-title/`. The Writing section (and its link in the
top bar) only shows up once there is at least one post. For a formatting
example, see `_drafts/hello-world.md` — files in `_drafts/` are never published.

**Look:** everything visual is in `assets/style.css`; colours are at the top.
Link icons are in `_includes/icon.html`; the light/dark toggle remembers each visitor's choice.
