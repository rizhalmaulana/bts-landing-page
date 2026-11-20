/* ==========================================================================
   PT BEYOND TALENT SERVICE — Interactive & 3-Language i18n Script (ID/EN/ZH)
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "bts_lang";

  var LOCALES = {
    id: "id_ID",
    en: "en_US",
    zh: "zh_CN"
  };

  var COPY = {
    id: {
      page_title: "PT Beyond Talent Service — Integrated Business Partner Indonesia",
      page_desc: "PT Beyond Talent Service (Jakarta Selatan): mitra bisnis B2B terintegrasi untuk MICE & event, solusi IT (IoT, POS, ERP), konsultan manajemen & SDM, serta pengadaan.",
      tagline: "Integrated Business Partner",
      nav_about: "Tentang Kami",
      nav_pillars: "Pilar Bisnis",
      nav_solutions: "Solusi Digital",
      nav_why: "Keunggulan",
      nav_legal: "Legalitas",
      nav_contact: "Hubungi Kami",
      hero_h1: "Bangun Ekosistem Bisnis Anda Tanpa Repot Bersama <em>Mitra Terintegrasi.</em>",
      hero_sub: "Dari legalitas, penyediaan infrastruktur, teknologi, hingga manajemen acara, kami hadir sebagai satu pintu solusi untuk efisiensi perusahaan Anda.",
      hero_cta: "Konsultasi Gratis Sekarang",
      hero_secondary: "Jelajahi Pilar Bisnis",
      fact1_k: "Pilar Layanan",
      fact1_v: "04 Pilar Sinergis",
      fact2_k: "Pendekatan",
      fact2_v: "End-to-End B2B",
      fact3_k: "Legalitas",
      fact3_v: "PT Resmi Terdaftar",
      values_label: "Nilai Inti",
      v_b: "Kecerdasan & Kualitas",
      v_e: "Hemat Waktu & Biaya",
      v_y: "Berorientasi Hasil",
      v_o: "Proaktif & Responsif",
      v_n: "Jangkauan Luas",
      v_d: "Terus Berinovasi",
      idx_about: "01 / Tentang Kami",
      about_h2: "Tentang <em>PT Beyond Talent Service</em>",
      about_lead: "<strong>PT BEYOND TALENT SERVICE</strong> adalah perusahaan penyedia layanan terintegrasi yang berdedikasi untuk mendukung pertumbuhan bisnis dan efisiensi operasional klien.",
      hl1_t: "Solusi End-to-End",
      hl1_d: "Konsultasi Bisnis, Teknologi, hingga Manajemen Acara & Pengadaan.",
      hl2_t: "Mitra Adaptif & Sinergis",
      hl2_d: "Fleksibilitas tinggi dengan komitmen penuh terhadap kualitas inovasi.",
      hl3_t: "Menyederhanakan Kompleksitas",
      hl3_d: "Mengubah ide menjadi ekosistem bisnis yang praktis dan berdampak nyata.",
      vision_t: "Visi Kami",
      vision_d: "“Menjadi kekuatan utama dalam membangun ekosistem bisnis yang terintegrasi dan inovatif berskala nasional.”",
      mission_t: "Misi Kami",
      m1: "Memberikan Solusi End-to-End secara menyeluruh.",
      m2: "Menyederhanakan Kompleksitas Operasional lintas sektor.",
      m3: "Membangun Kemitraan B2B yang strategis & handal.",
      idx_pillars: "02 / Pilar Bisnis",
      pillars_h2: "<em>Pilar Bisnis</em> Terintegrasi Kami",
      pillars_d: "Keempat pilar kami dirancang untuk bersinergi, memastikan seluruh kebutuhan operasional Anda terpenuhi melalui satu pintu.",
      p1: "Creative, Event & Media",
      p1a: "Jasa Penyelenggara Pertemuan (MICE) dan Event Khusus.",
      p1b: "Desain Komunikasi Visual / Desain Grafis.",
      p1c: "Layanan Fotografi.",
      p2: "Technology & Digital Solutions",
      p2a: "Pengembangan Web/Platform Digital.",
      p2b: "Aktivitas Pemrograman Komputer Lainnya.",
      p2c: "Aktivitas Telekomunikasi dengan Kabel.",
      p3: "Professional Consulting & Talent",
      p3a: "Konsultasi Manajemen dan Akuntansi.",
      p3b: "Penerjemah atau Interpreter.",
      p3c: "Penempatan Pekerja & SDM.",
      p3d: "Jasa Penunjang Usaha (Balai Lelang).",
      p4: "Production, Procurement & Hospitality",
      p4a: "Perdagangan Besar (Pengadaan/Grosir).",
      p4b: "Industri Pakaian Jadi / Konveksi.",
      p4c: "Pencetakan Umum & 3D Printing.",
      p4d: "Jasa Boga / Catering.",
      idx_solutions: "03 / Solusi Digital",
      plat_h2: "Digital <em>Platforms</em> &amp; Systems",
      plat_d: "Berbagai solusi sistem cerdas yang kami kembangkan khusus untuk mendigitalisasi dan mengotomatisasi operasional bisnis Anda.",
      c1_t: "Sistem Integrasi Mesin Laundry",
      c1_d: "Sistem cerdas (IoT) untuk kontrol mesin dan kasir digital khusus bisnis laundry modern.",
      c2_t: "Pengadaan Barang Kantor",
      c2_d: "Platform e-procurement B2B cerdas untuk mempermudah instansi dalam belanja kebutuhan operasional.",
      c3_t: "Sistem POS (Point of Sales)",
      c3_d: "Aplikasi kasir mutakhir dengan sinkronisasi multi-cabang, inventori, dan laporan keuangan real-time.",
      c4_t: "Sistem ERP (Enterprise)",
      c4_d: "Software manajemen sumber daya perusahaan skala besar untuk HR, akuntansi, hingga supply chain.",
      btn_visit: "Kunjungi Website",
      idx_why: "04 / Keunggulan",
      why_h2: "Mengapa Memilih <em>BEYOND</em>?",
      w1_t: "Ekosistem Terintegrasi",
      w1_d: "Satu pintu untuk semua kebutuhan, dari legalitas hingga operasional teknologi.",
      w2_t: "Adaptif & Fleksibel",
      w2_d: "Solusi yang dirancang khusus menyesuaikan skala dan keunikan bisnis Anda.",
      w3_t: "Tenaga Ahli Profesional",
      w3_d: "Didukung oleh tim berpengalaman dengan rekam jejak industri yang terbukti.",
      w4_t: "Fokus pada Efisiensi",
      w4_d: "Optimalisasi biaya dan waktu operasional untuk pertumbuhan bisnis maksimal.",
      idx_legal: "05 / Legalitas & Sertifikasi",
      legal_h2: "Legalitas &amp; <em>Sertifikasi</em>",
      legal_d: "PT Beyond Talent Service telah terdaftar resmi dan mematuhi seluruh regulasi yang berlaku di Indonesia sebagai bentuk profesionalisme dan komitmen kami kepada mitra.",
      doc_status: "Terdaftar",
      d1: "Notaris Resmi Terdaftar",
      d2: "Pengesahan Badan Hukum",
      d3: "Nomor Induk Berusaha",
      d4: "Nomor Pokok Wajib Pajak",
      idx_contact: "06 / Korespondensi",
      contact_h2: "Mari Diskusikan <em>Bersama</em>",
      contact_lead: "Ceritakan kebutuhan bisnis Anda melalui email. Tim profesional kami akan membalas dengan solusi terbaik dalam waktu 1x24 jam.",
      wa_btn: "Chat via WhatsApp",
      lbl_email: "Email",
      lbl_addr: "Alamat",
      lbl_web: "Website",
      footer_about: "Menjadi penggerak utama dalam membangun ekosistem bisnis yang terintegrasi dan inovatif berskala nasional.",
      footer_nav: "Navigasi"
    },

    en: {
      page_title: "PT Beyond Talent Service — Integrated Business Partner Indonesia",
      page_desc: "PT Beyond Talent Service (South Jakarta): end-to-end B2B integrated business partner for MICE & events, digital IT solutions (IoT, POS, ERP), consulting & HR, and procurement.",
      tagline: "Integrated Business Partner",
      nav_about: "About Us",
      nav_pillars: "Business Pillars",
      nav_solutions: "Solutions",
      nav_why: "Why BEYOND",
      nav_legal: "Legality",
      nav_contact: "Contact Us",
      hero_h1: "Build Your Business Ecosystem Effortlessly with an <em>Integrated Partner.</em>",
      hero_sub: "From legalities, infrastructure provision, technology, to event management, we provide a one-stop solution for your company's efficiency.",
      hero_cta: "Free Consultation Now",
      hero_secondary: "Explore Business Pillars",
      fact1_k: "Service Lines",
      fact1_v: "04 Synergistic Pillars",
      fact2_k: "Approach",
      fact2_v: "End-to-End B2B",
      fact3_k: "Compliance",
      fact3_v: "Registered PT Entity",
      values_label: "Core Values",
      v_b: "Intelligence & Quality",
      v_e: "Time & Cost Efficient",
      v_y: "Results-Oriented",
      v_o: "Proactive & Responsive",
      v_n: "Strong Reach",
      v_d: "Constantly Innovating",
      idx_about: "01 / About Us",
      about_h2: "About <em>PT Beyond Talent Service</em>",
      about_lead: "<strong>PT BEYOND TALENT SERVICE</strong> is an integrated service provider dedicated to supporting our clients’ business growth and operational efficiency.",
      hl1_t: "End-to-End Solutions",
      hl1_d: "From Business Consulting and Technology to Event Management & Procurement.",
      hl2_t: "Adaptive & Synergistic Partner",
      hl2_d: "High flexibility with a full commitment to innovative quality.",
      hl3_t: "Simplifying Complexity",
      hl3_d: "Transforming ideas into a practical and highly impactful business ecosystem.",
      vision_t: "Our Vision",
      vision_d: "“To be a leading force in building an integrated and innovative business ecosystem on a national scale.”",
      mission_t: "Our Mission",
      m1: "Providing comprehensive End-to-End Solutions.",
      m2: "Simplifying cross-sector Operational Complexity.",
      m3: "Building reliable & strategic B2B Partnerships.",
      idx_pillars: "02 / Business Pillars",
      pillars_h2: "Our Integrated <em>Business Pillars</em>",
      pillars_d: "Four synergistic pillars designed to fulfill all your operational and expansion needs through a single integrated ecosystem.",
      p1: "Creative, Event & Media",
      p1a: "MICE & Special Event Organizer.",
      p1b: "Visual Communication / Graphic Design.",
      p1c: "Professional Photography Services.",
      p2: "Technology & Digital Solutions",
      p2a: "Web & Digital Platform Development.",
      p2b: "Custom Computer Programming.",
      p2c: "Wired Telecommunications Activities.",
      p3: "Professional Consulting & Talent",
      p3a: "Management & Accounting Consulting.",
      p3b: "Translator & Interpreter Services.",
      p3c: "Talent & HR Placement.",
      p3d: "Other Business Support (Auction House).",
      p4: "Production, Procurement & Hospitality",
      p4a: "Wholesale Trade & Procurement.",
      p4b: "Garment & Apparel Manufacturing.",
      p4c: "General & 3D Printing Services.",
      p4d: "Catering & Hospitality.",
      idx_solutions: "03 / Digital Solutions",
      plat_h2: "Digital <em>Platforms</em> &amp; Systems",
      plat_d: "Intelligent system solutions developed specifically to digitize and automate your business operations.",
      c1_t: "Laundry Machine Integration System",
      c1_d: "Smart IoT system for machine control and digital POS tailored for modern laundry businesses.",
      c2_t: "Office Supplies Procurement",
      c2_d: "Smart B2B e-procurement platform streamlining operational supply purchases for institutions.",
      c3_t: "POS (Point of Sales) System",
      c3_d: "Advanced POS application with multi-branch synchronization, inventory, and real-time reporting.",
      c4_t: "ERP (Enterprise) System",
      c4_d: "Large-scale enterprise resource management software for HR, accounting, and supply chain.",
      btn_visit: "Visit Website",
      idx_why: "04 / Why Choose Us",
      why_h2: "Why Choose <em>BEYOND</em>?",
      w1_t: "Integrated Ecosystem",
      w1_d: "One-stop access for all your needs, from legality to technology operations.",
      w2_t: "Adaptive & Flexible",
      w2_d: "Custom-tailored solutions designed to fit the scale and uniqueness of your business.",
      w3_t: "Expert Professionals",
      w3_d: "Backed by an experienced team with a proven industry track record.",
      w4_t: "Efficiency Driven",
      w4_d: "Optimizing operational costs and time for maximum business growth.",
      idx_legal: "05 / Legality & Certification",
      legal_h2: "Legality &amp; <em>Certification</em>",
      legal_d: "PT Beyond Talent Service is officially registered and complies with all applicable regulations in Indonesia as a testament to our professionalism and commitment to our partners.",
      doc_status: "Registered",
      d1: "Registered Notary Public",
      d2: "Legal Entity Ratification",
      d3: "Business Identification Number",
      d4: "Tax Identification Number",
      idx_contact: "06 / Correspondence",
      contact_h2: "Let's Discuss <em>Together</em>",
      contact_lead: "Tell us about your business needs via email. Our professional team will get back to you with the best solutions within 24 hours.",
      wa_btn: "Chat on WhatsApp",
      lbl_email: "Email",
      lbl_addr: "Address",
      lbl_web: "Website",
      footer_about: "The leading force in building an integrated and innovative national business ecosystem.",
      footer_nav: "Navigation"
    },

    zh: {
      page_title: "PT Beyond Talent Service — 印度尼西亚综合业务合作伙伴",
      page_desc: "PT Beyond Talent Service（雅加达南部）：一站式B2B综合业务合作伙伴，提供会展活动、数字化与IT系统（IoT、POS、ERP）、管理咨询与人才派遣及企业采购服务。",
      tagline: "综合业务合作伙伴",
      nav_about: "关于我们",
      nav_pillars: "业务支柱",
      nav_solutions: "解决方案",
      nav_why: "核心优势",
      nav_legal: "企业资质",
      nav_contact: "联系我们",
      hero_h1: "与<em>综合合作伙伴</em>一起，轻松构建您的商业生态系统。",
      hero_sub: "从合规手续、基础设施、技术到活动管理，我们为企业提升效率提供一站式解决方案。",
      hero_cta: "立即免费咨询",
      hero_secondary: "了解四大业务支柱",
      fact1_k: "核心业务",
      fact1_v: "四大协同支柱",
      fact2_k: "服务模式",
      fact2_v: "端到端 B2B 方案",
      fact3_k: "合规资质",
      fact3_v: "印尼正式注册法人",
      values_label: "核心价值观",
      v_b: "智慧与品质",
      v_e: "节省时间与成本",
      v_y: "以结果为导向",
      v_o: "积极主动、快速响应",
      v_n: "广泛的网络",
      v_d: "持续创新",
      idx_about: "01 / 关于我们",
      about_h2: "关于 <em>PT Beyond Talent Service</em>",
      about_lead: "<strong>PT BEYOND TALENT SERVICE</strong> 是一家综合服务提供商，致力于支持客户的业务增长和运营效率。",
      hl1_t: "端到端解决方案",
      hl1_d: "从商业咨询、技术到活动管理与采购。",
      hl2_t: "灵活协同的合作伙伴",
      hl2_d: "高度灵活，全力追求创新品质。",
      hl3_t: "化繁为简",
      hl3_d: "将想法转化为务实且富有成效的商业生态系统。",
      vision_t: "我们的愿景",
      vision_d: "“成为构建全国性综合创新商业生态系统的主导力量。”",
      mission_t: "我们的使命",
      m1: "提供全面的端到端解决方案。",
      m2: "简化跨行业的运营复杂性。",
      m3: "建立可靠且具战略性的B2B合作关系。",
      idx_pillars: "02 / 业务支柱",
      pillars_h2: "我们的综合<em>业务支柱</em>",
      pillars_d: "四大支柱协同运作，通过一个综合生态系统满足您的全部运营与扩展需求。",
      p1: "创意、活动与媒体",
      p1a: "MICE（会展）及特别活动策划。",
      p1b: "视觉传达／平面设计。",
      p1c: "专业摄影服务。",
      p2: "技术与数字化解决方案",
      p2a: "网站与数字平台开发。",
      p2b: "定制软件编程。",
      p2c: "有线电信业务。",
      p3: "专业咨询与人才服务",
      p3a: "管理与会计咨询。",
      p3b: "笔译与口译服务。",
      p3c: "人才与人力资源派遣。",
      p3d: "其他商业支持服务（拍卖行）。",
      p4: "生产、采购与餐饮服务",
      p4a: "批发贸易与采购。",
      p4b: "服装与制衣生产。",
      p4c: "普通印刷与3D打印服务。",
      p4d: "餐饮与接待服务。",
      idx_solutions: "03 / 数字解决方案",
      plat_h2: "数字<em>平台</em>与系统",
      plat_d: "我们专门开发的智能系统解决方案，助力企业运营数字化与自动化。",
      c1_t: "洗衣机集成系统",
      c1_d: "专为现代洗衣店打造的智能物联网系统，集设备控制与数字收银于一体。",
      c2_t: "办公用品采购",
      c2_d: "智能B2B电子采购平台，简化机构的运营物资采购。",
      c3_t: "POS（销售终端）系统",
      c3_d: "先进的收银应用，支持多门店同步、库存管理和实时报表。",
      c4_t: "ERP（企业资源计划）系统",
      c4_d: "面向大型企业的资源管理软件，涵盖人力资源、会计及供应链。",
      btn_visit: "访问网站",
      idx_why: "04 / 核心优势",
      why_h2: "为什么选择 <em>BEYOND</em>？",
      w1_t: "一体化生态系统",
      w1_d: "从合规到技术运营，一站式满足所有需求。",
      w2_t: "灵活应变",
      w2_d: "根据您的业务规模与特点量身定制的解决方案。",
      w3_t: "专业团队",
      w3_d: "由拥有丰富行业经验和成功记录的团队提供支持。",
      w4_t: "注重效率",
      w4_d: "优化运营成本与时间，实现业务最大化增长。",
      idx_legal: "05 / 企业资质与认证",
      legal_h2: "企业资质与<em>认证</em>",
      legal_d: "PT Beyond Talent Service 已正式注册，并遵守印度尼西亚所有适用法规，以体现我们的专业精神和对合作伙伴的承诺。",
      doc_status: "已注册",
      d1: "由注册公证人出具的公司章程",
      d2: "法律与人权部法人认可",
      d3: "企业识别号",
      d4: "税务登记号",
      idx_contact: "06 / 联系我们",
      contact_h2: "一起<em>聊聊吧</em>",
      contact_lead: "请通过电子邮件告诉我们您的业务需求，我们的专业团队将在24小时内为您提供最佳解决方案。",
      wa_btn: "通过 WhatsApp 咨询",
      lbl_email: "电子邮件",
      lbl_addr: "地址",
      lbl_web: "网站",
      footer_about: "构建全国性综合创新商业生态系统的主导力量。",
      footer_nav: "导航"
    }
  };

  /* --- 1. 3-Language Switcher (ID | EN | ZH) --- */
  function applyLang(lang) {
    if (!COPY[lang]) lang = "id";
    var dict = COPY[lang];

    document.documentElement.lang = lang;
    if (dict.page_title) {
      document.title = dict.page_title;
      var metaTitle = document.querySelector('meta[name="title"]');
      var ogTitle = document.querySelector('meta[property="og:title"]');
      var twTitle = document.querySelector('meta[name="twitter:title"]');
      if (metaTitle) metaTitle.setAttribute("content", dict.page_title);
      if (ogTitle) ogTitle.setAttribute("content", dict.page_title);
      if (twTitle) twTitle.setAttribute("content", dict.page_title);
    }
    if (dict.page_desc) {
      var metaDesc = document.querySelector('meta[name="description"]');
      var ogDesc = document.querySelector('meta[property="og:description"]');
      var twDesc = document.querySelector('meta[name="twitter:description"]');
      if (metaDesc) metaDesc.setAttribute("content", dict.page_desc);
      if (ogDesc) ogDesc.setAttribute("content", dict.page_desc);
      if (twDesc) twDesc.setAttribute("content", dict.page_desc);
    }
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale && LOCALES[lang]) ogLocale.setAttribute("content", LOCALES[lang]);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-bar button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  document.querySelectorAll(".lang-bar button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var params = new URLSearchParams(window.location.search);
  var queryLang = params.get("lang");
  var savedLang = null;
  try {
    savedLang = localStorage.getItem(STORAGE_KEY);
  } catch (e) {}

  if (queryLang && COPY[queryLang]) {
    applyLang(queryLang);
  } else if (savedLang && COPY[savedLang] && savedLang !== "id") {
    applyLang(savedLang);
  }

  /* --- 2. Mobile Navigation Drawer --- */
  var menuBtn = document.getElementById("menuBtn");
  var drawer = document.getElementById("mobileDrawer");

  function setDrawerOpen(open) {
    if (!menuBtn || !drawer) return;
    drawer.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", function () {
      setDrawerOpen(!drawer.classList.contains("open"));
    });

    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        setDrawerOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        setDrawerOpen(false);
        menuBtn.focus();
      }
    });
  }

  /* --- 3. Adaptive Masthead Scroll State --- */
  var masthead = document.getElementById("masthead");
  function syncHeader() {
    if (!masthead) return;
    masthead.classList.toggle("scrolled", window.scrollY > 48);
  }
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  /* --- 4. Subtle Scroll Reveal --- */
  var revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px" }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }
})();
