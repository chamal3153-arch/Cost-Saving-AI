# 🔧 Install Git on Windows - Quick Guide

## Step 1: Download Git

1. **Go to:** https://git-scm.com/download/win
2. The download will start automatically
3. Wait for the file to download (about 50MB)

---

## Step 2: Install Git

1. **Find the downloaded file:** `Git-2.x.x-64-bit.exe` (in your Downloads folder)
2. **Double-click** to run the installer
3. **Click "Next"** through the installation wizard

### Important Settings:

**Page 1: Information**
- Click **"Next"**

**Page 2: Select Destination Location**
- Keep default location
- Click **"Next"**

**Page 3: Select Components**
- Keep defaults checked
- Click **"Next"**

**Page 4: Select Start Menu Folder**
- Keep default
- Click **"Next"**

**Page 5: Choosing the default editor**
- Choose: **"Visual Studio Code"** (if you have VS Code) or **"Notepad++"** or **"Nano"**
- Click **"Next"**

**Page 6: Adjusting your PATH environment**
- **IMPORTANT:** Select: **"Git from the command line and also from 3rd-party software"**
- This is the default, so just click **"Next"**

**Page 7: Choosing HTTPS transport backend**
- Keep default: **"Use the OpenSSL library"**
- Click **"Next"**

**Page 8: Configuring the line ending conversions**
- Keep default: **"Checkout Windows-style, commit Unix-style line endings"**
- Click **"Next"**

**Page 9: Configuring the terminal emulator**
- Keep default: **"Use MinTTY"**
- Click **"Next"**

**Page 10: Configuring extra options**
- Keep defaults checked
- Click **"Next"**

**Page 11: Configuring experimental options**
- Leave unchecked
- Click **"Install"**

4. **Wait for installation** (1-2 minutes)
5. Click **"Finish"**

---

## Step 3: Verify Installation

1. **Close** your current Command Prompt/PowerShell window
2. **Open a NEW** Command Prompt or PowerShell:
   - Press **Windows + R**
   - Type: `cmd`
   - Press **Enter**

3. **Test Git:**
   ```bash
   git --version
   ```

4. **You should see:** `git version 2.x.x`

**✅ Git is installed!**

---

## Step 4: Configure Git (First Time Only)

Run these commands (replace with YOUR information):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**Example:**
```bash
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
```

---

## Step 5: Now You Can Push to GitHub!

After Git is installed, go back to your project folder and run:

```bash
cd "C:\Users\LENOVO\scaleleap-website"
git init
git add .
git commit -m "Initial commit: Cost Saver AI website"
```

Then add your GitHub repository and push!

---

## 🆘 Troubleshooting

### Problem: "git is not recognized" after installation
**Solution:**
1. **Close and reopen** Command Prompt/PowerShell
2. Git needs a new terminal session to be recognized
3. Try `git --version` again

### Problem: Still not working
**Solution:**
1. Restart your computer
2. Try again

### Problem: Can't find the installer
**Solution:**
- Check your Downloads folder
- Or download again from: https://git-scm.com/download/win

---

## ✅ Quick Checklist

- [ ] Downloaded Git installer
- [ ] Installed Git
- [ ] Closed and reopened Command Prompt
- [ ] Verified with `git --version`
- [ ] Configured user name and email
- [ ] Ready to push to GitHub!

---

**Once Git is installed, you can push your website to GitHub!** 🚀
