const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageButtons = document.querySelectorAll("[data-language]");
const page = document.body.dataset.page;
const storageKey = "c-harvest-language";
const supportedLanguages = ["zh", "en", "de"];
const htmlLangMap = {
  zh: "zh-Hant",
  en: "en",
  de: "de",
};

const translations = {
  common: {
    zh: {
      site: {
        home: "首頁",
        about: "關於我們",
        products: "產品項目",
        contact: "聯絡我們",
        primaryNav: "主要導覽",
        footerTagline: "自 1975 年起提供工業貿易採購與物流協調支援。",
        navToggleLabel: "切換導覽",
        brandHomeLabel: "C-Harvest 首頁",
        languageSwitcher: "語言切換",
      },
    },
    en: {
      site: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        primaryNav: "Primary navigation",
        footerTagline: "Sourcing and logistics coordination for industrial trade since 1975.",
        navToggleLabel: "Toggle navigation",
        brandHomeLabel: "C-Harvest home",
        languageSwitcher: "Language switcher",
      },
    },
    de: {
      site: {
        home: "Start",
        about: "Unternehmen",
        products: "Produkte",
        contact: "Kontakt",
        primaryNav: "Hauptnavigation",
        footerTagline: "Seit 1975 Unterstuetzung fuer Beschaffung und Logistik im Industriehandel.",
        navToggleLabel: "Navigation umschalten",
        brandHomeLabel: "C-Harvest Startseite",
        languageSwitcher: "Sprachauswahl",
      },
    },
  },
  pages: {
    home: {
      zh: {
        meta: {
          title: "C-Harvest Industries | 專業全球採購與物流協調",
          description:
            "C-Harvest Industries 提供金屬零件、醫藥原料與特殊化學品的專業採購支援，並提供端到端的物流協調服務。",
        },
        hero: {
          eyebrow: "自 1975 年立足台灣，佈局全球",
          title: "支援跨國採購、供應商開發與物流管理。",
          text:
            "C-Harvest Industries 專注於金屬零件、醫藥原料與特殊化學品採購。我們協助客戶與供應商對接、優化採購流程，並確保出貨進度如期達成。",
          ctaPrimary: "發起詢價",
          ctaSecondary: "了解產品領域",
        },
        metrics: {
          one: {
            value: "50+",
            label: "年的製造與採購實務經驗",
          },
          two: {
            value: "3",
            label: "大工業貿易核心產品線",
          },
          three: {
            value: "全球",
            label: "整合供應商、航運與客戶端網絡",
          },
        },
        panel: {
          label: "客戶信賴優勢",
          title: "提供長期的供應商篩選、採購整合與交付追蹤。",
          text:
            "C-Harvest 結合深厚的製造背景、優質供應商渠道與豐富的採購經驗，協助客戶精準評估供應商、整合訂單，並妥善管理物流至最終交付。",
        },
        signals: {
          one: {
            title: "節省時間成本",
            text: "依據產品規格、地區屬性與專案時程，快速精準媒合合適供應商。",
          },
          two: {
            title: "採購成本優化",
            text: "透過整合採購需求，協助客戶梳理價格結構與訂單規模。",
          },
          three: {
            title: "優質供應網絡",
            text: "深入三大產品領域，提供具競爭力與穩定性的供應商選項。",
          },
          four: {
            title: "透明物流追蹤",
            text: "即時回報訂單進度與出貨狀態，降低供應鏈不確定性。",
          },
        },
        strengths: {
          eyebrow: "核心業務價值",
          title: "C-Harvest 如何為客戶創造價值。",
          text:
            "從供應商開發到物流交付，我們介入並支援影響速度、成本與執行品質的關鍵採購節點。",
        },
        features: {
          a: {
            title: "供應商與產品精準媒合",
            text: "運用廣泛的供應網絡，為客戶篩選出符合市場定位與品質要求的最佳產品選項。",
          },
          b: {
            title: "成本結構分析與支援",
            text: "憑藉多年交易經驗與市場敏銳度，提供客觀的成本分析以輔助採購決策。",
          },
          c: {
            title: "出貨與物流全程跟進",
            text: "與船務及物流夥伴密切協調，確保客戶隨時掌握訂單與運輸進度。",
          },
        },
        domains: {
          eyebrow: "專業領域",
          title: "我們專注的三大核心產品線。",
          one: {
            title: "金屬零件",
            text: "傳承公司製造業背景，具備深厚的工業採購經驗與規格理解力。",
          },
          two: {
            title: "醫藥原料",
            text: "透過嚴謹的供應網絡，支援持續性供應與新產品開發需求。",
          },
          three: {
            title: "特殊化學品",
            text: "針對具備高專業度與特殊規格需求的工業買家，提供精準採購協調。",
          },
        },
        working: {
          eyebrow: "合作模式",
          title: "從確認需求到物流交付的標準化流程。",
        },
        steps: {
          one: {
            badge: "階段 1",
            title: "需求定義",
            text: "確認材質、目標市場、品質標準與時程規範。",
          },
          two: {
            badge: "階段 2",
            title: "網絡尋源",
            text: "啟動符合產品屬性與地區要求的供應商網絡。",
          },
          three: {
            badge: "階段 3",
            title: "條件審核",
            text: "交叉比對報價、交期與服務條款，確保方案可行性。",
          },
          four: {
            badge: "階段 4",
            title: "物流協調",
            text: "追蹤生產進度、安排船務並確認最終交付。",
          },
        },
        cta: {
          eyebrow: "下一步",
          title: "深入了解我們的企業背景、產品範疇與聯絡資訊。",
          about: "關於 C-Harvest",
          products: "探索產品",
          contact: "與我們聯繫",
        },
      },
      en: {
      meta: {
        title: "C-Harvest Industries | Professional Sourcing & Logistics Coordination",
        description:
          "C-Harvest Industries provides professional sourcing support for metal parts, pharmaceuticals, and specialty chemicals, alongside end-to-end logistics coordination.",
      },
      hero: {
        eyebrow: "Since 1975 • Taiwan-Based • Global Network",
        title: "Sourcing support for cross-border procurement and logistics.",
        text:
          "C-Harvest Industries specializes in sourcing metal parts, pharmaceutical ingredients, and specialty chemicals. We help clients connect with suppliers, streamline procurement, and ensure reliable shipment delivery.",
        ctaPrimary: "Start an Inquiry",
        ctaSecondary: "Explore Domains",
      },
      metrics: {
        one: {
          value: "50+",
          label: "Years of manufacturing and sourcing expertise",
        },
        two: {
          value: "3",
          label: "Core industrial product lines",
        },
        three: {
          value: "Global",
          label: "Supplier, vessel, and client network",
        },
      },
      panel: {
        label: "Client Advantage",
        title: "Reliable support for supplier evaluation, order consolidation, and delivery tracking.",
        text:
          "C-Harvest combines a deep manufacturing background, qualified supplier access, and consolidated purchasing experience. We help clients accurately evaluate suppliers, organize orders, and manage logistics through to final delivery.",
      },
      signals: {
        one: {
          title: "Time Efficiency",
          text: "Precise supplier matching based on product specifications, regional attributes, and project timelines.",
        },
        two: {
          title: "Cost Optimization",
          text: "Consolidating procurement needs to help clients clarify pricing structures and order volumes.",
        },
        three: {
          title: "Qualified Networks",
          text: "Deep involvement in three core domains to provide competitive and stable supplier options.",
        },
        four: {
          title: "Transparent Logistics",
          text: "Real-time updates on order progress and shipment status to reduce supply chain uncertainty.",
        },
      },
      strengths: {
        eyebrow: "Core Business Value",
        title: "How C-Harvest creates value for clients.",
        text:
          "From supplier development to final delivery, we support the critical procurement nodes that impact speed, cost, and execution quality.",
      },
      features: {
        a: {
          title: "Precise Supplier & Product Matching",
          text: "Leveraging our extensive network to filter the best product options that meet market positioning and quality requirements.",
        },
        b: {
          title: "Cost Structure Analysis",
          text: "Providing objective cost analysis based on years of transaction experience and market sensitivity to support purchasing decisions.",
        },
        c: {
          title: "End-to-End Shipment Follow-Up",
          text: "Coordinating closely with shipping and logistics partners to ensure clients always know their order and transit status.",
        },
      },
      domains: {
        eyebrow: "Professional Domains",
        title: "Our three core product lines.",
        one: {
          title: "Metal Parts",
          text: "Inheriting our manufacturing background with deep industrial sourcing experience and specification understanding.",
        },
        two: {
          title: "Pharmaceuticals",
          text: "Supporting consistent supply and new product development through a rigorous supplier network.",
        },
        three: {
          title: "Specialty Chemicals",
          text: "Providing precise procurement coordination for industrial buyers with highly specialized technical requirements.",
        },
      },
      working: {
        eyebrow: "Working Model",
        title: "Standardized process from demand confirmation to delivery.",
      },
      steps: {
        one: {
          badge: "Phase 1",
          title: "Demand Definition",
          text: "Confirm material, target market, quality standards, and schedule constraints.",
        },
        two: {
          badge: "Phase 2",
          title: "Network Sourcing",
          text: "Activate the supplier network that matches product attributes and regional requirements.",
        },
        three: {
          badge: "Phase 3",
          title: "Condition Review",
          text: "Cross-check pricing, lead times, and service terms to ensure project feasibility.",
        },
        four: {
          badge: "Phase 4",
          title: "Logistics Coordination",
          text: "Track production progress, arrange shipping, and confirm final delivery.",
        },
      },
      cta: {
        eyebrow: "Next Step",
        title: "Learn more about our corporate background, product scope, and contact details.",
        about: "About C-Harvest",
        products: "Explore Products",
        contact: "Contact Us",
      },
    },
      de: {
        meta: {
          title: "C-Harvest Industries | Professionelle globale Beschaffung & Logistik",
          description:
            "C-Harvest Industries bietet spezialisierte Beschaffungsunterstützung für Metallteile, pharmazeutische Rohstoffe und Spezialchemikalien sowie ganzheitliche Logistikkoordination.",
        },
        hero: {
          eyebrow: "Seit 1975 • Standort Taiwan • Globales Netzwerk",
          title: "Unterstützung bei grenzüberschreitender Beschaffung, Lieferantenentwicklung und Logistikmanagement.",
          text:
            "C-Harvest Industries ist spezialisiert auf die Beschaffung von Metallteilen, Pharmarohstoffen und Spezialchemikalien. Wir vernetzen Kunden mit Lieferanten, optimieren Beschaffungsprozesse und sichern die termingerechte Lieferung.",
          ctaPrimary: "Anfrage starten",
          ctaSecondary: "Kompetenzfelder entdecken",
        },
        metrics: {
          one: {
            value: "50+",
            label: "Jahre praktische Erfahrung in Fertigung und Beschaffung",
          },
          two: {
            value: "3",
            label: "Industrielle Kernproduktlinien",
          },
          three: {
            value: "Global",
            label: "Integriertes Netzwerk aus Lieferanten, Logistikern und Kunden",
          },
        },
        panel: {
          label: "Ihr Vorteil",
          title: "Zuverlässige Unterstützung bei Lieferantenbewertung, Auftragsbündelung und Lieferverfolgung.",
          text:
            "C-Harvest kombiniert einen fundierten Fertigungshintergrund mit Zugang zu qualifizierten Lieferanten und konsolidierter Beschaffungserfahrung. Wir unterstützen Sie bei der präzisen Lieferantenevaluierung, Auftragsorganisation und Logistik bis zur finalen Zustellung.",
        },
        signals: {
          one: {
            title: "Zeiteffizienz",
            text: "Präzises Lieferanten-Matching basierend auf Produktspezifikationen, regionalen Anforderungen und Projektzeitplänen.",
          },
          two: {
            title: "Kostenoptimierung",
            text: "Bündelung von Beschaffungsbedarfen zur Optimierung von Preisstrukturen und Bestellvolumina.",
          },
          three: {
            title: "Qualifizierte Netzwerke",
            text: "Tiefe Verankerung in drei Kernbereichen für wettbewerbsfähige und stabile Lieferantenoptionen.",
          },
          four: {
            title: "Transparente Logistik",
            text: "Echtzeit-Updates zum Auftragsfortschritt und Versandstatus zur Reduzierung von Unsicherheiten in der Lieferkette.",
          },
        },
        strengths: {
          eyebrow: "Unser Mehrwert",
          title: "Wie C-Harvest Mehrwert für Kunden schafft.",
          text:
            "Von der Lieferantenentwicklung bis zur finalen Lieferung betreuen wir die entscheidenden Beschaffungsknotenpunkte, die Geschwindigkeit, Kosten und Ausführungsqualität bestimmen.",
        },
        features: {
          a: {
            title: "Präzises Lieferanten- und Produkt-Matching",
            text: "Nutzung unseres weitreichenden Netzwerks, um die besten Produktoptionen herauszufiltern, die Ihren Markt- und Qualitätsanforderungen entsprechen.",
          },
          b: {
            title: "Kostenstruktur-Analyse",
            text: "Bereitstellung objektiver Kostenanalysen, basierend auf langjähriger Transaktionserfahrung und Marktsensibilität, zur Unterstützung von Einkaufsentscheidungen.",
          },
          c: {
            title: "Lückenlose Versandverfolgung",
            text: "Enge Koordination mit Reedereien und Logistikpartnern, damit Kunden jederzeit den Status ihrer Aufträge und Transporte kennen.",
          },
        },
        domains: {
          eyebrow: "Kompetenzfelder",
          title: "Unsere drei Kernproduktlinien.",
          one: {
            title: "Metallteile",
            text: "Geprägt von unserem Fertigungshintergrund, mit tiefgehender Erfahrung in der industriellen Beschaffung und einem ausgeprägten Verständnis für Spezifikationen.",
          },
          two: {
            title: "Pharmazeutika",
            text: "Sicherung der kontinuierlichen Versorgung und Unterstützung bei der Neuentwicklung durch ein streng geprüftes Lieferantennetzwerk.",
          },
          three: {
            title: "Spezialchemikalien",
            text: "Präzise Beschaffungskoordination für Industriekunden mit hohen technischen Anforderungen und spezifischen Vorgaben.",
          },
        },
        working: {
          eyebrow: "Zusammenarbeit",
          title: "Standardisierter Prozess von der Bedarfsermittlung bis zur Lieferung.",
        },
        steps: {
          one: {
            badge: "Phase 1",
            title: "Bedarfsdefinition",
            text: "Festlegung von Material, Zielmarkt, Qualitätsstandards und terminlichen Vorgaben.",
          },
          two: {
            badge: "Phase 2",
            title: "Netzwerk-Sourcing",
            text: "Aktivierung des Lieferantennetzwerks, das den Produktattributen und regionalen Anforderungen entspricht.",
          },
          three: {
            badge: "Phase 3",
            title: "Konditionsprüfung",
            text: "Abgleich von Preisen, Lieferzeiten und Servicebedingungen zur Sicherstellung der Projektrealisierbarkeit.",
          },
          four: {
            badge: "Phase 4",
            title: "Logistikkoordination",
            text: "Überwachung des Produktionsfortschritts, Organisation des Versands und Bestätigung der finalen Lieferung.",
          },
        },
        cta: {
          eyebrow: "Nächster Schritt",
          title: "Erfahren Sie mehr über unseren Unternehmenshintergrund, unser Produktspektrum und kontaktieren Sie uns.",
          about: "Über C-Harvest",
          products: "Produkte entdecken",
          contact: "Kontakt aufnehmen",
        },
      },
    },
    about: {
      zh: {
        meta: {
          title: "關於 C-Harvest | 專業全球採購與物流協調",
          description:
            "了解 C-Harvest Industries 傳承自 1975 年的企業背景，以及我們對品質、誠信與永續發展的堅持。",
        },
        hero: {
          eyebrow: "關於 C-Harvest",
          title: "自 1975 年起，專注於國際採購與供應鏈支援的家族企業。",
          text:
            "C-Harvest 創立於 1975 年，從早期的金屬配件製造，穩步轉型為國際採購與通路夥伴，致力於連結亞洲、拉丁美洲與歐洲的買家與供應商。",
        },
        story: {
          eyebrow: "企業歷程",
          title: "從製造扎根，邁向國際採購與通路整合。",
          one:
            "作為一家擁有悠久歷史的家族企業，C-Harvest 對採購實務、供應商媒合與跨國通路支援具備深刻的理解。",
          two:
            "我們從製造業起步，逐步擴展業務範疇，協助國際買家進行供應商評估與跨區域的採購協調。",
          three:
            "如今，我們憑藉豐富的實務經驗，成為客戶信賴的採購窗口，精準對接全球各地的產品需求與供應量能。",
        },
        values: {
          eyebrow: "核心價值",
          title: "品質、誠信與永續發展是我們的營運基石。",
          one: {
            title: "品質至上",
            text: "我們深知終端產品的表現取決於源頭供應的穩定性，因此始終將原物料與產品品質放在首位。",
          },
          two: {
            title: "誠信為本",
            text: "透明的溝通、合乎道德的商業行為以及持續負責的態度，是我們維繫客戶關係的核心原則。",
          },
          three: {
            title: "永續發展",
            text: "我們關注負責任的採購流程與環境保護，將其視為企業長期營運不可或缺的一環。",
          },
        },
        market: {
          eyebrow: "市場佈局",
          title: "連結亞洲、拉丁美洲與歐洲的供需網絡。",
          one: {
            title: "重點服務區域",
            text: "C-Harvest 特別專注於支援亞洲、拉丁美洲與歐洲的客戶。在這些跨國採購中，清晰的採購流程與可靠的供應商渠道尤為關鍵。",
          },
          two: {
            title: "網絡建構目標",
            text: "我們的目標是在全球合格供應商與尋求穩定交期、優質跟進服務的客戶之間，建立一條高效且可靠的通路。",
          },
        },
      },
      en: {
        meta: {
          title: "About C-Harvest | Professional Sourcing & Logistics",
          description:
            "Learn about C-Harvest Industries, a family-owned enterprise established in 1975, and our commitment to quality, integrity, and sustainable sourcing.",
        },
        hero: {
          eyebrow: "About C-Harvest",
          title: "A family-owned enterprise focused on international sourcing since 1975.",
          text:
            "Established in 1975, C-Harvest has evolved from metal accessory manufacturing into an international sourcing and distribution partner, connecting buyers and suppliers across Asia, Latin America, and Europe.",
        },
        story: {
          eyebrow: "Corporate History",
          title: "From manufacturing roots to global procurement and distribution.",
          one: "As a family-owned enterprise with a long operating history, C-Harvest has a practical understanding of sourcing, supplier matching, and distribution support for ongoing buyer requirements.",
          two: "Over the years, we expanded from our manufacturing roots into a broader role, helping international buyers evaluate suppliers and manage cross-regional procurement coordination.",
          three:
            "Today, this experience allows us to serve as a reliable sourcing contact, precisely matching global product demand with qualified supplier capabilities.",
        },
        values: {
          eyebrow: "Core Values",
          title: "Quality, integrity, and sustainability are the foundations of our operations.",
          one: {
            title: "Quality First",
            text: "We understand that downstream performance depends on supply consistency, which is why raw material and product quality remain our top priority.",
          },
          two: {
            title: "Integrity",
            text: "Transparent communication, ethical business conduct, and consistent follow-up are the core principles of our client relationships.",
          },
          three: {
            title: "Sustainability",
            text: "We prioritize responsible sourcing and environmental awareness as essential components of our long-term business strategy.",
          },
        },
        market: {
          eyebrow: "Market Focus",
          title: "Connecting supply and demand across Asia, Latin America, and Europe.",
          one: {
            title: "Key Service Regions",
            text: "C-Harvest specifically focuses on supporting clients in Asia, Latin America, and Europe. In these cross-border markets, clear procurement processes and reliable supplier channels are critical.",
          },
          two: {
            title: "Network Objectives",
            text: "Our goal is to establish an efficient and reliable distribution channel between qualified global suppliers and clients seeking stable lead times and consistent follow-up.",
          },
        },
      },
      de: {
        meta: {
          title: "Über C-Harvest | Professionelle Beschaffung & Logistik",
          description:
            "Erfahren Sie mehr über C-Harvest Industries, ein 1975 gegründetes Familienunternehmen, und unser Engagement für Qualität, Integrität und nachhaltige Beschaffung.",
        },
        hero: {
          eyebrow: "Über C-Harvest",
          title: "Ein Familienunternehmen mit Fokus auf internationale Beschaffung seit 1975.",
          text:
            "C-Harvest wurde 1975 gegründet und hat sich von der Herstellung von Metallzubehör zu einem internationalen Beschaffungs- und Vertriebspartner entwickelt, der Käufer und Lieferanten in Asien, Lateinamerika und Europa verbindet.",
        },
        story: {
          eyebrow: "Unternehmensgeschichte",
          title: "Von den Wurzeln in der Fertigung zur globalen Beschaffung und Distribution.",
          one: "Als traditionsreiches Familienunternehmen verfügt C-Harvest über ein ausgeprägtes praktisches Verständnis für Beschaffung, Lieferanten-Matching und Vertriebsunterstützung für laufende Kundenanforderungen.",
          two: "Im Laufe der Jahre haben wir unser Portfolio ausgehend von unserer Fertigungsbasis erweitert und unterstützen heute internationale Einkäufer bei der Lieferantenbewertung und der regionenübergreifenden Beschaffungskoordination.",
          three:
            "Dank dieser Erfahrung fungieren wir heute als verlässlicher Beschaffungspartner, der die weltweite Produktnachfrage präzise mit qualifizierten Lieferantenkapazitäten abgleicht.",
        },
        values: {
          eyebrow: "Kernwerte",
          title: "Qualität, Integrität und Nachhaltigkeit bilden das Fundament unserer Arbeit.",
          one: {
            title: "Qualität",
            text: "Wir wissen, dass die Leistungsfähigkeit der Endprodukte von einer konstanten Lieferqualität abhängt. Deshalb haben Rohstoff- und Produktqualität für uns oberste Priorität.",
          },
          two: {
            title: "Integrität",
            text: "Transparente Kommunikation, ethisches Geschäftsverhalten und konsequente Nachverfolgung sind die Grundprinzipien unserer Kundenbeziehungen.",
          },
          three: {
            title: "Nachhaltigkeit",
            text: "Verantwortungsvolle Beschaffung und Umweltbewusstsein sind wesentliche Bestandteile unserer langfristigen Unternehmensstrategie.",
          },
        },
        market: {
          eyebrow: "Marktfokus",
          title: "Verbindung von Angebot und Nachfrage in Asien, Lateinamerika und Europa.",
          one: {
            title: "Fokusregionen",
            text: "C-Harvest konzentriert sich auf die Betreuung von Kunden in Asien, Lateinamerika und Europa. In diesen grenzüberschreitenden Märkten sind klare Beschaffungsprozesse und zuverlässige Lieferantenkanäle entscheidend.",
          },
          two: {
            title: "Netzwerkziele",
            text: "Unser Ziel ist es, einen effizienten und zuverlässigen Vertriebskanal zwischen qualifizierten globalen Lieferanten und Kunden aufzubauen, die stabile Vorlaufzeiten und eine verlässliche Betreuung suchen.",
          },
        },
      },
    },
    products: {
      zh: {
        meta: {
          title: "產品項目 | C-Harvest Industries",
          description:
            "探索 C-Harvest 專注的三大核心領域：金屬零件、醫藥原料與特殊化學品，以及我們標準化的採購處理流程。",
        },
        hero: {
          eyebrow: "產品範疇",
          title: "C-Harvest 專注經營的三大核心產品線。",
          text:
            "我們目前主理三大產品類別：金屬零件、醫藥原料與特殊化學品。透過專注於這些領域，我們能為買家提供更深入的市場洞察與精準的供應商資源。",
        },
        cards: {
          one: {
            title: "金屬零件",
            text: "奠基於我們深厚的製造業歷史，此類別具備最完整的供應鏈整合能力。",
            bulletOne: "適用於工業級規格與大量採購需求",
            bulletTwo: "由製造經驗驅動的品質控管能力",
            bulletThree: "支援客製化加工與特殊金屬材料尋源",
          },
          two: {
            title: "醫藥原料",
            text: "透過嚴謹合規的供應商網絡，支援製藥與生技產業的原料需求。",
            bulletOne: "擴展自傳統金屬製造的專業採購網絡",
            bulletTwo: "具備合規性審查與品質文件追蹤能力",
            bulletThree: "支援常態性量產與新藥研發的原料需求",
          },
          three: {
            title: "特殊化學品",
            text: "針對具備高技術門檻與特殊規格要求的工業買家提供精準採購。",
            bulletOne: "涵蓋工業與科技應用之特用化學品",
            bulletTwo: "具備高技術含量與客製化規格",
            bulletThree: "協助客戶克服特殊原料的尋源與進出口壁壘",
          },
        },
        process: {
          eyebrow: "採購執行流程",
          title: "從需求審核、供應商媒合到交付協調的標準化作業。",
          a: {
            title: "需求定義與可行性評估",
            text: "專案啟動首要步驟為釐清產品規格、目標市場、預期品質與商業條件。",
          },
          b: {
            title: "供應商資料庫尋源",
            text: "運用 C-Harvest 既有供應鏈資源，精準配對符合客戶條件的合格製造商。",
          },
          c: {
            title: "商業條件與物流執行",
            text: "在確立合適供應商後，我們接手處理價格談判、交期確認與國際物流排程。",
          },
        },
      },
      en: {
        meta: {
          title: "Products | C-Harvest Industries",
          description:
            "Explore C-Harvest's core domains: metal parts, pharmaceutical ingredients, and specialty chemicals, backed by our standardized sourcing process.",
        },
        hero: {
          eyebrow: "Product Domains",
          title: "The three core product lines managed by C-Harvest.",
          text:
            "We focus on three primary categories: metal parts, pharmaceutical ingredients, and specialty chemicals. By specializing in these domains, we provide buyers with deeper market insights and precise supplier matching.",
        },
        cards: {
          one: {
            title: "Metal Parts",
            text: "Rooted in our manufacturing history, this category offers complete supply chain integration.",
            bulletOne: "Suitable for industrial-grade specifications and high-volume procurement",
            bulletTwo: "Quality control driven by direct manufacturing experience",
            bulletThree: "Support for custom machining and specialized metal sourcing",
          },
          two: {
            title: "Pharmaceuticals",
            text: "Supporting the pharmaceutical and biotech industries through a rigorous, compliant supplier network.",
            bulletOne: "Expands our professional sourcing network beyond traditional manufacturing",
            bulletTwo: "Capabilities in compliance review and quality documentation",
            bulletThree: "Supports both continuous mass production and new drug R&D requirements",
          },
          three: {
            title: "Specialty Chemicals",
            text: "Precise procurement coordination for industrial buyers with high technical thresholds and specialized specifications.",
            bulletOne: "Covers specialty chemicals for industrial and tech applications",
            bulletTwo: "Handles highly technical and customized specifications",
            bulletThree: "Helps clients navigate sourcing and import/export barriers for specialized materials",
          },
        },
        process: {
          eyebrow: "Procurement Process",
          title: "Standardized operations from demand evaluation to delivery coordination.",
          a: {
            title: "Requirement Definition & Feasibility",
            text: "Project initiation starts with clarifying product specifications, target markets, quality expectations, and commercial constraints.",
          },
          b: {
            title: "Supplier Network Sourcing",
            text: "Leveraging C-Harvest's established supply chain resources to precisely match qualified manufacturers with client requirements.",
          },
          c: {
            title: "Commercial Terms & Logistics",
            text: "Once the right supplier is confirmed, we handle price negotiations, lead time confirmation, and international shipping schedules.",
          },
        },
      },
      de: {
        meta: {
          title: "Produkte | C-Harvest Industries",
          description:
            "Entdecken Sie die Kernbereiche von C-Harvest: Metallteile, pharmazeutische Rohstoffe und Spezialchemikalien, unterstützt durch unseren standardisierten Beschaffungsprozess.",
        },
        hero: {
          eyebrow: "Produktportfolio",
          title: "Die drei Kernproduktlinien von C-Harvest.",
          text:
            "Wir konzentrieren uns auf drei Hauptkategorien: Metallteile, Pharmarohstoffe und Spezialchemikalien. Durch diese Spezialisierung bieten wir Einkäufern tiefere Markteinblicke und ein präzises Lieferanten-Matching.",
        },
        cards: {
          one: {
            title: "Metallteile",
            text: "Verwurzelt in unserer Fertigungsgeschichte, bietet diese Kategorie eine vollständige Integration der Lieferkette.",
            bulletOne: "Geeignet für industrielle Spezifikationen und hohe Beschaffungsvolumina",
            bulletTwo: "Qualitätskontrolle basierend auf direkter Fertigungserfahrung",
            bulletThree: "Unterstützung bei Sonderanfertigungen und der Beschaffung spezieller Metalle",
          },
          two: {
            title: "Pharmazeutika",
            text: "Unterstützung der Pharma- und Biotech-Industrie durch ein strenges, compliance-geprüftes Lieferantennetzwerk.",
            bulletOne: "Erweitert unser professionelles Beschaffungsnetzwerk über die klassische Fertigung hinaus",
            bulletTwo: "Kompetenz in Compliance-Prüfung und Qualitätsdokumentation",
            bulletThree: "Unterstützt sowohl kontinuierliche Massenproduktion als auch F&E-Anforderungen",
          },
          three: {
            title: "Spezialchemikalien",
            text: "Präzise Beschaffungskoordination für Industriekunden mit hohen technischen Anforderungen und spezifischen Vorgaben.",
            bulletOne: "Umfasst Spezialchemikalien für Industrie- und Technologieanwendungen",
            bulletTwo: "Bewältigt hochtechnische und kundenspezifische Anforderungen",
            bulletThree: "Hilft Kunden bei der Überwindung von Beschaffungs- und Import-/Exportbarrieren",
          },
        },
        process: {
          eyebrow: "Beschaffungsprozess",
          title: "Standardisierte Abläufe von der Bedarfsprüfung bis zur Lieferkoordination.",
          a: {
            title: "Bedarfsdefinition & Machbarkeit",
            text: "Die Projektinitiierung beginnt mit der Klärung von Produktspezifikationen, Zielmärkten, Qualitätserwartungen und kommerziellen Rahmenbedingungen.",
          },
          b: {
            title: "Lieferantennetzwerk-Sourcing",
            text: "Nutzung der etablierten Supply-Chain-Ressourcen von C-Harvest, um qualifizierte Hersteller präzise mit den Kundenanforderungen abzugleichen.",
          },
          c: {
            title: "Kaufmännische Abwicklung & Logistik",
            text: "Sobald der richtige Lieferant bestätigt ist, übernehmen wir Preisverhandlungen, Lieferzeitbestätigungen und internationale Versandpläne.",
          },
        },
      },
    },
    contact: {
      zh: {
      meta: {
        title: "聯絡我們 | C-Harvest Industries",
        description:
          "聯絡位於台灣彰化的 C-Harvest 團隊，洽詢工業採購、產品規格與物流協調需求。",
      },
      hero: {
        eyebrow: "聯絡我們",
        title: "歡迎聯繫 C-Harvest 洽詢採購與供應鏈需求。",
        text:
          "若您有特定產品的尋源需求、供應商評估或跨國物流協調問題，請透過下方資訊與我們聯繫，我們的採購團隊將盡快協助您評估可行方案。",
      },
      office: {
        eyebrow: "企業總部",
      },
      direct: {
        eyebrow: "業務聯繫",
        title: "電子郵件",
        note: "此信箱專為採購詢價、產品規格確認與商務合作設立。",
      },
      before: {
        eyebrow: "詢價前準備",
        title: "為加速評估流程，建議您在詢價時提供以下資訊：",
        a: {
          title: "產品或材料規格",
          text: "提供精確的產品名稱、材質要求或規格標準，有助於我們快速鎖定對應的供應鏈。",
        },
        b: {
          title: "預估數量與目標市場",
          text: "採購量級、應用領域與最終銷售市場，是我們篩選並議價的重要依據。",
        },
        c: {
            title: "預期交期與物流條件",
            text: "若您已有明確的專案時程或指定的交貨條件（如 FOB/CIF），請一併提供以便我們評估排程。",
          },
        },
        form: {
          eyebrow: "傳送詢價",
          title: "填寫以下表單，直接將詢價內容發送給 C-Harvest 團隊。",
          nameLabel: "姓名",
          namePlaceholder: "請輸入全名",
          emailLabel: "電子郵件",
          emailPlaceholder: "your@email.com",
          companyLabel: "公司名稱",
          companyPlaceholder: "請輸入公司名稱",
          productLabel: "產品 / 材料",
          productPlaceholder: "您正在尋找的產品或材料？",
          quantityLabel: "預估數量 / 目標市場",
          quantityPlaceholder: "預估採購量與目標市場",
          timelineLabel: "預期交期 / 物流條件",
          timelinePlaceholder: "預期交貨時間與交貨條件",
          messageLabel: "補充訊息",
          messagePlaceholder: "請描述您的需求或其他補充資訊...",
          submitLabel: "送出詢價",
          hint: "您的詢價將直接發送給我們的團隊，我們通常在 1–2 個工作日內回覆。",
        },
      },
      en: {
        meta: {
          title: "Contact | C-Harvest Industries",
          description:
            "Contact the C-Harvest team in Changhua, Taiwan, for industrial sourcing, product specifications, and logistics coordination.",
        },
        hero: {
          eyebrow: "Contact Us",
          title: "Get in touch with C-Harvest for sourcing and supply chain requirements.",
          text:
            "Whether you need specific product sourcing, supplier evaluation, or cross-border logistics coordination, please reach out to us using the details below. Our procurement team will assist you in evaluating feasible solutions.",
        },
        office: {
          eyebrow: "Corporate Headquarters",
        },
        direct: {
          eyebrow: "Business Contact",
          title: "Email",
          note: "This email is dedicated to procurement inquiries, specification confirmation, and business partnerships.",
        },
        before: {
          eyebrow: "Inquiry Preparation",
          title: "To accelerate our evaluation process, we recommend providing the following details:",
          a: {
            title: "Product & Material Specifications",
            text: "Providing precise product names, material requirements, or specification standards helps us quickly identify the corresponding supply chain.",
          },
          b: {
            title: "Estimated Volume & Target Market",
            text: "Procurement volume, application field, and final sales market are crucial factors for our supplier screening and price negotiations.",
          },
          c: {
            title: "Expected Lead Time & Logistics",
            text: "If you have a clear project timeline or specific delivery terms (e.g., FOB/CIF), please include them so we can accurately assess scheduling.",
          },
        },
        form: {
          eyebrow: "Send an Inquiry",
          title: "Fill out the form below to send your inquiry directly to the C-Harvest team.",
          nameLabel: "Name",
          namePlaceholder: "Your full name",
          emailLabel: "Email",
          emailPlaceholder: "your@email.com",
          companyLabel: "Company",
          companyPlaceholder: "Your company name",
          productLabel: "Product / Material",
          productPlaceholder: "What product or material are you looking for?",
          quantityLabel: "Target Quantity / Market",
          quantityPlaceholder: "Estimated volume and destination market",
          timelineLabel: "Timeline / Delivery",
          timelinePlaceholder: "Expected lead time and delivery terms",
          messageLabel: "Message",
          messagePlaceholder: "Describe your requirements or any additional details...",
          submitLabel: "Send Inquiry",
          hint: "Your inquiry will be sent directly to our team. We typically respond within 1–2 business days.",
        },
      },
      de: {
        meta: {
          title: "Kontakt | C-Harvest Industries",
          description:
            "Kontaktieren Sie das Team von C-Harvest in Changhua, Taiwan, für industrielle Beschaffung, Produktspezifikationen und Logistikkoordination.",
        },
        hero: {
          eyebrow: "Kontakt",
          title: "Nehmen Sie Kontakt mit C-Harvest für Ihre Beschaffungs- und Lieferkettenanforderungen auf.",
          text:
            "Egal, ob Sie spezifische Produktbeschaffungen, Lieferantenbewertungen oder grenzüberschreitende Logistikkoordination benötigen – kontaktieren Sie uns über die unten stehenden Details. Unser Einkaufsteam unterstützt Sie gerne bei der Evaluierung passender Lösungen.",
        },
        office: {
          eyebrow: "Unternehmenszentrale",
        },
        direct: {
          eyebrow: "Geschäftskontakt",
          title: "E-Mail",
          note: "Diese E-Mail-Adresse ist für Beschaffungsanfragen, Spezifikationsbestätigungen und Geschäftspartnerschaften vorgesehen.",
        },
        before: {
          eyebrow: "Vorbereitung Ihrer Anfrage",
          title: "Um unseren Evaluierungsprozess zu beschleunigen, empfehlen wir die Bereitstellung folgender Details:",
          a: {
            title: "Produkt- & Materialspezifikationen",
            text: "Präzise Produktnamen, Materialanforderungen oder Spezifikationsstandards helfen uns, die passende Lieferkette schnell zu identifizieren.",
          },
          b: {
            title: "Geschätztes Volumen & Zielmarkt",
            text: "Beschaffungsvolumen, Anwendungsbereich und finaler Absatzmarkt sind entscheidende Faktoren für unser Lieferanten-Screening und Preisverhandlungen.",
          },
          c: {
            title: "Erwartete Lieferzeit & Logistikbedingungen",
            text: "Wenn Sie einen klaren Projektzeitplan oder spezifische Lieferbedingungen (z. B. FOB/CIF) haben, geben Sie diese bitte an, damit wir die Zeitplanung genau einschätzen können.",
          },
        },
        form: {
          eyebrow: "Anfrage senden",
          title: "Füllen Sie das Formular aus, um Ihre Anfrage direkt an das C-Harvest-Team zu senden.",
          nameLabel: "Name",
          namePlaceholder: "Ihr vollständiger Name",
          emailLabel: "E-Mail",
          emailPlaceholder: "ihre@email.com",
          companyLabel: "Unternehmen",
          companyPlaceholder: "Name Ihres Unternehmens",
          productLabel: "Produkt / Material",
          productPlaceholder: "Welches Produkt oder Material suchen Sie?",
          quantityLabel: "Zielmenge / Markt",
          quantityPlaceholder: "Geschätztes Volumen und Zielmarkt",
          timelineLabel: "Zeitplan / Lieferung",
          timelinePlaceholder: "Erwartete Lieferzeit und Lieferbedingungen",
          messageLabel: "Nachricht",
          messagePlaceholder: "Beschreiben Sie Ihre Anforderungen oder zusätzliche Details...",
          submitLabel: "Anfrage senden",
          hint: "Ihre Anfrage wird direkt an unser Team gesendet. Wir antworten in der Regel innerhalb von 1–2 Werktagen.",
        },
      },
    },
  },
};

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && typeof value === "object" && key in value) {
      return value[key];
    }

    return undefined;
  }, source);
}

function getTranslation(language, key) {
  const common = translations.common[language];
  const currentPage = translations.pages[page]?.[language];

  return getNestedValue(currentPage, key) ?? getNestedValue(common, key);
}

function applyTranslations(language) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getTranslation(language, node.dataset.i18n);

    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const mappings = node.dataset.i18nAttr.split(";");

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      const value = getTranslation(language, key);

      if (attribute && key && typeof value === "string") {
        node.setAttribute(attribute.trim(), value);
      }
    });
  });

  document.documentElement.lang = htmlLangMap[language] || "en";
  document.body.dataset.language = language;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });
}

function resolveInitialLanguage() {
  const saved = window.localStorage.getItem(storageKey);

  if (saved && supportedLanguages.includes(saved)) {
    return saved;
  }

  const browserLanguage = (navigator.language || "en").toLowerCase();

  if (browserLanguage.startsWith("zh")) {
    return "zh";
  }

  if (browserLanguage.startsWith("de")) {
    return "de";
  }

  return "en";
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (languageButtons.length > 0 && page) {
  const currentLanguage = resolveInitialLanguage();
  applyTranslations(currentLanguage);

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language;

      if (!supportedLanguages.includes(nextLanguage)) {
        return;
      }

      window.localStorage.setItem(storageKey, nextLanguage);
      applyTranslations(nextLanguage);
    });
  });
}

(function setupInquiryForm() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const formStatus = document.createElement("div");
  formStatus.className = "form-status";
  formStatus.setAttribute("role", "status");
  formStatus.setAttribute("aria-live", "polite");
  form.appendChild(formStatus);

  function showStatus(type, messageKey) {
    formStatus.className = "form-status form-status--" + type;
    const lang = document.body.dataset.language || "en";
    const messages = {
      zh: {
        sending: "正在送出中…",
        success: "詢價已成功送出！我們會盡快回覆您。",
        error: "送出失敗，請稍後再試，或直接寄信至 info@c-harvest.com。",
      },
      en: {
        sending: "Sending...",
        success: "Your inquiry has been submitted successfully. We will get back to you soon.",
        error: "Submission failed. Please try again later, or email us directly at info@c-harvest.com.",
      },
      de: {
        sending: "Wird gesendet …",
        success: "Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.",
        error: "Übermittlung fehlgeschlagen. Bitte versuchen Sie es später erneut oder senden Sie eine E-Mail an info@c-harvest.com.",
      },
    };
    formStatus.textContent = (messages[lang] || messages.en)[messageKey] || "";
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("inq-name");
    const emailInput = document.getElementById("inq-email");
    if (!nameInput.value.trim() || !emailInput.value.trim()) {
      showStatus("error", "error");
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) submitButton.disabled = true;
    showStatus("sending", "sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        showStatus("success", "success");
        form.querySelectorAll("input, textarea").forEach(function (el) {
          if (el.type !== "submit") el.value = "";
        });
      } else {
        showStatus("error", "error");
      }
    } catch (_err) {
      showStatus("error", "error");
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
})();
