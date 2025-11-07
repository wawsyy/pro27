# 如何将 `clothing-zeta-ashy.vercel.app` 设置为生产域名（地球图标）

## 🎯 目标

将 `clothing-zeta-ashy.vercel.app` 设置为生产域名，使其显示为地球图标（第三个链接），并自动指向最新部署。

## ⚠️ 重要说明

`clothing-zeta-ashy.vercel.app` 是一个**预览部署链接**（包含哈希值）。虽然可以设置为 Production，但 Vercel 可能不会将其显示为标准的"地球图标"生产域名。

**Vercel 的机制**：
- 🌐 **地球图标**通常只显示在**标准生产域名**上（如 `clothing.vercel.app`）
- 预览部署链接（即使设置为 Production）可能不显示地球图标

## ✅ 解决方案

### 方案 1：确保域名正确关联到生产部署（推荐）

1. **确认域名配置**
   - 在 Vercel Dashboard → Settings → Domains
   - 确保 `clothing-zeta-ashy.vercel.app` 显示为：
     - ✅ Valid Configuration
     - ✅ Production（向上箭头图标）

2. **关联到最新部署**
   - 在 Vercel Dashboard → Deployments
   - 找到最新的部署（标记为 "Latest"）
   - 点击部署卡片
   - 在部署详情页，检查 **Domains** 部分
   - 如果 `clothing-zeta-ashy.vercel.app` 没有显示：
     - 点击部署右上角的 **"..."** 菜单
     - 选择 **Promote to Production**
     - 或者选择 **Assign Domain** → 选择 `clothing-zeta-ashy.vercel.app`

3. **设置默认生产域名**
   - 在 Settings → Domains
   - 找到 `clothing-zeta-ashy.vercel.app`
   - 点击 **Edit**
   - 确保 Environment 设置为 **Production**
   - 保存

### 方案 2：使用域名重定向（如果方案 1 不起作用）

如果预览链接无法显示为地球图标，可以设置重定向：

1. **保留两个域名**
   - `clothing.vercel.app`（标准生产域名，显示地球图标）
   - `clothing-zeta-ashy.vercel.app`（你的自定义域名）

2. **设置重定向**
   - 在 `vercel.json` 中配置重定向规则
   - 或者使用 Vercel 的 Rewrites 功能

### 方案 3：使用自定义域名（最佳长期方案）

如果你有自己的域名，可以：

1. **添加自定义域名**
   - 在 Settings → Domains
   - 点击 **Add Domain**
   - 输入你的自定义域名（如 `production-delta.你的域名.com`）
   - 配置 DNS 记录

2. **设置为主域名**
   - 将自定义域名设置为 Production
   - 这样会显示地球图标

## 📝 详细步骤

### 步骤 1：检查当前域名状态

1. 访问：https://vercel.com/dashboard
2. 选择项目：`clothing`
3. 进入 **Settings** → **Domains**
4. 查看 `clothing-zeta-ashy.vercel.app` 的状态：
   - ✅ 应该是 "Valid Configuration"
   - ✅ 应该是 "Production"

### 步骤 2：关联到最新部署

1. 回到项目首页
2. 找到最新的部署（标记为 "Latest"）
3. 点击部署卡片
4. 在部署详情页：
   - 检查 **Domains** 部分是否包含 `clothing-zeta-ashy.vercel.app`
   - 如果没有，继续下一步

5. **手动关联域名到部署**：
   - 在部署详情页右上角，点击 **"..."** 菜单
   - 选择 **"Assign Domain"** 或 **"Promote to Production"**
   - 如果出现域名选择，选择 `clothing-zeta-ashy.vercel.app`

### 步骤 3：验证设置

1. **刷新部署详情页**
2. 在 **Domains** 部分，检查是否显示了 `clothing-zeta-ashy.vercel.app`
3. **访问域名**：
   - 打开 `https://clothing-zeta-ashy.vercel.app`
   - 应该显示**黄色背景**（最新版本）

### 步骤 4：设置自动更新

要让 `clothing-zeta-ashy.vercel.app` 自动指向最新部署：

1. **确保域名设置为 Production**
   - 在 Settings → Domains
   - `clothing-zeta-ashy.vercel.app` 应该是 Production

2. **确保最新部署是 Production**
   - 在部署详情页
   - Environment 应该显示为 **Production**
   - 如果不是，点击 **"..."** → **"Promote to Production"**

## 🔧 如果还是不显示地球图标

**重要**：预览部署链接（包含哈希值的 URL）通常**不会显示地球图标**，即使设置为 Production。

**解决方案**：

1. **添加标准生产域名** `clothing.vercel.app`：
   - 这个域名会显示地球图标
   - 自动指向最新部署
   - 在 Settings → Domains → Add Domain → 输入 `clothing.vercel.app`

2. **使用标准生产域名作为主链接**：
   - 更新所有文档，使用 `clothing.vercel.app`
   - 这个域名会自动更新

3. **保留 `clothing-zeta-ashy.vercel.app` 作为备用**：
   - 两个域名都可以访问
   - 但标准域名会显示地球图标

## 📌 总结

- `clothing-zeta-ashy.vercel.app` 可以设置为 Production
- 但可能**不会显示地球图标**（因为它是预览链接）
- **推荐**：同时添加 `clothing.vercel.app`（标准生产域名）以显示地球图标
- 两个域名都可以访问最新部署，但标准域名显示地球图标

