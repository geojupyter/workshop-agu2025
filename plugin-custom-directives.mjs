const gitCommitDirective = {
  name: "gitCommitCheckpoint",
  doc: "Renders a consistent callout when the learner should do a Git commit.",
  arg: {
    type: String,
    doc: "Commit message",
  },
  run(data) {
    return [{
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
    }];
  },
};

const youShouldNoticeDirective = {
  name: "youShouldNotice",
  doc: "Renders a consistent callout when the learner should notice something.",
  body: {
    type: String
  },
  run(data, _, ctx) {
    return [{
      type: "admonition",
      kind: "important",
      icon: false,
      class: "simple",
      children: [
        {
          type: "admonitionTitle",
          children: [{
            type: "text",
            value: "👀 You should notice...",
          }],
        },
        ctx.parseMyst(data.body),
      ],
    }];
  },
};

const plugin = {
  name: "Our custom functionality",
  doc: "Custom functionality for this workshop website",
  directives: [gitCommitDirective, youShouldNoticeDirective],
}
export default plugin;
