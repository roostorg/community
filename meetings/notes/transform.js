/**
 * Pure transformation logic for processing ROOST meeting notes.
 * Used by both process-notes.mjs (CLI) and index.html (web app).
 */

export function loadNameMap(data) {
  const emailToGithub = {}, nameToGithub = {};
  for (const person of data.people ?? []) {
    for (const email of person.emails ?? [])
      emailToGithub[email.toLowerCase()] = person.github;
    for (const name of person.names ?? [])
      nameToGithub[name.toLowerCase()] = person.github;
  }
  return { emailToGithub, nameToGithub };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function processNotes(text, emailToGithub, nameToGithub) {
  let inActions = false;
  const lines = text.split('\n').map(line => {
    line = line.replace(/\s+$/, '');

    if (/^## Actions\b/.test(line)) inActions = true;
    else if (/^## /.test(line)) inActions = false;

    // Issue/PR links: [\#NNN](https://github.com/ORG/REPO/issues/NNN) → #NNN
    line = line.replace(
      /\[\\?#(\d+)\]\(https:\/\/github\.com\/[^)]+\/(?:issues|pull)\/\d+\/?\)/g,
      '#$1'
    );

    // [Name](mailto:email) → @github-username
    line = line.replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/g, (match, _name, email) => {
      const github = emailToGithub[email.toLowerCase()];
      return github ? `@${github}` : match;
    });

    // Unescape Google Docs artifacts: \! \( \) \[ \]
    line = line.replace(/\\([!()\[\]])/g, '$1');

    // * bullets → - bullets (preserving indentation)
    line = line.replace(/^(\s*)\* /g, '$1- ');

    // Actions section: ensure all list items are checklists
    if (inActions) line = line.replace(/^(\s*)-\s+(?!\[)/, '$1- [ ] ');

    return line;
  });

  let result = lines.join('\n');

  // Replace bare names → @-mentions, longest names first to avoid partial matches
  for (const [name, github] of Object.entries(nameToGithub)
      .sort(([a], [b]) => b.length - a.length)) {
    result = result.replace(
      new RegExp('(?<![/@\\w])' + escapeRegex(name) + '(?!\\w)', 'gi'),
      `@${github}`
    );
  }

  result = result.replace(/^\s*[-*]\s*$/gm, '');  // remove blank bullet lines
  result = result.replace(/\n{3,}/g, '\n\n');      // collapse 3+ blank lines

  return result.trim() + '\n';
}
