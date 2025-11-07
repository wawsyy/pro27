# 如何显示第三个链接（标准生产域名）

## 🔍 问题诊断

从你的截图可以看到：
- ✅ `clothing-zeta-ashy.vercel.app` 已经配置为 Production
- ❌ 但这是**预览部署链接**（包含哈希值 `zeta-ashy`），不是标准生产域名
- ❌ 标准生产域名 `clothing.vercel.app` **还没有添加**

## 💡 解决方案

### 添加标准生产域名 `clothing.vercel.app`

`clothing-zeta-ashy.vercel.app` 和 `clothing.vercel.app` 是**两个不同的域名**：

1. **`clothing-zeta-ashy.vercel.app`** 
   - 预览部署链接（固定，不会自动更新）
   - 可以设置为 Production，但仍然指向旧的提交

2. **`clothing.vercel.app`** ⭐
   - 标准生产域名（Vercel 自动提供）
   - 自动指向最新的生产部署
   - 这是会显示第三个链接（地球图标）的域名

## 📝 步骤：添加标准生产域名

### 步骤 1：打开域名设置

1. 访问：https://vercel.com/dashboard
2. 选择项目：`clothing`
3. 点击 **Settings** → **Domains**
4. 你应该看到当前只有 `clothing-zeta-ashy.vercel.app`

### 步骤 2：添加 `clothing.vercel.app`

1. 在 **Production Domains** 部分
2. 点击 **Add Domain** 按钮（黑色按钮）
3. 在输入框中输入：**`clothing.vercel.app`**
   - ⚠️ 注意：不带任何哈希值或特殊字符
   - 格式：`[项目名].vercel.app`
4. 点击 **Add** 或按回车
5. 等待几秒钟让配置生效

### 步骤 3：验证第三个链接显示

1. 回到项目首页（点击项目名称）
2. 找到最新的部署卡片（标记为 "Latest"）
3. 点击部署卡片查看详情
4. 在 **Domains** 部分，你应该看到三个链接：
   - 🌐 **`clothing.vercel.app`** ← **这就是第三个链接（地球图标）** ⭐
   - 🌿 `clothing-git-main-xxx.vercel.app`
   - 🔗 `clothing-xxx-yyy.vercel.app`

### 步骤 4：让 `clothing-zeta-ashy.vercel.app` 指向新版本

**选项 A：删除旧域名，使用新域名（推荐）**
1. 在 Domains 设置页面
2. 找到 `clothing-zeta-ashy.vercel.app`
3. 点击右侧的 **Edit** 或 **Remove**
4. 选择 **Remove** 删除它
5. 以后只使用 `clothing.vercel.app`

**选项 B：保留旧域名，但指向最新部署**
1. 在 Domains 设置页面
2. 找到 `clothing-zeta-ashy.vercel.app`
3. 点击 **Edit**
4. 在 Environment 设置中，选择 **Production**
5. 确保它指向最新的部署

## ✅ 预期结果

添加 `clothing.vercel.app` 后：

1. ✅ 在部署详情页会显示三个链接
2. ✅ 第三个链接是 🌐 `clothing.vercel.app`（地球图标）
3. ✅ 访问 `clothing.vercel.app` 会显示**黄色背景**（最新版本）
4. ✅ 每次新部署后，`clothing.vercel.app` 会自动更新

## 🎯 关键区别

| 域名类型 | 示例 | 特点 |
|---------|------|------|
| 预览部署链接 | `clothing-zeta-ashy.vercel.app` | 固定，指向特定提交 |
| 分支部署链接 | `clothing-git-main-xxx.vercel.app` | 随分支更新 |
| **标准生产域名** | **`clothing.vercel.app`** ⭐ | **自动更新到最新部署** |

## 🔧 如果还是看不到第三个链接

如果添加 `clothing.vercel.app` 后还是看不到第三个链接：

1. **检查部署状态**
   - 确保最新部署是 **Production** 环境
   - 如果不是，点击部署 → **Promote to Production**

2. **等待几分钟**
   - DNS 配置可能需要几分钟生效

3. **刷新页面**
   - 在部署详情页刷新浏览器

4. **检查域名设置**
   - 确保 `clothing.vercel.app` 显示为 "Valid Configuration"
   - 确保状态是 "Production"

