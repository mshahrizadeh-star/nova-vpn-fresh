// این فایل به‌عنوان جایگزین موقت اضافه شده چون فایل build.mjs اصلی توی مخزن رسمی Nova Proxy گم شده بود.
// چون فایل worker.js از قبل کامل و آماده توی همین مخزن وجود داره، این اسکریپت کار خاصی
// لازم نیست انجام بده - فقط باید بدون خطا تموم بشه تا مرحله‌ی build کلادفلر رد بشه.
console.log("Build step skipped: worker.js already present in repository.");
process.exit(0);
