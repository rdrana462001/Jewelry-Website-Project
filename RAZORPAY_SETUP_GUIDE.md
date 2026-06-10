# 🔧 How to Fix Razorpay Authentication Error

## Problem
```
Razorpay Order Error: {
  statusCode: 401,
  error: { code: 'BAD_REQUEST_ERROR', description: 'Authentication failed' }
}
```

This error means your Razorpay credentials are missing or invalid.

---

## ✅ Solution: Get Your Razorpay Credentials

### Step 1: Create Razorpay Account
1. Go to **https://razorpay.com/**
2. Click **"Sign Up"** button
3. Fill in your details:
   - Email address
   - Password
   - Business name
   - Phone number
4. Click **"Create Account"**
5. Verify your email

### Step 2: Complete KYC Verification
1. Log in to your Razorpay account
2. Go to **Settings → KYC & Bank Details**
3. Fill in required information:
   - Business details
   - Bank account information
   - GST number (if applicable)
4. Upload documents (PAN, Business proof)
5. Wait for verification (usually 1-2 hours)

### Step 3: Get API Keys
1. Log in to Razorpay Dashboard
2. Go to **Settings → API Keys**
3. You will see two keys:
   - **Key ID** (starts with `rzp_test_` or `rzp_live_`)
   - **Key Secret**
4. Copy both keys (they look like this):
   ```
   Key ID:     rzp_test_XXXXXXXXXXXXXXXX
   Key Secret: XXXXXXXXXXXXXXXXXXXXXXXX
   ```

---

## 🔐 Add Credentials to Your Project

### Step 1: Update .env File
Edit: `backend/.env`

```properties
MONGO_URI=mongodb://127.0.0.1:27017/luxury
JWT_SECRET=luxurysecret

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXXXXXXXX
```

**IMPORTANT:** Replace the `X`s with your actual keys from Razorpay!

### Step 2: Verify .env Format
Make sure:
- ✅ No spaces around `=`
- ✅ No quotes around values
- ✅ No trailing spaces
- ✅ Correct capitalization

---

## 🧪 Test Keys vs Live Keys

### Test Mode (For Development)
- Key ID starts with: `rzp_test_`
- Free to use
- No real charges
- For testing and development

**Test Card:** `4111 1111 1111 1111`

### Live Mode (For Production)
- Key ID starts with: `rzp_live_`
- Real charges apply
- Full verification required
- For production only

---

## 📋 Step-by-Step Testing

### 1. Update .env with Test Keys
```env
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXXXXXXXX
```

### 2. Restart Backend Server
```bash
cd backend
node server.js
```

Expected output:
```
Server Running
MongoDB Connected
```

### 3. Test Checkout
1. Start frontend: `npm run dev`
2. Add product to cart
3. Click "PROCEED TO CHECKOUT"
4. Razorpay modal should open (not error)

### 4. Complete Test Payment
In Razorpay modal:
- **Card Number:** `4111 1111 1111 1111`
- **Expiry:** Any future date (e.g., `12/25`)
- **CVV:** Any 3 digits (e.g., `123`)
- **OTP:** `123456`

Expected result:
```
✅ Payment Successful! Order placed successfully 🎉
```

---

## ❌ Common Issues & Solutions

### Issue 1: "Authentication failed" Error
**Cause:** Invalid or missing credentials

**Solution:**
1. Double-check your Key ID and Key Secret
2. Make sure there are no extra spaces
3. Verify you copied from correct dashboard section
4. Restart server after updating .env

### Issue 2: "Module not found: razorpay"
**Cause:** Razorpay package not installed

**Solution:**
```bash
cd backend
npm install razorpay
```

### Issue 3: Still Getting 401 Error
**Cause:** 
- Credentials still wrong
- .env not reloaded
- Using wrong key type

**Solution:**
```bash
# 1. Stop server (Ctrl+C)
# 2. Verify .env file has correct keys
# 3. Delete node_modules and reinstall
cd backend
rm -rf node_modules
npm install

# 4. Restart server
node server.js
```

### Issue 4: Test Keys Still Don't Work
**Possible Causes:**
1. Keys were just created (wait 5 minutes)
2. Account not verified
3. Copy-paste error

**Solution:**
1. Wait 5 minutes for keys to activate
2. Check account verification status
3. Copy keys again (carefully)
4. Verify format: `rzp_test_` (not `rzp_live_`)

---

## 🔗 Useful Razorpay Links

| Resource | URL |
|----------|-----|
| Razorpay Home | https://razorpay.com/ |
| Dashboard | https://dashboard.razorpay.com/ |
| Documentation | https://razorpay.com/docs/ |
| Test Credentials | https://razorpay.com/docs/payments/dashboard/test-mode/ |
| API Reference | https://razorpay.com/docs/api/ |

---

## 📝 Checklist

Before testing, ensure:
- [ ] Razorpay account created
- [ ] Email verified
- [ ] API keys obtained
- [ ] .env file updated with keys
- [ ] Backend restarted
- [ ] No extra spaces in .env
- [ ] Correct key format (`rzp_test_` for testing)
- [ ] Razorpay package installed: `npm install razorpay`

---

## 🎯 What Happens After You Add Keys

### Immediate
1. ✅ Error disappears
2. ✅ Backend accepts payment requests
3. ✅ Razorpay modal opens on checkout

### After Successful Payment
1. ✅ Order created in MongoDB
2. ✅ Payment ID stored
3. ✅ Cart cleared automatically
4. ✅ User redirected to dashboard

---

## 💡 Pro Tips

1. **Keep Keys Secret**
   - Never commit .env to GitHub
   - Use .gitignore to exclude it
   - Different keys for dev/production

2. **Test First**
   - Always test with `rzp_test_` keys
   - Use test card numbers
   - Verify flow works

3. **Monitor Payments**
   - Check Razorpay Dashboard
   - View all orders and payments
   - Download reports

4. **Switch to Live**
   - Only when ready
   - Update to `rzp_live_` keys
   - Test with small amounts first

---

## 🆘 Still Having Issues?

### Check Server Logs
```bash
# Terminal output should show:
Server Running
MongoDB Connected
```

If not, check:
1. Port 5000 is free
2. MongoDB is running
3. Dependencies installed

### Check Browser Console
Open DevTools (F12) → Console tab:
- Look for specific error messages
- Check network requests
- Verify API response

### Verify Environment Variables
```bash
# In backend directory, create test file:
node -e "console.log('Key ID:', process.env.RAZORPAY_KEY_ID)"
```

Should output your Key ID (not undefined)

---

**Status:** 🟢 Ready to Test
**Next:** Follow the setup steps above and test with your Razorpay test credentials!
