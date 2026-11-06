import { Client, Account } from 'https://cdn.jsdelivr.net/npm/appwrite@11.0.0/+esm';

// إعداد الاتصال بـ Appwrite
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6aed0b003a8ef10212');

const account = new Account(client);

document.addEventListener('DOMContentLoaded', () => {
    // تحديد الأزرار وحقول المدخلات بدقة
    const registerBtn = document.getElementById('auth-register-btn');
    const loginBtn = document.getElementById('auth-login-btn');
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');

    // زر إنشاء حساب جديد
    if (registerBtn) {
        registerBtn.addEventListener('click', async () => {
            console.log("Register Clicked"); // لفحص الاستجابة في الـ Console
            const email = emailInput ? emailInput.value : '';
            const password = passwordInput ? passwordInput.value : '';

            try {
                await account.create('unique()', email, password);
                alert("تم إنشاء الحساب بنجاح!");
            } catch (error) {
                alert("خطأ في التسجيل: " + error.message);
            }
        });
    }

    // زر تسجيل الدخول
    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            console.log("Login Clicked"); // لفحص الاستجابة في الـ Console
            const email = emailInput ? emailInput.value : '';
            const password = passwordInput ? passwordInput.value : '';

            try {
                await account.createEmailSession(email, password);
                alert("تم تسجيل الدخول بنجاح!");
            } catch (error) {
                alert("خطأ في تسجيل الدخول: " + error.message);
            }
        });
    }
});

