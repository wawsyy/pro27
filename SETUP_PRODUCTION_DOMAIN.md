# 如何显示第三个链接（生产域名）并让旧链接指向新版本

## 🎯 目标

1. **显示第三个链接**：生产域名（🌐 地球图标）`clothing.vercel.app`
2. **替代旧链接**：虽然 `clothing-zeta-ashy.vercel.app` 不能直接修改，但可以通过使用生产域名来实现"指向新版本"的效果

## ⚡ 快速步骤（5分钟完成）

### 步骤 1：打开 Vercel Dashboard

1. 访问：https://vercel.com/dashboard
2. 选择项目：`clothing`
3. 点击 **Settings**（右上角或左侧菜单）

### 步骤 2：进入域名设置

1. 在左侧菜单点击 **Domains**
2. 你会看到域名管理页面

### 步骤 3：添加生产域名

1. 在 **Production Domains** 部分
2. 在输入框中输入：`clothing.vercel.app`
3. 点击 **Add** 或按回车
4. 等待几秒钟让配置生效

### 步骤 4：验证第三个链接

1. 回到项目首页或部署详情页
2. 点击最新的部署卡片
3. 在 **Domains** 部分，你应该看到：
   - 🌐 `clothing.vercel.app` ← **这就是第三个链接（地球图标）**
   - 🌿 `clothing-git-main-xxx.vercel.app`
   - 🔗 `clothing-xxx-yyy.vercel.app`

## 📋 详细说明

### 为什么需要第三个链接？

- **预览部署链接**（如 `clothing-zeta-ashy.vercel.app`）是**固定的**，绑定到特定提交
- **分支部署链接**会随分支更新，但 URL 会变化
- **生产域名**（第三个链接）是**固定的 URL**，但**内容会自动更新**到最新部署

### 关于旧链接 `clothing-zeta-ashy.vercel.app`

**重要**：这个链接**不能直接修改指向新版本**，因为它是预览部署的固定链接。

但是你可以：
1. ✅ **设置生产域名**：`clothing.vercel.app`（推荐）
2. ✅ **使用生产域名替代旧链接**：在所有地方使用新域名
3. ✅ **更新文档**：将 README 中的链接改为生产域名

## 📝 完整步骤

### 步骤 1：设置生产域名（显示第三个链接）

1. **访问 Vercel Dashboard**
   - 打开：https://vercel.com/dashboard
   - 登录账户

2. **进入项目设置**
   - 在项目列表中找到 `clothing` 项目
   - 点击项目名称进入项目详情

3. **进入域名设置**
   - 点击顶部菜单的 **Settings** 标签
   - 在左侧菜单选择 **Domains**

4. **添加生产域名**
   - 在 **Production Domains** 部分
   - 点击 **Add** 按钮
   - 输入域名：`clothing.vercel.app`
   - 点击 **Add** 保存

5. **验证生产域名**
   - 等待几秒钟让 DNS 配置生效
   - 在部署详情页面，你会看到第三个链接显示：
     - 🌐 `clothing.vercel.app`（这就是生产域名，地球图标）

### 步骤 2：理解链接类型

设置完成后，你会看到三种类型的链接：

1. **🌐 生产域名**（第三个链接）
   - 格式：`clothing.vercel.app`
   - 特点：始终指向最新的生产部署
   - 图标：地球图标 🌐

2. **🌿 分支部署链接**
   - 格式：`clothing-git-main-xxx.vercel.app`
   - 特点：指向 main 分支的最新部署
   - 图标：分支图标 🌿

3. **🔗 预览部署链接**
   - 格式：`clothing-xxx-yyy.vercel.app`
   - 特点：指向特定提交的预览（如 `clothing-zeta-ashy.vercel.app`）
   - 图标：链接图标 🔗

### 步骤 3：关于旧链接的处理

**重要说明**：
- `clothing-zeta-ashy.vercel.app` 是旧的预览部署链接
- 预览部署链接**不能直接修改**，因为它绑定到特定的提交
- 但你可以：
  1. **使用生产域名**：设置 `clothing.vercel.app` 作为主链接
  2. **更新文档**：将 README 中的链接改为生产域名或最新分支链接

### 步骤 4：更新文档链接

设置好生产域名后，更新 `README.md`：

```markdown
## 🚀 Live Demo

- **Web Application**: [https://clothing.vercel.app/](https://clothing.vercel.app/)
```

## ✅ 验证步骤

设置完成后：

1. **检查部署详情页**
   - 在 Vercel Dashboard 的部署列表中
   - 点击最新的部署
   - 你应该看到三个链接：
     - 🌐 `clothing.vercel.app`（生产域名）
     - 🌿 `clothing-git-main-xxx.vercel.app`（分支部署）
     - 🔗 `clothing-xxx-yyy.vercel.app`（预览部署）

2. **访问生产域名**
   - 打开：`https://clothing.vercel.app`
   - 应该显示**黄色背景**（最新版本）

3. **确认自动更新**
   - 每次推送到 `main` 分支
   - `clothing.vercel.app` 会自动指向最新的部署

## 🎨 当前版本标识

- ✅ **黄色背景** (`#ffd200`) = 最新版本
- ⚠️ **紫色背景** = 旧版本

访问 `clothing.vercel.app` 应该显示黄色背景。

## 📌 总结

- **不能直接修改** `clothing-zeta-ashy.vercel.app`（它是固定链接）
- **可以设置生产域名** `clothing.vercel.app`（第三个链接，地球图标）
- **生产域名会自动指向最新部署**
- **推荐使用生产域名**作为主链接

