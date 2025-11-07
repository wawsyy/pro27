# Vercel 部署配置说明

## 🌐 设置生产域名（地球图标链接）

Vercel 部署通常有三个链接：

1. **生产域名** (Production Domain) - 🌐 地球图标
   - 格式：`项目名.vercel.app`
   - 例如：`clothing.vercel.app` 或 `production-delta-fhe.vercel.app`
   - 这是项目的**主域名**，始终指向最新的生产部署
   - **当前使用的链接**: [https://clothing-zeta-ashy.vercel.app/](https://clothing-zeta-ashy.vercel.app/)

2. **分支部署域名** (Branch Deployment)
   - 格式：`项目名-git-分支名-用户名.vercel.app`
   - 例如：`clothing-git-main-wawsyy.vercel.app`
   - 每个分支都有独立的部署域名

3. **预览部署域名** (Preview Deployment)
   - 格式：`项目名-哈希值.vercel.app`
   - 例如：`clothing-abc123def.vercel.app`
   - 每次提交都会生成新的预览域名

## 📝 设置生产域名（使用 clothing-zeta-ashy.vercel.app）

### 步骤 1：确认项目名称

根据你提供的链接 `clothing-zeta-ashy.vercel.app`，你的 Vercel 项目名称很可能是 **`clothing`**

### 步骤 2：在 Vercel Dashboard 中设置生产域名

1. **访问 Vercel Dashboard**
   - 打开：https://vercel.com/dashboard
   - 登录你的账户

2. **找到项目**
   - 在项目列表中找到名为 `clothing` 的项目（或查看当前部署的项目）
   - 点击项目进入详情页

3. **进入域名设置**
   - 点击顶部菜单的 **Settings** 标签
   - 在左侧菜单选择 **Domains**

4. **添加生产域名**
   - 在 **Production Domains** 部分
   - 你会看到域名输入框
   - 输入生产域名：`clothing.vercel.app`（这是标准的生产域名格式）
   - 点击 **Add** 或 **Save**

5. **验证域名**
   - 域名添加后，Vercel 会自动配置
   - 等待几分钟让 DNS 生效
   - 访问 `https://clothing.vercel.app` 应该能看到你的应用

### ⚠️ 关于 `clothing-zeta-ashy.vercel.app`

`clothing-zeta-ashy.vercel.app` 可能是：
- 一个预览部署的域名
- 或者是一个旧的部署域名

**推荐做法**：
- 设置生产域名为：`clothing.vercel.app`（标准格式）
- 这个域名会自动指向最新的生产部署
- 所有旧的预览域名仍然可以访问，但会显示警告信息

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 登录 Vercel
vercel login

# 进入项目目录
cd pro27

# 添加生产域名
vercel domains add clothing.vercel.app
```

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 登录 Vercel
vercel login

# 添加生产域名
vercel domains add production-delta-fhe.vercel.app
```

### 方法三：自定义域名

如果你想使用自定义域名（如 `yourdomain.com`）：

1. 在 Vercel Dashboard > Settings > Domains 中添加你的域名
2. 按照 Vercel 的提示配置 DNS 记录：
   - A 记录：指向 Vercel 的 IP
   - CNAME 记录：指向 `cname.vercel-dns.com`
3. 等待 DNS 传播（通常几分钟到几小时）

## 🔗 当前部署链接

- **当前使用**: [https://clothing-zeta-ashy.vercel.app/](https://clothing-zeta-ashy.vercel.app/)
- **项目名称**: `clothing`（根据域名推测）
- **推荐生产域名**: `clothing.vercel.app`

## ⚙️ 项目配置

- **框架**: Next.js 15.5.6
- **构建目录**: `frontend`
- **输出目录**: `frontend/.next`

## 🔗 更新 README 中的部署链接

设置好生产域名后，记得更新 `README.md` 中的链接：

```markdown
- **Web Application**: [https://production-delta-fhe.vercel.app/](https://production-delta-fhe.vercel.app/)
```

## 📌 注意事项

- 生产域名一旦设置，会自动指向 `main` 分支的最新部署
- 每次推送到 `main` 分支，生产域名会自动更新
- 预览部署不会影响生产域名
- 可以在 Vercel Dashboard 中查看所有部署域名的状态

## 🆘 常见问题

**Q: 我想继续使用 `clothing-zeta-ashy.vercel.app` 这个链接，怎么办？**
A: 这个链接已经可以正常访问。如果你想让标准的生产域名（`clothing.vercel.app`）也指向同一个部署：
   - 在 Vercel Dashboard > Settings > Domains 中添加 `clothing.vercel.app`
   - 两个域名都会指向同一个部署
   - 你可以继续在 README 中使用 `clothing-zeta-ashy.vercel.app` 或切换到 `clothing.vercel.app`

**Q: 为什么我看不到地球图标链接？**
A: 可能还没有设置生产域名。按照上面的步骤在 Settings > Domains 中添加 `clothing.vercel.app` 即可。

**Q: `clothing-zeta-ashy.vercel.app` 和 `clothing.vercel.app` 有什么区别？**
A: 
   - `clothing.vercel.app` - 标准的生产域名（地球图标链接），始终指向最新部署
   - `clothing-zeta-ashy.vercel.app` - 可能是预览部署或特定部署的域名
   - 两者都可以访问，但生产域名更稳定且是标准做法

**Q: 可以同时有多个生产域名吗？**
A: 可以，Vercel 支持多个生产域名指向同一个项目。你可以在 Settings > Domains 中添加多个域名。

**Q: 生产域名会自动更新吗？**
A: 是的，每次推送到主分支并成功部署后，生产域名会自动指向最新的部署。

**Q: 如何检查哪个是生产域名（地球图标链接）？**
A: 在 Vercel Dashboard 的部署列表中，生产域名旁边会显示 🌐 地球图标标识。

