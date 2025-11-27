const gitCommitDirective = {
  name: 'gitCommitCheckpoint',
  doc: 'Renders a consistent callout when the learner should do a Git commit.',
  arg: {
    type: String,
    doc: 'Commit message',
  },
  run(data) {
    return [{
      type: 'admonition',
      kind: 'important',
      icon: false,
      children: [
        {
          type: 'admonitionTitle',
          children: [{
            type: 'text',
            value: '💾 Commit & push to GitHub',
          }],
        },
        {
          type: 'code',
          lang: 'bash',
          value: `git add .\ngit commit -m '${data.arg}'\ngit push -u origin main`,
        },
      ],
    }];
  },
};

const youShouldNoticeDirective = {
  name: 'youShouldNotice',
  doc: 'Renders a consistent callout when the learner should notice something.',
  body: {type: 'myst'},
  run(data) {
    return [{
      type: 'admonition',
      kind: 'important',
      icon: false,
      class: 'simple',
      children: [
        {
          type: 'admonitionTitle',
          children: [{
            type: 'text',
            value: '👀 You should notice...',
          }],
        },
        ...data.body,
      ],
    }];
  },
};

const mystDemoStatic = {
  name: 'myst:static',
  doc: 'A static/pre-rendered version of the `{myst}` directive which supports plugins.',
  body: {type: 'myst'},
  run(data) {
    return [
      {
        type: "div",
        class: "myst-static-input-wrapper",
        children: [{
          type: "div",
          class: "myst-static-content",
          children: [{
            type: "code",
            language: "text",
            value: data.node.value,
          }],
        }],
      },
      {
        type: "div",
        class: "myst-static-output-wrapper",
        children: [{
          type: "div",
          class: "myst-static-content",
          children: data.body,
        }],
      },
    ];
  },
};

const plugin = {
  name: 'Our custom functionality',
  doc: 'Custom functionality for this workshop website',
  directives: [gitCommitDirective, youShouldNoticeDirective, mystDemoStatic],
}
export default plugin;
