const DISTINCT_COLORS = ['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#3b82f6', '#f97316', '#14b8a6', '#a855f7', '#64748b', '#84cc16'];

const WALLET_TYPES = {
    business: {
        id: 'business',
        name: 'กิจการ / หน้าร้าน',
        badgeName: 'กิจการ',
        icon: 'fa-store',
        headerGradient: 'from-emerald-600 to-teal-700 dark:from-emerald-950 dark:to-teal-950',
        fabColor: 'bg-emerald-600',
        incomeCardGradient: 'from-emerald-500 to-teal-600',
        bucketCardGradient: 'from-slate-900 to-slate-800',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700',
        isBusiness: true
    },
    personal: {
        id: 'personal',
        name: 'ส่วนตัว / ครอบครัว',
        badgeName: 'ส่วนตัว',
        icon: 'fa-user',
        headerGradient: 'from-blue-600 to-indigo-800 dark:from-blue-950 dark:to-indigo-950',
        fabColor: 'bg-blue-600',
        incomeCardGradient: 'from-blue-500 to-indigo-600',
        bucketCardGradient: 'from-slate-900 to-indigo-950',
        badgeClass: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-700',
        isBusiness: false
    },
    savings: {
        id: 'savings',
        name: 'เงินออม / สำรอง',
        badgeName: 'เงินออม',
        icon: 'fa-piggy-bank',
        headerGradient: 'from-purple-600 to-violet-800 dark:from-purple-950 dark:to-violet-950',
        fabColor: 'bg-purple-600',
        incomeCardGradient: 'from-purple-500 to-violet-600',
        bucketCardGradient: 'from-slate-900 to-purple-950',
        badgeClass: 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-700',
        isBusiness: false
    },
    online: {
        id: 'online',
        name: 'ธุรกิจออนไลน์ / เสริม',
        badgeName: 'ออนไลน์',
        icon: 'fa-globe',
        headerGradient: 'from-amber-600 to-orange-700 dark:from-amber-950 dark:to-orange-950',
        fabColor: 'bg-amber-600',
        incomeCardGradient: 'from-amber-500 to-orange-600',
        bucketCardGradient: 'from-slate-900 to-stone-900',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700',
        isBusiness: false
    }
};

const categoryPresets = {
    business: {
        income: [
            { id: 'ยอดขายหน้าร้าน', name: 'ยอดขายหน้าร้าน / อาหาร' },
            { id: 'sales_drink', name: 'ยอดขายเครื่องดื่ม' },
            { id: 'other_income', name: 'รายรับอื่นๆ ของร้าน' }
        ],
        expense: [
            { id: 'วัตถุดิบและของใช้', name: 'วัตถุดิบและของใช้' },
            { id: 'เนื้อสัตว์', name: 'เนื้อสัตว์ (ไก่, หนังไก่, ฯลฯ)' },
            { id: 'ข้าว/แป้ง', name: 'ข้าว / แป้ง / เครื่องข้าวหมก' },
            { id: 'เครื่องปรุง/วัตถุดิบอื่นๆ', name: 'เครื่องปรุง / หอมแดง / น้ำมัน / น้ำตาล' },
            { id: 'ของสด', name: 'ของสด / ผัก' },
            { id: 'บรรจุภัณฑ์/ค่าใช้จ่ายอื่นๆ', name: 'บรรจุภัณฑ์ / น้ำแข็ง / แก๊ส / กล่อง' },
            { id: 'โฆษณา', name: 'โฆษณา / การตลาด' },
            { id: 'ปิด', name: 'ค่าใช้จ่ายเบ็ดเตล็ด' }
        ],
        transfer: [
            { id: 'โอนย้ายเงิน', name: 'โอนย้ายเงินข้ามกระเป๋า' },
            { id: 'ถอนกำไรส่วนตัว', name: 'ถอนกำไรไปกระเป๋าส่วนตัว' },
            { id: 'โอนเข้าเงินออม', name: 'โอนเข้ากระเป๋าเงินออม' }
        ]
    },
    personal: {
        income: [
            { id: 'เงินเดือน', name: 'เงินเดือน / ค่าจ้าง' },
            { id: 'เงินปันผลร้าน', name: 'เงินปันผลจากร้าน / กิจการ' },
            { id: 'รายได้เสริม', name: 'รายได้เสริม / ฟรีแลนซ์' },
            { id: 'รายรับอื่นๆ', name: 'รายรับส่วนตัวอื่นๆ' }
        ],
        expense: [
            { id: 'อาหารและเครื่องดื่ม', name: 'อาหาร / เครื่องดื่มส่วนตัว' },
            { id: 'ค่าเดินทาง', name: 'ค่าเดินทาง / น้ำมันรถ' },
            { id: 'ของใช้ส่วนตัว', name: 'ของใช้ส่วนตัว / ช้อปปิ้ง' },
            { id: 'ค่าใช้จ่ายในบ้าน', name: 'ค่าน้ำ / ค่าไฟ / ค่าเน็ต / ที่พัก' },
            { id: 'ครอบครัว', name: 'ให้ครอบครัว / พ่อแม่ / บุตร' },
            { id: 'สุขภาพ/ประกัน', name: 'สุขภาพ / ยา / ประกัน' },
            { id: 'ออมเงิน/ลงทุน', name: 'ออมเงิน / ลงทุนส่วนตัว' },
            { id: 'เบ็ดเตล็ดส่วนตัว', name: 'ค่าใช้จ่ายเบ็ดเตล็ด' }
        ],
        transfer: [
            { id: 'โอนย้ายเงิน', name: 'โอนย้ายเงินข้ามกระเป๋า' },
            { id: 'โอนเข้าเงินออม', name: 'โอนเก็บเข้ากระเป๋าเงินออม' },
            { id: 'เติมเงินเข้าร้าน', name: 'เติมเงินทุนเข้าร้าน' }
        ]
    }
};

let wallets = JSON.parse(localStorage.getItem('shop_wallets')) || [{ id: 'shop_main', name: 'กระเป๋าหน้าร้านดุนญา', type: 'business' }];
wallets.forEach(w => { if(!w.type) w.type = 'business'; });

let activeWalletId = localStorage.getItem('shop_active_wallet');
if (!activeWalletId || !wallets.find(w => w.id === activeWalletId)) {
    activeWalletId = wallets[0].id;
    localStorage.setItem('shop_active_wallet', activeWalletId);
}

let allTransactions = JSON.parse(localStorage.getItem('shop_all_transactions')) || { 'shop_main': [] };
wallets.forEach(w => { if(!allTransactions[w.id]) allTransactions[w.id] = []; });

let salesChartInstance = null;
let ingredientChartInstance = null;
let dayOfWeekChartInstance = null;
let paretoChartInstance = null;

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function getTodayDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// GitHub Repo Sync
function loadGitHubSettings() {
    const token = localStorage.getItem('dunya_git_token') || '';
    const owner = localStorage.getItem('dunya_git_owner') || '';
    const repo = localStorage.getItem('dunya_git_repo') || '';
    const branch = localStorage.getItem('dunya_git_branch') || 'main';
    const path = localStorage.getItem('dunya_git_path') || 'data/backup.json';

    if (document.getElementById('ghTokenInput')) document.getElementById('ghTokenInput').value = token;
    if (document.getElementById('ghOwnerInput')) document.getElementById('ghOwnerInput').value = owner;
    if (document.getElementById('ghRepoInput')) document.getElementById('ghRepoInput').value = repo;
    if (document.getElementById('ghBranchInput')) document.getElementById('ghBranchInput').value = branch;
    if (document.getElementById('ghPathInput')) document.getElementById('ghPathInput').value = path;

    const indicator = document.getElementById('gitStatusIndicator');
    if (token && owner && repo && indicator) {
        indicator.textContent = 'เชื่อมต่อแล้ว';
        indicator.className = 'text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold';
    }
}

function saveGitHubSettingsAndSync() {
    const token = document.getElementById('ghTokenInput').value.trim();
    const owner = document.getElementById('ghOwnerInput').value.trim();
    const repo = document.getElementById('ghRepoInput').value.trim();
    const branch = document.getElementById('ghBranchInput').value.trim() || 'main';
    const path = document.getElementById('ghPathInput').value.trim() || 'data/backup.json';

    if (!token || !owner || !repo) {
        alert('กรุณากรอก GitHub Token, Owner และ Repository ให้ครบถ้วน');
        return;
    }

    localStorage.setItem('dunya_git_token', token);
    localStorage.setItem('dunya_git_owner', owner);
    localStorage.setItem('dunya_git_repo', repo);
    localStorage.setItem('dunya_git_branch', branch);
    localStorage.setItem('dunya_git_path', path);

    syncToGitHubRepo();
}

function utf8ToBase64(str) {
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function base64ToUtf8(str) {
    return decodeURIComponent(Array.prototype.map.call(window.atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

async function syncToGitHubRepo() {
    const token = localStorage.getItem('dunya_git_token') || (document.getElementById('ghTokenInput') ? document.getElementById('ghTokenInput').value.trim() : '');
    const owner = localStorage.getItem('dunya_git_owner') || (document.getElementById('ghOwnerInput') ? document.getElementById('ghOwnerInput').value.trim() : '');
    const repo = localStorage.getItem('dunya_git_repo') || (document.getElementById('ghRepoInput') ? document.getElementById('ghRepoInput').value.trim() : '');
    const branch = localStorage.getItem('dunya_git_branch') || 'main';
    const path = localStorage.getItem('dunya_git_path') || 'data/backup.json';

    if (!token || !owner || !repo) {
        openSettingsModal();
        showAlert('กรุณากรอกข้อมูล GitHub Repository ในการตั้งค่าก่อน');
        return;
    }

    showAlert('กำลังส่ง Commit ขึ้น GitHub...');

    const payloadData = {
        app: "Dunya Accounting Pro",
        updatedAt: new Date().toISOString(),
        wallets: wallets,
        allTransactions: allTransactions
    };

    const contentBase64 = utf8ToBase64(JSON.stringify(payloadData, null, 2));
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
        let sha = null;
        const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha;
        }

        const putBody = {
            message: `Backup accounting database: ${new Date().toLocaleString('th-TH')}`,
            content: contentBase64,
            branch: branch
        };
        if (sha) putBody.sha = sha;

        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
            body: JSON.stringify(putBody)
        });

        if (!putRes.ok) {
            const errObj = await putRes.json();
            throw new Error(errObj.message || 'ส่งข้อมูลขึ้น GitHub ไม่สำเร็จ');
        }

        const nowStr = new Date().toLocaleString('th-TH');
        localStorage.setItem('dunya_last_git_sync', nowStr);
        loadGitHubSettings();
        checkGitHubReminder();
        showAlert('สำรองข้อมูลขึ้น GitHub เรียบร้อยแล้ว!');
    } catch (err) {
        console.error(err);
        alert('เกิดข้อผิดพลาดในการสำรองขึ้น GitHub: ' + err.message);
    }
}

// Sync Bucket 3 to Portfolio
async function syncBucketToPortfolio() {
    const token = localStorage.getItem('dunya_git_token');
    const owner = localStorage.getItem('dunya_git_owner');
    const repo = localStorage.getItem('dunya_git_repo');
    const branch = localStorage.getItem('dunya_git_branch') || 'main';
    const path = 'data/shared_sync.json'; // Shared path

    if (!token || !owner || !repo) {
        showAlert('กรุณาตั้งค่า GitHub ในหน้าการตั้งค่าก่อน');
        return;
    }

    const netProfit = parseFloat(document.getElementById('bucket3Amount').innerText.replace(/[^0-9.-]+/g, '')) || 0;
    const payloadData = {
        profitBucket3: netProfit,
        lastUpdated: new Date().toISOString()
    };

    showAlert('กำลัง Sync ข้อมูลไปยังพอร์ตลงทุน...');

    const contentBase64 = utf8ToBase64(JSON.stringify(payloadData, null, 2));
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
        let sha = null;
        const getRes = await fetch(`${apiUrl}?ref=${branch}`, {
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha;
        }

        const putBody = {
            message: `Sync Net Profit to Portfolio: ${new Date().toLocaleString('th-TH')}`,
            content: contentBase64,
            branch: branch
        };
        if (sha) putBody.sha = sha;

        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
            body: JSON.stringify(putBody)
        });

        if (!putRes.ok) throw new Error('Sync ล้มเหลว');

        localStorage.setItem('dunya_last_portfolio_sync', new Date().toLocaleString('th-TH'));
        updatePortfolioSyncStatus();
        showAlert('Sync ข้อมูลกำไรไปพอร์ตลงทุนสำเร็จ!');
    } catch (err) {
        console.error(err);
        alert('เกิดข้อผิดพลาดในการ Sync: ' + err.message);
    }
}

function updatePortfolioSyncStatus() {
    const lastSync = localStorage.getItem('dunya_last_portfolio_sync');
    const statusEl = document.getElementById('portfolioSyncStatus');
    if (statusEl) {
        statusEl.textContent = lastSync ? `อัปเดตล่าสุด: ${lastSync}` : 'ยังไม่ได้ Sync';
    }
}

async function restoreFromGitHubRepo() {
    const token = localStorage.getItem('dunya_git_token') || (document.getElementById('ghTokenInput') ? document.getElementById('ghTokenInput').value.trim() : '');
    const owner = localStorage.getItem('dunya_git_owner') || (document.getElementById('ghOwnerInput') ? document.getElementById('ghOwnerInput').value.trim() : '');
    const repo = localStorage.getItem('dunya_git_repo') || (document.getElementById('ghRepoInput') ? document.getElementById('ghRepoInput').value.trim() : '');
    const branch = localStorage.getItem('dunya_git_branch') || 'main';
    const path = localStorage.getItem('dunya_git_path') || 'data/backup.json';

    if (!token || !owner || !repo) {
        alert('กรุณากรอก Token, Owner และ Repo ให้ครบถ้วน');
        return;
    }

    if (!confirm('ต้องการดึงข้อมูลล่าสุดจาก GitHub มาแทนที่ในเครื่องนี้ใช่หรือไม่?')) return;

    showAlert('กำลังดาวน์โหลดข้อมูลจาก GitHub...');

    try {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
        const res = await fetch(apiUrl, {
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        });

        if (!res.ok) throw new Error('ไม่พบไฟล์สำรองในตำแหน่งที่ระบุบน Repository');

        const fileJson = await res.json();
        const contentRaw = base64ToUtf8(fileJson.content.replace(/\s/g, ''));
        const backupObj = JSON.parse(contentRaw);

        if (!backupObj.wallets || !backupObj.allTransactions) throw new Error('โครงสร้างไฟล์สำรองไม่ถูกต้อง');

        wallets = backupObj.wallets;
        allTransactions = backupObj.allTransactions;

        localStorage.setItem('shop_wallets', JSON.stringify(wallets));
        localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
        localStorage.setItem('dunya_last_git_sync', new Date().toLocaleString('th-TH'));

        applyWalletThemeAndLabels();
        renderDashboard();
        closeSettingsModal();
        showAlert('ดึงข้อมูลจาก GitHub เรียบร้อยแล้ว');
    } catch (err) {
        console.error(err);
        alert('ดึงข้อมูลล้มเหลว: ' + err.message);
    }
}


function checkGitHubReminder() {
    const banner = document.getElementById('gitReminderBanner');
    const txt = document.getElementById('gitLastSyncText');
    if (!banner) return;
    const lastSync = localStorage.getItem('dunya_last_git_sync');
    if (lastSync) {
        if (txt) txt.textContent = `สำรองล่าสุด: ${lastSync}`;
        banner.classList.add('hidden');
    } else {
        banner.classList.remove('hidden');
    }
}

window.onload = function() {
    try {
        if (localStorage.getItem('shop_dark_mode') === 'true') {
            document.documentElement.classList.add('dark');
            const icon = document.getElementById('darkModeIcon');
            if (icon) icon.className = 'fa-solid fa-sun text-xs';
            const deskIcon = document.getElementById('deskDarkModeIcon');
            if (deskIcon) deskIcon.className = 'fa-solid fa-sun';
        }
        const txDateEl = document.getElementById('txDate');
        if (txDateEl) txDateEl.value = getTodayDate();
        
        const today = getTodayDate();
        const anStart = document.getElementById('anStartDate');
        const anEnd = document.getElementById('anEndDate');
        if (anStart && !anStart.value) anStart.value = today;
        if (anEnd && !anEnd.value) anEnd.value = today;

        applyWalletThemeAndLabels();
        renderDashboard();
        loadGitHubSettings();
        checkGitHubReminder();
        updatePortfolioSyncStatus();

        document.addEventListener('click', (e) => {
            const dd = document.getElementById('suggestionsDropdown');
            const input = document.getElementById('txDescription');
            if (dd && !dd.contains(e.target) && e.target !== input) dd.classList.add('hidden');
        });
    } catch(e) {
        console.error("Initialization error:", e);
    }
};

function applyWalletThemeAndLabels() {
    const current = wallets.find(w => w.id === activeWalletId) || wallets[0];
    const typeConfig = WALLET_TYPES[current.type || 'business'] || WALLET_TYPES.business;
    const isBiz = typeConfig.isBusiness;

    const header = document.getElementById('appHeader');
    if (header) header.className = `bg-gradient-to-r ${typeConfig.headerGradient} text-white shadow-md z-30 shrink-0 transition-all duration-300`;

    const fab = document.getElementById('fabButton');
    if (fab) fab.className = `lg:hidden fixed bottom-20 right-4 w-14 h-14 ${typeConfig.fabColor} active:scale-90 text-white rounded-2xl shadow-xl flex items-center justify-center z-40 transition-all border-2 border-white/20`;

    const aiBanner = document.getElementById('aiInputBanner');
    if (aiBanner) aiBanner.className = `bg-gradient-to-r ${typeConfig.headerGradient} p-4 rounded-3xl text-white shadow-md space-y-2.5 transition-all duration-300`;

    const kpiIncomeCard = document.getElementById('kpiCardIncome');
    if (kpiIncomeCard) kpiIncomeCard.className = `bg-gradient-to-br ${typeConfig.incomeCardGradient} text-white p-4 rounded-3xl shadow-sm transition-all duration-300`;

    const bucketBox = document.getElementById('bucketContainer');
    if (bucketBox) bucketBox.className = `bg-gradient-to-br ${typeConfig.bucketCardGradient} text-white p-4 sm:p-5 rounded-3xl shadow-lg space-y-3.5 transition-all duration-300`;

    document.getElementById('activeWalletTitle').textContent = current.name;
    document.getElementById('activeWalletBadge').textContent = typeConfig.badgeName;
    document.getElementById('activeWalletIcon').className = `fa-solid ${typeConfig.icon} text-white text-xs`;

    const deskTitle = document.getElementById('deskActiveWalletTitle');
    const deskType = document.getElementById('deskActiveWalletType');
    const deskIcon = document.getElementById('deskActiveWalletIcon');
    if (deskTitle) deskTitle.textContent = current.name;
    if (deskType) deskType.textContent = typeConfig.name;
    if (deskIcon) deskIcon.className = `fa-solid ${typeConfig.icon} text-sm`;

    if (isBiz) {
        document.getElementById('kpiIncomeLabel').textContent = 'ยอดขายรวม';
        document.getElementById('kpiIncomeSub').textContent = 'รายรับทั้งหมดของร้าน';
        document.getElementById('kpiExpenseLabel').textContent = 'ต้นทุน & รายจ่าย';
        document.getElementById('kpiExpenseSub').textContent = 'วัตถุดิบ + ค่าใช้จ่ายร้าน';
        document.getElementById('kpiProfitLabel').textContent = 'กำไรสุทธิ (Net Profit)';
        document.getElementById('kpiBalanceLabel').textContent = 'ยอดเงินคงเหลือสะสม';
        document.getElementById('kpiBalanceSub').textContent = 'เงินหมุนเวียนจริง';
        document.getElementById('formIncomeLabel').textContent = 'รายรับ (ยอดขาย)';
        document.getElementById('formExpenseLabel').textContent = 'รายจ่าย / ต้นทุน';
        document.getElementById('reconcileTag').textContent = 'ปิดกะหน้าร้าน';

        document.getElementById('bucketModuleTitle').innerHTML = '<i class="fa-solid fa-piggy-bank text-amber-400 mr-1.5"></i> แผนจัดสรรเงิน 3 กอง (3-Bucket Allocation)';
        document.getElementById('bucketModuleDesc').textContent = 'คำนวณแบ่งสรรจากยอดจ่ายจริง & กำไรคงเหลือของร้าน';
        document.getElementById('bucketBadge').textContent = 'อิงยอดจริง';
        document.getElementById('bucket1Title').innerHTML = '<i class="fa-solid fa-cart-shopping mr-1"></i> กอง 1: ทุนวัตถุดิบ';
        document.getElementById('bucket1Desc').textContent = 'คืนทุนของสด/วัตถุดิบ';
        document.getElementById('bucket2Title').innerHTML = '<i class="fa-solid fa-fire-burner mr-1"></i> กอง 2: ค่าใช้จ่ายคงที่';
        document.getElementById('bucket2Desc').textContent = 'หักจ่ายค่าแก๊ส ถุง กล่อง';
        document.getElementById('bucket3Title').innerHTML = '<i class="fa-solid fa-vault mr-1"></i> กอง 3: กำไรคงเหลือ';
        document.getElementById('bucket3Desc').textContent = 'ปันผล/สำรองฉุกเฉิน';
    } else {
        document.getElementById('kpiIncomeLabel').textContent = 'รายรับรวม';
        document.getElementById('kpiIncomeSub').textContent = 'เงินเดือน/รายได้ส่วนตัว';
        document.getElementById('kpiExpenseLabel').textContent = 'รายจ่ายส่วนตัวรวม';
        document.getElementById('kpiExpenseSub').textContent = 'ค่าใช้จ่ายทั้งหมด';
        document.getElementById('kpiProfitLabel').textContent = 'เงินออมสุทธิ (Net Savings)';
        document.getElementById('kpiBalanceLabel').textContent = 'ยอดเงินคงเหลือสะสม';
        document.getElementById('kpiBalanceSub').textContent = 'ยอดเงินเก็บ/คงเหลือ';
        document.getElementById('formIncomeLabel').textContent = 'รายรับ (เงินได้)';
        document.getElementById('formExpenseLabel').textContent = 'รายจ่ายส่วนตัว';
        document.getElementById('reconcileTag').textContent = 'กระทบยอดส่วนตัว';

        document.getElementById('bucketModuleTitle').innerHTML = '<i class="fa-solid fa-user-shield text-blue-400 mr-1.5"></i> แผนจัดสรรเงินส่วนตัว (50-30-20 Rule)';
        document.getElementById('bucketModuleDesc').textContent = 'จัดสรรเงินตามเป้าหมายเพื่อความมั่นคงทางการเงินส่วนบุคคล';
        document.getElementById('bucketBadge').textContent = 'ส่วนตัว/เงินออม';
        document.getElementById('bucket1Title').innerHTML = '<i class="fa-solid fa-house mr-1"></i> กอง 1: จำเป็น (Needs 50%)';
        document.getElementById('bucket1Desc').textContent = 'ค่ากินอยู่ ค่าน้ำไฟ ที่พัก สุขภาพ';
        document.getElementById('bucket2Title').innerHTML = '<i class="fa-solid fa-mug-hot mr-1"></i> กอง 2: ความสุข (Wants 30%)';
        document.getElementById('bucket2Desc').textContent = 'ช้อปปิ้ง พักผ่อน ท่องเที่ยว รางวัลชีวิต';
        document.getElementById('bucket3Title').innerHTML = '<i class="fa-solid fa-piggy-bank mr-1"></i> กอง 3: ออมเงิน (Savings 20%)';
        document.getElementById('bucket3Desc').textContent = 'เงินสำรองฉุกเฉิน / ลงทุนอนาคต';
    }

    toggleCategoryOptions();
    updateTransferTargetOptions();
}

function updateTransferTargetOptions() {
    const select = document.getElementById('transferTargetWallet');
    if (!select) return;
    select.innerHTML = '';
    const otherWallets = wallets.filter(w => w.id !== activeWalletId);
    
    if (otherWallets.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = 'ไม่มีกระเป๋าอื่นให้โอน (กรุณาสร้างกระเป๋าเพิ่ม)';
        select.appendChild(opt);
        return;
    }

    otherWallets.forEach(w => {
        const opt = document.createElement('option');
        opt.value = w.id;
        const typeName = (WALLET_TYPES[w.type] || WALLET_TYPES.business).name;
        opt.textContent = `${w.name} (${typeName})`;
        select.appendChild(opt);
    });
}

function toggleCategoryOptions() {
    const current = wallets.find(w => w.id === activeWalletId) || wallets[0];
    const isBiz = (current.type === 'business');
    const typeRadio = document.querySelector('input[name="type"]:checked');
    if (!typeRadio) return;
    const txType = typeRadio.value;
    const select = document.getElementById('txCategory');
    const transferBox = document.getElementById('transferTargetBox');
    const paymentMethodGroup = document.getElementById('paymentMethodGroup');
    if (!select) return;

    if (txType === 'transfer') {
        if (transferBox) transferBox.classList.remove('hidden');
        if (paymentMethodGroup) paymentMethodGroup.classList.add('hidden');
    } else {
        if (transferBox) transferBox.classList.add('hidden');
        if (paymentMethodGroup) paymentMethodGroup.classList.remove('hidden');
    }

    const categorySource = isBiz ? categoryPresets.business : categoryPresets.personal;
    select.innerHTML = '';
    
    const catList = categorySource[txType] || categorySource.expense;
    catList.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = cat.name;
        select.appendChild(opt);
    });
}

function openWalletModal() { 
    const m = document.getElementById('walletModal'); 
    if (m) {
        renderWalletList();
        m.classList.remove('hidden'); 
    }
}
function closeWalletModal() { 
    const m = document.getElementById('walletModal'); 
    if (m) m.classList.add('hidden'); 
}

function openSettingsModal() { 
    const m = document.getElementById('settingsModal'); 
    if (m) {
        loadGitHubSettings();
        m.classList.remove('hidden'); 
    }
}
function closeSettingsModal() { 
    const m = document.getElementById('settingsModal'); 
    if (m) m.classList.add('hidden'); 
}

function renderWalletList() {
    const container = document.getElementById('walletListContainer');
    if (!container) return;
    container.innerHTML = '';

    wallets.forEach((w) => {
        const isActive = w.id === activeWalletId;
        const txCount = (allTransactions[w.id] || []).length;
        const typeConfig = WALLET_TYPES[w.type || 'business'] || WALLET_TYPES.business;
        const isBiz = typeConfig.isBusiness;
        
        const div = document.createElement('div');
        div.className = `p-3.5 rounded-2xl border flex justify-between items-center transition ${
            isActive ? 'bg-slate-50 dark:bg-slate-800/80 border-slate-400 dark:border-slate-600 shadow-md ring-2 ring-emerald-500/50' : 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700 hover:border-slate-300'
        }`;
        
        div.innerHTML = `
            <div class="flex-1 cursor-pointer flex items-center gap-3" onclick="switchWallet('${escapeHtml(w.id)}')">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center ${isBiz ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'}">
                    <i class="fa-solid ${escapeHtml(typeConfig.icon)} text-base"></i>
                </div>
                <div>
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <p class="text-xs font-bold text-slate-800 dark:text-slate-100">${escapeHtml(w.name)}</p>
                        <span class="text-[9px] px-2 py-0.5 rounded-full font-bold border ${typeConfig.badgeClass}">${escapeHtml(typeConfig.name)}</span>
                        ${isActive ? '<span class="text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">ใช้งานอยู่</span>' : ''}
                    </div>
                    <p class="text-[10px] text-slate-400 mt-1">${txCount} รายการ • ${isBiz ? 'โหมดบัญชีกิจการ' : 'โหมดบันทึกส่วนตัว'}</p>
                </div>
            </div>
            <div class="flex items-center gap-1.5 ml-2">
                <button onclick="editWalletDetails('${escapeHtml(w.id)}')" title="แก้ไขชื่อ" class="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 transition"><i class="fa-solid fa-pen text-[10px]"></i></button>
                ${wallets.length > 1 ? `<button onclick="deleteWallet('${escapeHtml(w.id)}')" title="ลบกระเป๋า" class="w-7 h-7 flex items-center justify-center rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-500 transition"><i class="fa-solid fa-trash text-[10px]"></i></button>` : ''}
            </div>
        `;
        container.appendChild(div);
    });
}

function switchWallet(walletId) {
    activeWalletId = walletId;
    localStorage.setItem('shop_active_wallet', activeWalletId);
    applyWalletThemeAndLabels();
    renderWalletList();
    cancelEditMode();
    renderDashboard();
    closeWalletModal();
    showAlert('สลับกระเป๋าเงินเรียบร้อยแล้ว');
}

function createNewWallet() {
    const nameInput = document.getElementById('newWalletInput');
    const typeSelect = document.getElementById('newWalletTypeSelect');
    const name = nameInput.value.trim();
    const type = typeSelect ? typeSelect.value : 'business';
    
    if(!name) { alert('กรุณากรอกชื่อกระเป๋าเงิน'); return; }
    
    const newId = 'wallet_' + Date.now();
    wallets.push({ id: newId, name: name, type: type });
    allTransactions[newId] = [];
    
    localStorage.setItem('shop_wallets', JSON.stringify(wallets));
    localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
    
    nameInput.value = '';
    renderWalletList();
    updateTransferTargetOptions();
    showAlert('สร้างกระเป๋าใหม่สำเร็จ');
}

function editWalletDetails(walletId) {
    const wallet = wallets.find(w => w.id === walletId);
    if(!wallet) return;
    
    const newName = prompt("แก้ไขชื่อกระเป๋า:", wallet.name);
    if (newName && newName.trim() !== '') {
        wallet.name = newName.trim();
        const typeChoice = prompt("เลือกประเภทกระเป๋า:\n1 = 🏪 กิจการ\n2 = 👤 ส่วนตัว\n3 = เงินออม\n4 = ออนไลน์", "1");
        if (typeChoice === '2') wallet.type = 'personal';
        else if (typeChoice === '3') wallet.type = 'savings';
        else if (typeChoice === '4') wallet.type = 'online';
        else if (typeChoice === '1') wallet.type = 'business';

        localStorage.setItem('shop_wallets', JSON.stringify(wallets));
        applyWalletThemeAndLabels();
        renderWalletList();
        renderDashboard();
        showAlert('แก้ไขข้อมูลกระเป๋าสำเร็จ');
    }
}

function deleteWallet(walletId) {
    if (wallets.length <= 1) { alert("ต้องมีอย่างน้อย 1 กระเป๋า ไม่สามารถลบได้"); return; }
    if(confirm('ต้องการลบกระเป๋านี้ใช่หรือไม่? ข้อมูลจะหายไปทั้งหมด')) {
        wallets = wallets.filter(w => w.id !== walletId);
        delete allTransactions[walletId];
        localStorage.setItem('shop_wallets', JSON.stringify(wallets));
        localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
        if (activeWalletId === walletId) {
            activeWalletId = wallets[0].id;
            localStorage.setItem('shop_active_wallet', activeWalletId);
            applyWalletThemeAndLabels();
            renderDashboard();
        }
        renderWalletList();
        updateTransferTargetOptions();
        showAlert('ลบกระเป๋าเรียบร้อยแล้ว');
    }
}

function editTransaction(txId) {
    const txs = allTransactions[activeWalletId] || [];
    const tx = txs.find(t => t.id === txId);
    if (!tx) return;
    switchTab('add');
    document.getElementById('editIndex').value = tx.id;
    document.getElementById('txDate').value = tx.date || getTodayDate();
    
    let typeRadioVal = 'expense';
    if (tx.type === 'income' || tx.type === 'รายรับ') typeRadioVal = 'income';
    else if (tx.type === 'transfer' || tx.type === 'โอนออก' || tx.type === 'โอนเข้า') typeRadioVal = 'transfer';

    document.querySelector(`input[name="type"][value="${typeRadioVal}"]`).checked = true;
    document.querySelector(`input[name="paymentMethod"][value="${tx.paymentMethod === 'transfer' ? 'transfer' : 'cash'}"]`).checked = true;
    toggleCategoryOptions();
    
    document.getElementById('txCategory').value = tx.category;
    document.getElementById('txDescription').value = tx.name || '';
    document.getElementById('txAmount').value = tx.amount || '';
    document.getElementById('txQuantity').value = tx.quantity || '';
    document.getElementById('txNote').value = tx.note || '';

    document.getElementById('formTitleText').textContent = 'แก้ไขรายการ';
    document.getElementById('cancelEditBadge').classList.remove('hidden');
    document.getElementById('btnSubmitTx').textContent = 'อัปเดตรายการ';
}

function cancelEditMode() {
    document.getElementById('editIndex').value = "-1";
    document.getElementById('transactionForm').reset();
    document.getElementById('txDate').value = getTodayDate();
    toggleCategoryOptions();
    document.getElementById('formTitleText').textContent = 'เพิ่มรายการใหม่';
    document.getElementById('cancelEditBadge').classList.add('hidden');
    document.getElementById('btnSubmitTx').textContent = 'บันทึกรายการ';
}

function deleteTransaction(txId) {
    const txs = allTransactions[activeWalletId] || [];
    const targetTx = txs.find(t => t.id === txId);
    if (!targetTx) return;

    if (targetTx.transferLink && confirm('ต้องการลบรายการโอนย้ายทั้งสองกระเป๋าหรือไม่?')) {
        const linkId = targetTx.transferLink;
        allTransactions[activeWalletId] = txs.filter(t => t.id !== txId);
        wallets.forEach(w => {
            if (allTransactions[w.id]) allTransactions[w.id] = allTransactions[w.id].filter(t => t.transferLink !== linkId && t.id !== linkId);
        });
        localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
        renderDashboard();
        showAlert('ลบรายการโอนย้ายสำเร็จ');
        return;
    }

    if (confirm(`ต้องการลบรายการ "${targetTx.name}" ใช่หรือไม่?`)) {
        allTransactions[activeWalletId] = txs.filter(t => t.id !== txId);
        localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
        renderDashboard();
        showAlert('ลบรายการสำเร็จ');
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('shop_dark_mode', isDark);
    const icon = document.getElementById('darkModeIcon');
    if (icon) icon.className = isDark ? 'fa-solid fa-sun text-xs' : 'fa-solid fa-moon text-xs';
    renderDashboard();
}

function switchTab(tabId) {
    const fab = document.getElementById('fabButton');
    ['dashboard', 'analytics', 'history', 'add'].forEach(id => {
        const el = document.getElementById(`tab-${id}`);
        const btn = document.getElementById(`nav-btn-${id}`);
        const deskBtn = document.getElementById(`desk-nav-${id}`);

        if (id === tabId) {
            if (el) el.classList.remove('hidden');
            if(btn) btn.className = id === 'analytics' ? 'flex flex-col items-center flex-1 py-1 text-indigo-600 dark:text-indigo-400' : 'flex flex-col items-center flex-1 py-1 text-emerald-600 dark:text-emerald-400';
            if(deskBtn) deskBtn.className = 'w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold transition';
        } else {
            if (el) el.classList.add('hidden');
            if(btn) btn.className = 'flex flex-col items-center flex-1 py-1 text-slate-400';
            if(deskBtn) deskBtn.className = 'w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition font-medium';
        }
    });

    if (tabId === 'add') {
        if (fab) fab.classList.add('hidden');
        updateTransferTargetOptions();
    } else {
        if (fab) fab.classList.remove('hidden');
        if (document.getElementById('editIndex').value !== "-1") cancelEditMode();
        if (tabId === 'analytics') runDeepAnalytics();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleTypeChange() {
    toggleCategoryOptions();
    handleDescriptionInput({ target: document.getElementById('txDescription') });
}

function handleAiInputKey(e) { if(e.key === 'Enter') { e.preventDefault(); parseWithAI(); } }

function parseWithAI() {
    const input = document.getElementById('aiInputPrompt');
    if (!input) return;
    let text = input.value.trim();
    if(!text) return;

    let detectedType = 'expense';
    let detectedPayment = 'cash';
    let detectedAmount = 0;
    let detectedQuantity = '';
    let detectedName = '';

    if(text.includes('โอนข้าม') || text.includes('โอนไป')) { detectedType = 'transfer'; detectedPayment = 'transfer'; }
    else if(text.includes('โอน')) { detectedPayment = 'transfer'; text = text.replace(/โอน/g, ' '); }
    else if(text.includes('สด')) { detectedPayment = 'cash'; text = text.replace(/สด/g, ' '); }

    if((text.includes('ขาย') || text.includes('รายรับ') || text.includes('เงินเดือน')) && detectedType !== 'transfer') detectedType = 'income';

    const qtyRegex = /(\d+(?:\.\d+)?)\s*(ตัว|กก|กิโล|กรัม|แพ็ค|ถุง|ขวด|ลัง|ชิ้น)/i;
    const qtyMatch = text.match(qtyRegex);
    if(qtyMatch) { detectedQuantity = qtyMatch[0].trim(); text = text.replace(qtyMatch[0], ' '); }

    const allNumbers = text.match(/\d+(?:\.\d+)?/g);
    if(allNumbers && allNumbers.length > 0) {
        detectedAmount = parseFloat(allNumbers[allNumbers.length - 1]);
        text = text.replace(allNumbers[allNumbers.length - 1], ' ');
    }

    detectedName = text.replace(/(บาท|ซื้อ|ขาย|ยอด|จ่าย|ค่า)/g, ' ').trim() || 'รายการ';

    document.querySelector(`input[name="type"][value="${detectedType}"]`).checked = true;
    document.querySelector(`input[name="paymentMethod"][value="${detectedPayment}"]`).checked = true;
    toggleCategoryOptions();

    document.getElementById('txDescription').value = detectedName;
    if(detectedAmount > 0) document.getElementById('txAmount').value = detectedAmount;
    if(detectedQuantity) document.getElementById('txQuantity').value = detectedQuantity;
    showAlert('AI แยกข้อมูลเรียบร้อย');
}

function handleDescriptionFocus() { renderSuggestions(document.getElementById('txDescription').value); }
function handleDescriptionInput(e) { renderSuggestions(e.target.value); }

function renderSuggestions(q) {
    const dd = document.getElementById('suggestionsDropdown');
    const typeRadio = document.querySelector('input[name="type"]:checked');
    if (!dd || !typeRadio) return;
    const type = typeRadio.value;
    const txs = allTransactions[activeWalletId] || [];
    const matched = txs.filter(t => t.type === type && (t.name || '').includes(q)).slice(0, 5);

    if(!matched.length) { dd.classList.add('hidden'); return; }
    dd.innerHTML = '';
    matched.forEach(item => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'w-full text-left p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs rounded-xl flex justify-between';
        btn.innerHTML = `<span>${escapeHtml(item.name)}</span><span class="text-emerald-600 font-bold num-font">฿${item.amount}</span>`;
        btn.onclick = () => {
            document.getElementById('txDescription').value = item.name;
            document.getElementById('txAmount').value = item.amount;
            if(item.quantity) document.getElementById('txQuantity').value = item.quantity;
            dd.classList.add('hidden');
        };
        dd.appendChild(btn);
    });
    dd.classList.remove('hidden');
}

function saveTransaction(e) {
    e.preventDefault();
    const editId = document.getElementById('editIndex').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const paymentMethod = type === 'transfer' ? 'transfer' : document.querySelector('input[name="paymentMethod"]:checked').value;
    const date = document.getElementById('txDate').value;
    const category = document.getElementById('txCategory').value;
    const description = document.getElementById('txDescription').value.trim();
    const amount = parseFloat(document.getElementById('txAmount').value);
    const quantity = document.getElementById('txQuantity').value.trim();
    const note = document.getElementById('txNote').value.trim();

    if(!allTransactions[activeWalletId]) allTransactions[activeWalletId] = [];

    if (type === 'transfer') {
        const targetWalletId = document.getElementById('transferTargetWallet').value;
        if (!targetWalletId) { alert('กรุณาเลือกกระเป๋าปลายทาง'); return; }
        const sourceWallet = wallets.find(w => w.id === activeWalletId);
        const targetWallet = wallets.find(w => w.id === targetWalletId);
        const transferLinkId = 'link_' + Date.now();

        allTransactions[activeWalletId].push({
            id: 'tx_out_' + Date.now(), date, type: 'โอนออก', isTransfer: true, transferLink: transferLinkId,
            paymentMethod: 'transfer', category: category || 'โอนย้ายเงิน', name: description || `โอนไป ${targetWallet.name}`, amount, note
        });

        if (!allTransactions[targetWalletId]) allTransactions[targetWalletId] = [];
        allTransactions[targetWalletId].push({
            id: 'tx_in_' + Date.now(), date, type: 'โอนเข้า', isTransfer: true, transferLink: transferLinkId,
            paymentMethod: 'transfer', category: 'รับโอนเงิน', name: description || `รับโอนจาก ${sourceWallet.name}`, amount, note
        });
        allTransactions[targetWalletId].sort((a, b) => new Date(b.date) - new Date(a.date));
        showAlert('โอนข้ามกระเป๋าสำเร็จ');
    } else {
        if (editId !== "-1") {
            const idx = allTransactions[activeWalletId].findIndex(t => t.id === editId);
            if (idx !== -1) {
                allTransactions[activeWalletId][idx] = { id: editId, date, type, paymentMethod, category, name: description, quantity, amount, note };
                showAlert('อัปเดตรายการเรียบร้อย');
            }
        } else {
            allTransactions[activeWalletId].push({ id: 'tx_' + Date.now(), date, type, paymentMethod, category, name: description, quantity, amount, note });
            showAlert('บันทึกสำเร็จ');
        }
    }

    allTransactions[activeWalletId].sort((a, b) => new Date(b.date) - new Date(a.date));
    localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
    
    cancelEditMode();
    renderDashboard();
    document.getElementById('txDescription').focus();
}

function renderDashboard() {
    try {
        const currentWallet = wallets.find(w => w.id === activeWalletId) || wallets[0];
        const isBiz = (currentWallet.type === 'business');
        const filtered = filterTransactions();

        let totalRevenue = 0, totalExpense = 0, cashIn = 0, cashOut = 0, transferIn = 0, transferOut = 0;
        let bucket1Cost = 0, bucket2Cost = 0;

        let walletCashIn = 0, walletCashOut = 0, walletTransferIn = 0, walletTransferOut = 0;
        (allTransactions[activeWalletId] || []).forEach(tx => {
            const amt = parseFloat(tx.amount) || 0;
            const pMethod = tx.paymentMethod || 'cash';
            if (['income', 'รายรับ', 'โอนเข้า'].includes(tx.type)) {
                if (pMethod === 'transfer') walletTransferIn += amt; else walletCashIn += amt;
            } else if (['expense', 'รายจ่าย', 'โอนออก'].includes(tx.type)) {
                if (pMethod === 'transfer') walletTransferOut += amt; else walletCashOut += amt;
            }
        });
        const actualWalletBalance = (walletCashIn + walletTransferIn) - (walletCashOut + walletTransferOut);

        filtered.forEach(tx => {
            const amt = parseFloat(tx.amount) || 0;
            const pMethod = tx.paymentMethod || 'cash';
            if (['income', 'รายรับ'].includes(tx.type)) {
                totalRevenue += amt;
                if (pMethod === 'transfer') transferIn += amt; else cashIn += amt;
            } else if (['expense', 'รายจ่าย'].includes(tx.type)) {
                totalExpense += amt;
                if (pMethod === 'transfer') transferOut += amt; else cashOut += amt;

                const cat = tx.category || '';
                if (['เนื้อสัตว์', 'ข้าว/แป้ง', 'เครื่องปรุง/วัตถุดิบอื่นๆ', 'วัตถุดิบ/ของสด', 'ของสด', 'วัตถุดิบและของใช้', 'อาหารและเครื่องดื่ม', 'ค่าเดินทาง', 'ค่าใช้จ่ายในบ้าน'].includes(cat)) {
                    bucket1Cost += amt;
                } else if (cat !== 'โอนย้ายเงิน') {
                    bucket2Cost += amt;
                }
            }
        });

        const netProfit = totalRevenue - totalExpense;
        const margin = totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(1) : 0;

        document.getElementById('kpiRevenue').textContent = formatCurrency(totalRevenue);
        document.getElementById('kpiExpense').textContent = formatCurrency(totalExpense);
        document.getElementById('kpiProfit').textContent = formatCurrency(netProfit);
        document.getElementById('kpiProfitMargin').textContent = isBiz ? `อัตรากำไร: ${margin}%` : `อัตราการออม: ${margin}%`;
        document.getElementById('kpiWalletBalance').textContent = formatCurrency(actualWalletBalance);

        document.getElementById('kpiCashNet').textContent = formatCurrency(cashIn - cashOut);
        document.getElementById('kpiCashDetail').textContent = `เข้า +${formatNumber(cashIn)} | ออก -${formatNumber(cashOut)}`;
        document.getElementById('kpiTransferNet').textContent = formatCurrency(transferIn - transferOut);
        document.getElementById('kpiTransferDetail').textContent = `เข้า +${formatNumber(transferIn)} | ออก -${formatNumber(transferOut)}`;

        const displayProfit = netProfit > 0 ? netProfit : 0;
        document.getElementById('bucket1Amount').textContent = formatCurrency(bucket1Cost);
        document.getElementById('bucket2Amount').textContent = formatCurrency(bucket2Cost);
        document.getElementById('bucket3Amount').textContent = formatCurrency(displayProfit);

        if (totalRevenue > 0) {
            document.getElementById('bucket1Pct').textContent = `${((bucket1Cost / totalRevenue) * 100).toFixed(1)}%`;
            document.getElementById('bucket2Pct').textContent = `${((bucket2Cost / totalRevenue) * 100).toFixed(1)}%`;
            document.getElementById('bucket3Pct').textContent = `${((displayProfit / totalRevenue) * 100).toFixed(1)}%`;
        } else {
            document.getElementById('bucket1Pct').textContent = '0%';
            document.getElementById('bucket2Pct').textContent = '0%';
            document.getElementById('bucket3Pct').textContent = '0%';
        }

        renderHistoryList(filtered);
        renderCharts(filtered);
    } catch(e) { console.error(e); }
}

function changeDateFilter() {
    const filter = document.getElementById('dateFilter').value;
    document.getElementById('customDateRange').classList.toggle('hidden', filter !== 'custom');
    renderDashboard();
}

function filterTransactions() {
    const txs = allTransactions[activeWalletId] || [];
    const filterType = document.getElementById('typeFilter').value;
    const searchQuery = (document.getElementById('searchInput').value || '').toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;

    const now = new Date();
    const todayStr = getTodayDate();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const mondayStr = `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
    const sundayStr = `${sunday.getFullYear()}-${String(sunday.getMonth() + 1).padStart(2, '0')}-${String(sunday.getDate()).padStart(2, '0')}`;

    return txs.filter(tx => {
        if (filterType === 'income' && !['income', 'รายรับ', 'โอนเข้า'].includes(tx.type)) return false;
        if (filterType === 'expense' && !['expense', 'รายจ่าย', 'โอนออก'].includes(tx.type)) return false;
        if (filterType === 'transfer' && !['transfer', 'โอนเข้า', 'โอนออก'].includes(tx.type)) return false;

        if (searchQuery && !(tx.name || '').toLowerCase().includes(searchQuery) && !(tx.category || '').toLowerCase().includes(searchQuery)) return false;

        const txDate = tx.date || '';
        if (dateFilter === 'today' && txDate !== todayStr) return false;
        if (dateFilter === 'thisWeek' && (txDate < mondayStr || txDate > sundayStr)) return false;
        if (dateFilter === 'thisMonth' && txDate.substring(0, 7) !== todayStr.substring(0, 7)) return false;
        if (dateFilter === 'custom') {
            const s = document.getElementById('startDate').value;
            const e = document.getElementById('endDate').value;
            if (s && txDate < s) return false;
            if (e && txDate > e) return false;
        }
        return true;
    });
}

function renderHistoryList(txs) {
    const list = document.getElementById('transactionList');
    const empty = document.getElementById('emptyState');
    if (!list) return;
    list.innerHTML = '';
    if (!txs.length) { empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');

    txs.forEach(tx => {
        const isIncome = ['income', 'รายรับ', 'โอนเข้า'].includes(tx.type);
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-slate-900 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex justify-between items-center text-xs shadow-sm';
        card.innerHTML = `
            <div class="flex-1 pr-2">
                <p class="font-bold text-slate-800 dark:text-slate-100">${escapeHtml(tx.name)} ${tx.quantity ? `(${escapeHtml(tx.quantity)})` : ''}</p>
                <p class="text-[10px] text-slate-400 mt-1">${escapeHtml(tx.date)} • ${escapeHtml(tx.category)}</p>
            </div>
            <div class="flex items-center gap-3">
                <p class="font-bold text-sm num-font ${isIncome ? 'text-emerald-600' : 'text-amber-600'}">${isIncome ? '+' : '-'}${formatNumber(tx.amount)} ฿</p>
                <div class="flex items-center gap-1">
                    <button onclick="editTransaction('${escapeHtml(tx.id)}')" class="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800"><i class="fa-solid fa-pen text-[11px]"></i></button>
                    <button onclick="deleteTransaction('${escapeHtml(tx.id)}')" class="w-7 h-7 flex items-center justify-center rounded-lg bg-rose-50 text-rose-500"><i class="fa-solid fa-trash text-[11px]"></i></button>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function renderCharts(txs) {
    const salesCanvas = document.getElementById('salesChart');
    if (salesCanvas) {
        const dateMap = {};
        txs.forEach(t => {
            if(!dateMap[t.date]) dateMap[t.date] = { income: 0, expense: 0 };
            if(['income', 'รายรับ'].includes(t.type)) dateMap[t.date].income += parseFloat(t.amount) || 0;
            else if(['expense', 'รายจ่าย'].includes(t.type)) dateMap[t.date].expense += parseFloat(t.amount) || 0;
        });
        const dates = Object.keys(dateMap).sort();
        if(salesChartInstance) salesChartInstance.destroy();
        salesChartInstance = new Chart(salesCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: dates.length ? dates : ['ไม่มีข้อมูล'],
                datasets: [
                    { label: 'รายรับ', data: dates.map(d => dateMap[d].income), backgroundColor: '#10b981', borderRadius: 4 },
                    { label: 'รายจ่าย', data: dates.map(d => dateMap[d].expense), backgroundColor: '#f59e0b', borderRadius: 4 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const ingCanvas = document.getElementById('ingredientChart');
    if (ingCanvas) {
        const catMap = {};
        txs.filter(t => ['expense', 'รายจ่าย'].includes(t.type)).forEach(t => {
            const c = t.category || 'ทั่วไป';
            catMap[c] = (catMap[c] || 0) + (parseFloat(t.amount) || 0);
        });
        const sorted = Object.entries(catMap).sort((a,b) => b[1] - a[1]);
        if(ingredientChartInstance) ingredientChartInstance.destroy();
        ingredientChartInstance = new Chart(ingCanvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: sorted.map(i => i[0]),
                datasets: [{ data: sorted.map(i => i[1]), backgroundColor: DISTINCT_COLORS.slice(0, sorted.length) }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }
}

function changeAnalyticsPeriod() { runDeepAnalytics(); }
function runDeepAnalytics() {
    const txs = allTransactions[activeWalletId] || [];
    let rev = 0, exp = 0;
    txs.forEach(t => {
        if(['income', 'รายรับ'].includes(t.type)) rev += parseFloat(t.amount) || 0;
        else if(['expense', 'รายจ่าย'].includes(t.type)) exp += parseFloat(t.amount) || 0;
    });
    document.getElementById('anCostRatio').textContent = rev > 0 ? `${((exp/rev)*100).toFixed(1)}%` : '0%';
}

// ส่งออก Excel มาตรฐาน 4 ชีท
function exportAccountingBookExcel() {
    const txs = allTransactions[activeWalletId] || [];
    if (!txs.length) { alert('ไม่มีข้อมูลสำหรับจัดทำสมุดบัญชี'); return; }

    const walletObj = wallets.find(w => w.id === activeWalletId) || { name: 'หน้าร้าน', type: 'business' };
    const sortedTxs = [...txs].sort((a, b) => new Date(a.date) - new Date(b.date));

    let totalSales = 0, totalCOGS = 0, totalOpex = 0;
    const cogsCats = ['เนื้อสัตว์', 'ข้าว/แป้ง', 'เครื่องปรุง/วัตถุดิบอื่นๆ', 'วัตถุดิบ/ของสด', 'ของสด', 'วัตถุดิบและของใช้'];

    sortedTxs.forEach(t => {
        const amt = parseFloat(t.amount) || 0;
        if (['income', 'รายรับ'].includes(t.type)) totalSales += amt;
        else if (['expense', 'รายจ่าย'].includes(t.type)) {
            if (cogsCats.includes(t.category)) totalCOGS += amt;
            else totalOpex += amt;
        }
    });

    const plRows = [
        ['รายงานงบกำไรขาดทุน / สรุปรายรับรายจ่าย'],
        [`กระเป๋า: ${walletObj.name}`, '', `จัดทำเมื่อ: ${getTodayDate()}`],
        [],
        ['รายการบัญชี', 'จำนวนเงิน (บาท)', 'สัดส่วน %'],
        ['1. รายรับทั้งหมด', totalSales, '100%'],
        ['2. หัก: ต้นทุนวัตถุดิบหลัก', totalCOGS, `${totalSales > 0 ? ((totalCOGS/totalSales)*100).toFixed(1) : 0}%`],
        ['3. หัก: ค่าใช้จ่ายดำเนินงาน', totalOpex, `${totalSales > 0 ? ((totalOpex/totalSales)*100).toFixed(1) : 0}%`],
        ['4. กำไรสุทธิคงเหลือ', totalSales - (totalCOGS + totalOpex), `${totalSales > 0 ? (((totalSales - (totalCOGS + totalOpex))/totalSales)*100).toFixed(1) : 0}%`]
    ];

    const ledgerRows = [['วันที่', 'รายการ', 'ช่องทาง', 'หมวดหมู่', 'จำนวนเงิน', 'หมายเหตุ']];
    sortedTxs.forEach(t => {
        ledgerRows.push([t.date || '', t.name || '', t.paymentMethod || 'cash', t.category || '', parseFloat(t.amount) || 0, t.note || '']);
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(plRows), 'งบกำไรขาดทุน');
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(ledgerRows), 'สมุดรายรับรายจ่าย');
    XLSX.writeFile(wb, `Accounting_${walletObj.name}_${getTodayDate()}.xlsx`);
    showAlert('ส่งออกสมุดบัญชีมาตรฐานสำเร็จ');
}

// นำเข้าไฟล์ Excel / CSV แบบเต็มระบบ
function importModularFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        reader.onload = function(evt) {
            try {
                const data = new Uint8Array(evt.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                let count = 0;
                for (let i = 1; i < rows.length; i++) {
                    const r = rows[i];
                    if (!r || r.length === 0) continue;
                    const cleanAmt = parseFloat(String(r[4] || r[5] || 0).replace(/,/g, '')) || 0;
                    allTransactions[activeWalletId].push({
                        id: 'imp_' + Date.now() + '_' + i,
                        date: String(r[0] || getTodayDate()).trim(),
                        name: String(r[1] || 'รายการนำเข้า').trim(),
                        paymentMethod: String(r[2] || 'transfer').includes('สด') ? 'cash' : 'transfer',
                        category: String(r[3] || 'ทั่วไป').trim(),
                        type: 'expense',
                        amount: cleanAmt,
                        note: String(r[5] || '').trim()
                    });
                    count++;
                }
                saveAndRefresh(`นำเข้าสำเร็จ ${count} รายการ`);
            } catch(err) { alert('อ่านไฟล์ Excel ไม่สำเร็จ: ' + err.message); }
        };
        reader.readAsArrayBuffer(file);
    } else {
        reader.onload = function(evt) {
            try {
                const lines = evt.target.result.split(/\r?\n/).filter(l => l.trim() !== '');
                let count = 0;
                for (let i = 1; i < lines.length; i++) {
                    const cols = lines[i].split(',');
                    if (cols.length >= 4) {
                        allTransactions[activeWalletId].push({
                            id: 'imp_csv_' + Date.now() + '_' + i,
                            date: cols[0] || getTodayDate(),
                            type: cols[1] || 'expense',
                            category: cols[2] || 'ทั่วไป',
                            name: cols[3] || 'รายการนำเข้า',
                            amount: parseFloat(String(cols[5] || cols[4] || 0).replace(/,/g, '')) || 0,
                            paymentMethod: 'cash'
                        });
                        count++;
                    }
                }
                saveAndRefresh(`นำเข้าสำเร็จ ${count} รายการ`);
            } catch(err) { alert('อ่านไฟล์ไม่สำเร็จ'); }
        };
        reader.readAsText(file);
    }
}

function saveAndRefresh(msg) {
    allTransactions[activeWalletId].sort((a, b) => new Date(b.date) - new Date(a.date));
    localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
    renderDashboard();
    closeSettingsModal();
    showAlert(msg);
}

function formatCurrency(a) { return '฿' + (a || 0).toLocaleString('th-TH', { minimumFractionDigits: 2 }); }
function formatNumber(a) { return (a || 0).toLocaleString('th-TH', { minimumFractionDigits: 2 }); }
function showAlert(msg) {
    const b = document.getElementById('alertBox');
    if (b) {
        document.getElementById('alertMessage').textContent = msg;
        b.classList.remove('-translate-y-24', 'opacity-0');
        setTimeout(() => b.classList.add('-translate-y-24', 'opacity-0'), 2500);
    }
}
function clearAllHistoryData() {
    if(confirm('ลบข้อมูลทั้งหมดในกระเป๋านี้ใช่หรือไม่?')) {
        allTransactions[activeWalletId] = [];
        localStorage.setItem('shop_all_transactions', JSON.stringify(allTransactions));
        renderDashboard();
        showAlert('ล้างข้อมูลกระเป๋าเรียบร้อยแล้ว');
    }
}
