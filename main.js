const { Plugin, Notice } = require("obsidian");

const TEXT = Object.freeze({
  // Plugin / commands / menus
  "Mindmap Mode": "思维导图模式（Mindmap Mode）",
  "Mind map": "思维导图",
  "Toggle mind map view": "切换思维导图视图",
  "Forget the saved fold state for this note": "清除当前笔记保存的折叠状态",
  "Find in the mind map": "在思维导图中查找",
  "Move the selected node up among its siblings": "将选中节点在同级中上移",
  "Move the selected node down among its siblings": "将选中节点在同级中下移",
  "Open current note as a mind map": "将当前笔记以思维导图打开",
  "Open as mind map": "以思维导图打开",
  "Edit as markdown": "以 Markdown 编辑",
  "Fit map to window": "使思维导图适应窗口",
  "Only markdown notes can be shown as a mind map.": "只有 Markdown 笔记可以显示为思维导图。",
  "This node is the file name. Rename the note to change it.": "这个节点就是文件名。请重命名笔记来修改它。",
  "Nothing to undo on the map.": "思维导图中没有可撤销的操作。",

  // Settings: Structure
  "Structure": "结构",
  "Nodes come from": "节点来源",
  "Which markdown structures become cards on the map.": "选择哪些 Markdown 结构会成为思维导图中的卡片。",
  "Headings and list items": "标题和列表项",
  "Headings only": "仅标题",
  "List items only": "仅列表项",
  "Deepest heading level": "最深标题层级",
  "Headings below this level stay in the note as body content.": "超过此层级的标题会保留在笔记正文中，不再生成独立节点。",
  "Root node": "根节点",
  "Auto uses a lone top-level heading when the note has one, and the file name otherwise.": "自动模式会在笔记只有一个一级标题时使用该标题，否则使用文件名。",
  "Auto": "自动",
  "Always the file name": "始终使用文件名",
  "Always the first H1": "始终使用第一个一级标题",
  "Indent for new list items": "新列表项缩进",
  "Auto copies whatever the note already uses.": "自动模式会沿用当前笔记已有的缩进方式。",
  "Auto-detect": "自动检测",
  "Two spaces": "两个空格",
  "Four spaces": "四个空格",
  "Tab": "制表符（Tab）",

  // Settings: Appearance
  "Appearance": "外观",
  "Layout": "布局",
  "Balanced splits top-level branches to both sides of the root.": "平衡布局会把一级分支分布到根节点两侧。",
  "Balanced (both sides)": "平衡（两侧）",
  "Single side (right)": "单侧（右侧）",
  "Colour branches": "分支配色",
  "Give each top-level branch its own colour.": "为每个一级分支使用不同颜色。",
  "Show note content": "显示笔记正文",
  "Paragraphs, code blocks and tables become their own cards, so they fold and unfold with the branch they belong to. Use the expand button on a card to see the whole block rendered, or double-click it to edit.": "段落、代码块和表格会成为独立卡片，并随所属分支一起折叠或展开。点击卡片上的展开按钮可查看完整渲染内容，双击可编辑。",
  "Maximum card width": "卡片最大宽度",
  "Horizontal spacing": "水平间距",
  "Vertical spacing": "垂直间距",

  // Settings: Behaviour
  "Behaviour": "操作",
  "Mouse wheel": "鼠标滚轮",
  "Zooms (hold Shift to pan)": "缩放（按住 Shift 可平移）",
  "Pans (hold Ctrl to zoom)": "平移（按住 Ctrl 可缩放）",
  "Remember fold state": "记住折叠状态",
  "Reopen a note to the shape you left it in, focus included. The state is kept in the plugin's own data, never in the note — your markdown is untouched either way. Turn this off and every map opens at the root plus its top-level branches.": "再次打开笔记时恢复上次离开时的展开、折叠和焦点状态。状态只保存在插件自身数据中，不会修改 Markdown。关闭后，每次打开都只展开根节点和一级分支。",
  "Button in the note header": "在笔记标题栏显示按钮",
  "Adds a mind map toggle beside the other view actions. The command and ribbon icon work either way.": "在其他视图操作旁添加思维导图切换按钮。无论是否开启，命令和侧边栏图标都仍可使用。",

  // Settings: Shortcuts
  "Shortcuts": "快捷键",
  "Restore all defaults": "恢复全部默认值",
  "Put every shortcut back to the key the map shipped with.": "将所有快捷键恢复为插件的默认绑定。",
  "Press any key — Esc cancels": "请按任意键，按 Esc 取消",
  "Not bound": "未绑定",
  "Record": "录制",
  "Cancel": "取消",
  "Unbind": "取消绑定",
  "Restore the default": "恢复默认值",
  "Restore": "恢复",

  // Shortcut actions
  "Add a child": "添加子节点",
  "Add an empty child to the selected node and start editing it.": "在选中节点下添加一个空白子节点，并立即开始编辑。",
  "Add a sibling": "添加同级节点",
  "Add an empty node below the selected one, at the same level.": "在选中节点下方添加一个同层级的空白节点。",
  "Edit the title": "编辑标题",
  "Edit the selected node's text in place.": "直接编辑选中节点的文本。",
  "Delete the node": "删除节点",
  "Delete the selected node and everything under it.": "删除选中节点及其所有子节点。",
  "Cycle the checkbox": "切换复选框状态",
  "Step the selected list item through none, unchecked and checked.": "让选中的列表项依次在无复选框、未勾选、已勾选之间切换。",
  "Show the note content": "显示笔记正文",
  "Open the selected node's paragraphs and code blocks whole, rendered, in their own dialog. Unbound by default; the ⤢ button on a content card does the same thing.": "在独立对话框中完整渲染选中节点的段落和代码块。默认不绑定快捷键；正文卡片上的 ⤢ 按钮作用相同。",
  "Indent": "增加缩进",
  "Make the selected node a child of the sibling above it.": "将选中节点变成其上方同级节点的子节点。",
  "Outdent": "减少缩进",
  "Make the selected node a sibling of its own parent.": "将选中节点提升为与其父节点同级。",
  "Move up among siblings": "在同级中上移",
  "Swap the selected node, subtree and all, with the sibling above it.": "将选中节点及其整个子树与上方同级节点交换位置。",
  "Move down among siblings": "在同级中下移",
  "Swap the selected node, subtree and all, with the sibling below it.": "将选中节点及其整个子树与下方同级节点交换位置。",
  "Fold or unfold": "折叠或展开",
  "Hide or show the selected node's children.": "隐藏或显示选中节点的子节点。",
  "Select the node above": "选择上方节点",
  "Move the selection to the nearest card above.": "将选择移动到上方最近的卡片。",
  "Select the node below": "选择下方节点",
  "Move the selection to the nearest card below.": "将选择移动到下方最近的卡片。",
  "Select the node to the left": "选择左侧节点",
  "Move the selection to the nearest card to the left.": "将选择移动到左侧最近的卡片。",
  "Select the node to the right": "选择右侧节点",
  "Move the selection to the nearest card to the right.": "将选择移动到右侧最近的卡片。",
  "Find in the map": "在思维导图中查找",
  "Open the find bar over the canvas. Enter and Shift+Enter step through the matches.": "在画布上方打开查找栏。Enter 跳到下一个匹配项，Shift+Enter 跳到上一个。",
  "Close the find bar": "关闭查找栏",
  "Only the map's while a find bar is open; with no bar up the key keeps whatever meaning Obsidian gives it.": "仅在查找栏打开时由思维导图接管；查找栏关闭后，该按键仍按 Obsidian 原本的功能工作。",
  "Undo": "撤销",
  "Undo the last edit made on the map.": "撤销最近一次在思维导图中的编辑。",
  "Redo": "重做",
  "Redo the last undone edit.": "重做最近一次被撤销的编辑。",
  "Fit to window": "适应窗口",
  "Frame the whole map in the viewport.": "让整个思维导图完整显示在当前视口中。",
  "Zoom in": "放大",
  "Zoom the canvas in one step.": "将画布放大一级。",
  "Zoom out": "缩小",
  "Zoom the canvas out one step.": "将画布缩小一级。",
  "Centre on the selection": "将选中节点居中",
  "Bring the selected node to the middle of the viewport.": "将选中节点移动到视口中央。",

  // Toolbar / help
  "Expand all": "全部展开",
  "Collapse all": "全部折叠",
  "Keyboard shortcuts": "键盘快捷键",
  "Mind map shortcuts": "思维导图快捷键",
  "Double-click a card": "双击卡片",
  "Edit the node": "编辑节点",
  "⤢ on a content card": "正文卡片上的 ⤢",
  "Show the whole block, rendered": "完整显示并渲染整个内容块",
  "Click a link in a content card": "点击正文卡片中的链接",
  "Open it": "打开链接",
  "+ beside a card": "卡片旁的 +",
  "New child": "新建子节点",
  "Right-click a card": "右键单击卡片",
  "The node's menu": "打开节点菜单",
  "Drag onto a card": "拖到某张卡片上",
  "Reparent it": "更改其父节点",
  "Drag onto a card's top / bottom edge": "拖到卡片的上边缘 / 下边缘",
  "Reorder it beside that card": "调整到该卡片相邻位置",
  "Wheel / pinch": "滚轮 / 双指捏合",
  "Zoom; drag blank space to pan": "缩放；拖动空白区域可平移",
  "Every key above can be changed in the plugin's settings.": "以上所有按键都可以在插件设置中修改。",

  // Search bar
  "Regular expression": "正则表达式",
  "Previous match": "上一个匹配项",
  "Next match": "下一个匹配项",
  "Close search": "关闭查找",

  // Node / block menu
  "Show the whole block": "显示完整内容块",
  "Edit the block source": "编辑内容块源码",
  "Add child": "添加子节点",
  "Add sibling below": "在下方添加同级节点",
  "Add sibling above": "在上方添加同级节点",
  "Unfold": "展开",
  "Fold": "折叠",
  "Rename": "重命名",
  "Delete": "删除",
  "Empty": "空节点",
  "Expand": "展开",
  "Collapse": "折叠",

  // Block dialog
  "Note content": "笔记正文",
  "This content stays in the note exactly where it is. Editing here rewrites only these lines.": "这段内容会保留在笔记中的原位置。在这里编辑只会改写对应的这些行。",
  "Preview": "预览",
  "Source": "源码",
  "Close": "关闭",
  "Save": "保存",

  "Untitled": "未命名"
});

const UNIQUE_GLOBAL = new Set([
  "Toggle mind map view",
  "Forget the saved fold state for this note",
  "Find in the mind map",
  "Move the selected node up among its siblings",
  "Move the selected node down among its siblings",
  "Open current note as a mind map",
  "Open as mind map",
  "Edit as markdown",
  "Fit map to window",
  "Only markdown notes can be shown as a mind map.",
  "This node is the file name. Rename the note to change it.",
  "Nothing to undo on the map."
]);

const MENU_MARKERS = [
  "Show the whole block",
  "显示完整内容块",
  "Edit the block source",
  "编辑内容块源码",
  "Add sibling below",
  "在下方添加同级节点",
  "Add sibling above",
  "在上方添加同级节点",
  "Fit map to window",
  "使思维导图适应窗口",
  "Open as mind map",
  "以思维导图打开",
  "Edit as markdown",
  "以 Markdown 编辑"
];

function translateCore(text) {
  if (!text) return null;
  if (Object.prototype.hasOwnProperty.call(TEXT, text)) return TEXT[text];

  let match = /^Lines (\d+)–(\d+)$/.exec(text);
  if (match) return `第 ${match[1]}–${match[2]} 行`;

  match = /^Also bound to (.+) — the one listed first is the one that answers\.$/.exec(text);
  if (match) {
    const actions = match[1]
      .split(", ")
      .map((item) => TEXT[item] || item)
      .join("、");
    return `同时绑定到 ${actions}。列表中靠前的动作优先响应。`;
  }

  if (text.startsWith("Mindmap Mode: ")) {
    const rest = text.slice("Mindmap Mode: ".length);
    const translated = TEXT[rest];
    if (translated) return `思维导图模式：${translated}`;
  }

  return null;
}

function translateTextNode(node) {
  const value = node.nodeValue;
  if (!value || !value.trim()) return;
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const core = value.slice(leading.length, value.length - trailing.length);
  const translated = translateCore(core);
  if (translated && translated !== core) node.nodeValue = `${leading}${translated}${trailing}`;
}

module.exports = class MindmapModeZhCn extends Plugin {
  async onload() {
    this.originalCommandNames = new Map();
    this.originalManifestName = null;

    this.app.workspace.onLayoutReady(() => {
      this.patchManifestName();
      this.patchCommands();
      this.translateDocument();

      const upstream = this.app.plugins?.getPlugin?.("mindmap-mode");
      if (!upstream) {
        new Notice("Mindmap Mode 中文语言包：请先安装并启用原版 Mindmap Mode。", 8000);
      }
    });

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          const parent = mutation.target.parentElement;
          if (parent && this.shouldTranslate(parent, mutation.target.nodeValue?.trim())) {
            translateTextNode(mutation.target);
          }
          continue;
        }

        if (mutation.type === "attributes") {
          this.translateElementAttributes(mutation.target);
          continue;
        }

        for (const node of mutation.addedNodes) this.translateAddedNode(node);
      }
      this.translateSettingsIfOpen();
      this.patchCommands();
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "title", "placeholder"]
    });

    this.register(() => this.observer?.disconnect());
    this.registerInterval(window.setInterval(() => {
      this.patchManifestName();
      this.patchCommands();
      this.translateSettingsIfOpen();
    }, 1500));
  }

  onunload() {
    const commands = this.app.commands?.commands;
    if (commands) {
      for (const [id, originalName] of this.originalCommandNames.entries()) {
        const command = commands[id];
        if (command) command.name = originalName;
      }
    }

    const manifest = this.app.plugins?.manifests?.["mindmap-mode"];
    if (manifest && this.originalManifestName) manifest.name = this.originalManifestName;
  }

  patchManifestName() {
    const manifest = this.app.plugins?.manifests?.["mindmap-mode"];
    if (!manifest) return;
    if (!this.originalManifestName) this.originalManifestName = manifest.name;
    if (manifest.name === "Mindmap Mode") manifest.name = TEXT["Mindmap Mode"];
  }

  patchCommands() {
    const commands = this.app.commands?.commands;
    if (!commands) return;

    for (const [id, command] of Object.entries(commands)) {
      if (!command || typeof command.name !== "string") continue;
      const translated = translateCore(command.name);
      if (!translated || translated === command.name) continue;

      if (!this.originalCommandNames.has(id)) this.originalCommandNames.set(id, command.name);
      command.name = translated;
    }
  }

  translateAddedNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentElement;
      if (parent && this.shouldTranslate(parent, node.nodeValue?.trim())) translateTextNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    this.translateTree(node);
    this.translateSettingsIfOpen();
  }

  translateDocument() {
    const roots = document.querySelectorAll(
      ".mindmap-mode, .mm-block-dialog, .mm-shortcut, .menu, .notice, .suggestion-container"
    );
    for (const root of roots) this.translateTree(root);
    this.translateSettingsIfOpen();
  }

  translateTree(root, force = false) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      const parent = root.parentElement;
      if (parent && (force || this.shouldTranslate(parent, root.nodeValue?.trim()))) translateTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE) return;

    const el = root;
    if (force || this.shouldTranslate(el, el.textContent?.trim())) this.translateElementAttributes(el, force);

    for (const child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        if (force || this.shouldTranslate(el, child.nodeValue?.trim())) translateTextNode(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        this.translateTree(child, force);
      }
    }
  }

  translateElementAttributes(el, force = false) {
    if (!(el instanceof Element)) return;
    if (!force && !this.shouldTranslate(el)) return;

    for (const attr of ["aria-label", "title", "placeholder"]) {
      const value = el.getAttribute(attr);
      if (!value) continue;
      const translated = translateCore(value);
      if (translated && translated !== value) el.setAttribute(attr, translated);
    }
  }

  shouldTranslate(el, candidate = "") {
    if (!(el instanceof Element)) return false;

    // Always-safe, unique Mindmap Mode strings in command palette, ribbon tooltips, notices, etc.
    if (candidate && UNIQUE_GLOBAL.has(candidate)) return true;
    for (const attr of ["aria-label", "title", "placeholder"]) {
      const value = el.getAttribute(attr);
      if (value && UNIQUE_GLOBAL.has(value)) return true;
    }

    if (el.closest(".mindmap-mode")) {
      // Never touch user-authored note content. UI placeholders/buttons are explicit exceptions.
      if (el.closest(".mm-body-render, .mm-body-input")) return false;
      if (el.closest(".mm-text") && !el.closest(".mm-placeholder")) return false;
      return true;
    }

    if (el.closest(".mm-block-dialog")) {
      if (el.closest(".mm-body-render, .mm-body-input")) return false;
      return true;
    }

    if (el.closest(".mm-shortcut")) return true;
    if (el.closest(".notice")) return true;

    const menu = el.closest(".menu");
    if (menu) return this.isMindmapMenu(menu);

    const suggestions = el.closest(".suggestion-container");
    if (suggestions && candidate && (UNIQUE_GLOBAL.has(candidate) || candidate.startsWith("Mindmap Mode: "))) {
      return true;
    }

    return false;
  }

  isMindmapMenu(menu) {
    const text = menu.textContent || "";
    if (MENU_MARKERS.some((marker) => text.includes(marker))) return true;
    return this.app.workspace.getMostRecentLeaf?.()?.view?.getViewType?.() === "mindmap-mode-view";
  }

  translateSettingsIfOpen() {
    const candidates = document.querySelectorAll(
      ".modal.mod-settings .vertical-tab-content, .modal.mod-settings .vertical-tab-content-container, .modal.mod-settings .setting-tab"
    );

    for (const root of candidates) {
      const names = Array.from(root.querySelectorAll(".setting-item-name"));
      const isMindmapSettings = names.some((el) => {
        const text = (el.textContent || "").trim();
        return text === "Nodes come from" || text === "节点来源" || text === "Remember fold state" || text === "记住折叠状态";
      });
      if (isMindmapSettings) this.translateTree(root, true);
    }
  }
};
