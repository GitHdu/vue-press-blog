module.exports = {
  title: 'VuePress Blog',
  description: 'daily blog',
  // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '前端框架', link: '/accumulate/JS/vue' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: 'GitHub',
        items: [{ text: 'GitHub地址', link: 'https://github.com/GitHdu' }],
      },
    ],
    sidebar: {
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
        // ['/accumulate/', 'js'], // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '框架',
          children: [
            ['/accumulate/JS/vue', 'Vue'], // 以docs为根目录来查找文件
            // 上面地址查找的是：docs>accumulate>JS>vue.md 文件
            // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
          ],
        },
      ],
    },
  },
}
