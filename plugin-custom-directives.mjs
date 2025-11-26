const gitCommitDirective = {
  name: "gitCommitCheckpoint",
  doc: "Renders a consistent callout when the learner should do a Git commit.",
  arg: {
    type: String,
    doc: "Commit message",
  },
  run(data) {
    return [{
      type: "block",
      children: [{
        type: "admonition",
        kind: "important",
        icon: false,
        children: [
          {
            type: "admonitionTitle",
            children: [{
              type: "text",
              value: "💾 Commit & push to GitHub",
            }],
          },
          {
            type: "code",
            lang: "bash",
            value: `git add .\ngit commit -m "${data.arg}"\ngit push -u origin main`,
          },
        ],
      }],
    }]
  },
};

const plugin = {
  name: "Our custom functionality",
  doc: "Custom functionality for this workshop website",
  directives: [gitCommitDirective],
}
export default plugin;
