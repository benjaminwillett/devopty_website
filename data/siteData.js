window.siteData = {
  nav: [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Observability", href: "#observability" },
    { label: "Dashboards", href: "#dashboards" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "NetDevOps Platform",
    title: "Enterprise Network Automation & Infrastructure Intelligence",
    subtitle: "Modern NetDevOps platform for visibility, automation, compliance, observability, and AI-assisted operations.",
    summary: "Purpose-built for infrastructure teams operating complex, multi-vendor environments where uptime, control, and speed all matter at once.",
    ctas: [
      { label: "Book Demo", href: "#contact", variant: "primary" },
      { label: "Explore Platform", href: "#dashboards", variant: "secondary" }
    ],
    stats: [
      { label: "Infrastructure availability", value: 99.98, suffix: "%" },
      { label: "Managed devices", value: 18420, suffix: "+" },
      { label: "Automation jobs / month", value: 920000, suffix: "+" },
      { label: "Compliance coverage", value: 97, suffix: "%" }
    ],
    featureStrip: [
      "Multi-vendor automation",
      "Topology intelligence",
      "AI-assisted operations",
      "Compliance orchestration"
    ],
    proof: [
      "Enterprise-ready observability",
      "Cisco, Palo Alto, Fortinet, Extreme, Juniper",
      "Designed for complex multi-site estates"
    ],
    console: [
      { label: "Collections", value: "1.84M/day", state: "stable" },
      { label: "Drift events", value: "24 active", state: "review" },
      { label: "Automations", value: "312 queued", state: "healthy" }
    ]
  },
  technologyGroups: [
    {
      key: "cloud",
      title: "Cloud & Platform",
      description: "Infrastructure primitives, orchestration layers, and control-plane foundations."
    },
    {
      key: "automation",
      title: "Automation & Data",
      description: "Workflow, scripting, and source-of-truth tooling used to operate at scale."
    },
    {
      key: "network",
      title: "Network & Security",
      description: "Multi-vendor routing, edge, and policy platforms supported by the estate."
    },
    {
      key: "ai",
      title: "AI & Intelligence",
      description: "Reasoning, orchestration, and operator-assist systems connected into the platform."
    }
  ],
  technologyBadges: [
    {
      label: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "AWS logo",
      group: "cloud",
      lightOnDark: true
    },
    {
      label: "Azure",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      alt: "Microsoft Azure logo",
      group: "cloud"
    },
    {
      label: "GCP",
      src: "https://cdn.simpleicons.org/googlecloud",
      alt: "Google Cloud logo",
      group: "cloud"
    },
    {
      label: "Terraform",
      src: "https://cdn.simpleicons.org/terraform",
      alt: "Terraform logo",
      group: "automation"
    },
    {
      label: "Docker",
      src: "https://cdn.simpleicons.org/docker",
      alt: "Docker logo",
      group: "cloud"
    },
    {
      label: "Python",
      src: "assets/logos/python.svg",
      alt: "Python logo",
      group: "automation",
      featured: true
    },
    {
      label: "Flask",
      src: "assets/logos/flask.svg",
      alt: "Flask logo",
      group: "automation",
      featured: true,
      lightOnDark: true
    },
    {
      label: "OpenRouter",
      src: "assets/logos/openrouter.svg",
      alt: "OpenRouter logo",
      group: "ai",
      featured: true,
      lightOnDark: false
    },
    {
      label: "Ollama",
      src: "assets/logos/ollama.svg",
      alt: "Ollama logo",
      group: "ai",
      featured: true
    },
    {
      label: "Claude",
      src: "assets/logos/claude.svg",
      alt: "Claude logo",
      group: "ai",
      featured: true
    },
    {
      label: "OpenAI",
      src: "assets/logos/openai.svg",
      alt: "OpenAI logo",
      group: "ai",
      featured: true,
      lightOnDark: true
    },
    {
      label: "OpenClaw",
      src: "assets/logos/openclaw.svg",
      alt: "OpenClaw logo",
      group: "ai",
      featured: true
    },
    {
      label: "n8n",
      src: "assets/logos/n8n.svg",
      alt: "n8n logo",
      group: "automation",
      featured: true
    },
    {
      label: "Kubernetes",
      src: "https://cdn.simpleicons.org/kubernetes",
      alt: "Kubernetes logo",
      group: "cloud"
    },
    {
      label: "Palo Alto",
      src: "https://cdn.simpleicons.org/paloaltonetworks/F04E23",
      alt: "Palo Alto Networks logo",
      group: "network"
    },
    {
      label: "Cisco",
      src: "https://cdn.simpleicons.org/cisco",
      alt: "Cisco logo",
      group: "network"
    },
    {
      label: "Extreme",
      src: "https://mc-30acf3eb-3568-4f77-bd15-8645-cdn-endpoint.azureedge.net/-/media/project/extreme/design/logo.svg?rev=a03fb9205bec4cadbe609068bb3de2e6",
      alt: "Extreme Networks logo",
      group: "network"
    },
    {
      label: "Juniper",
      src: "https://cdn.simpleicons.org/junipernetworks/84B135",
      alt: "Juniper Networks logo",
      group: "network"
    },
    {
      label: "NetScaler",
      src: "https://cdn.simpleicons.org/citrix/452170",
      alt: "NetScaler logo",
      group: "network"
    },
    {
      label: "NetBox",
      src: "https://raw.githubusercontent.com/netbox-community/netbox/main/docs/netbox_logo_light.svg",
      alt: "NetBox logo",
      group: "automation"
    }
  ],
  platformOverview: [
    { icon: "gear", title: "Infrastructure automation", description: "Drive repeatable operations across routing, switching, wireless, firewall, and cloud infrastructure with policy-aware workflows." },
    { icon: "pulse", title: "Operational intelligence", description: "Unify discovery, topology, configuration state, and audit evidence into a single operating picture for engineering teams." },
    { icon: "shield", title: "Compliance auditing", description: "Continuously validate drift, standards, and security posture with executive-ready reporting and remediation paths." },
    { icon: "spark", title: "AI-assisted operations", description: "Surface anomalies, highlight change risk, and accelerate triage with context-rich infrastructure analysis." }
  ],
  capabilities: [
    { icon: "radar", title: "Network Discovery", description: "Live inventory ingestion for branches, campuses, data centres, and cloud-connected estates." },
    { icon: "audit", title: "Device Auditing", description: "Deep audit snapshots with vendor-aware parsing, evidence collection, and health scoring." },
    { icon: "shield", title: "Compliance", description: "Policy baselines, exception tracking, and structured evidence for operational governance." },
    { icon: "backup", title: "Config Backups", description: "Scheduled backup orchestration with retention, diffing, and restore-ready archives." },
    { icon: "map", title: "Infrastructure Mapping", description: "Topology views that connect devices, links, services, and failure domains across layers." },
    { icon: "firewall", title: "Firewall Visibility", description: "Rule posture, URL risk, policy validation, and secure change visibility across perimeter stacks." },
    { icon: "route", title: "Routing Intelligence", description: "Understand paths, neighbours, VRFs, route leakage, and protocol behaviour before it becomes an outage." },
    { icon: "chart", title: "Monitoring Integrations", description: "Ingest telemetry from existing monitoring, SIEM, and observability platforms without duplicating effort." },
    { icon: "asset", title: "Asset Intelligence", description: "Correlate hardware, software, lifecycle, and business context into actionable inventory views." },
    { icon: "dns", title: "DNS Validation", description: "Validate records, dependencies, hygiene, and change impact across critical service zones." },
    { icon: "nodes", title: "Multi-vendor Automation", description: "Operate mixed Cisco, Palo Alto, Fortinet, Extreme, Juniper, and cloud estates from one control plane." },
    { icon: "ai", title: "AI Insights", description: "Natural language summaries, anomaly detection, and operational recommendations grounded in real infrastructure state." }
  ],
  automationFlows: [
    "Automated device onboarding",
    "State collection and sync",
    "Compliance validation",
    "Remediation orchestration",
    "Approval-aware execution"
  ],
  observabilityMetrics: [
    { label: "Sites healthy", value: "45" },
    { label: "Critical alerts", value: "6" },
    { label: "Protected edges", value: "702" },
    { label: "Tracked routes", value: "12.8k" }
  ],
  observabilityHighlights: [
    { icon: "map", text: "Topology maps with routing context" },
    { icon: "pulse", text: "Site health, alerts, and timeline analysis" },
    { icon: "firewall", text: "Firewall flow and policy posture" },
    { icon: "route", text: "Metrics overlays for branch and core estates" }
  ],
  aiOperations: [
    { icon: "ai", text: "AI-powered recommendations grounded in infrastructure evidence" },
    { icon: "spark", text: "Anomaly detection across routing, firewall, and access layers" },
    { icon: "gear", text: "Natural language operations briefings for engineers and leaders" },
    { icon: "audit", text: "Intelligent reporting with next-step guidance" }
  ],
  aiScoreBars: [
    { label: "Config drift", value: 72 },
    { label: "Route churn", value: 58 },
    { label: "Policy hygiene", value: 84 },
    { label: "Asset risk", value: 66 }
  ],
  dashboards: [
    { tag: "Platform", title: "DEVOPTY Platform Overview", metric: "Product suite showcase", description: "DEVOPTY product surfaces across topology, monitoring, reporting, and mobile-friendly operations views.", image: "assets/devopty-productshot-suite.png" },
    { tag: "NOC", title: "Network Operations Dashboard", metric: "45 regions monitored", description: "Live estate health, topology changes, and automation throughput across core and edge environments.", image: "assets/devopty-noc.png" },
    { tag: "SecOps", title: "Firewall Audit Dashboard", metric: "92% policy alignment", description: "Policy hygiene, URL analysis, risk summaries, and remediation candidates for perimeter controls.", image: "assets/devopty-engineershot1.png" },
    { tag: "Routing", title: "Routing Intelligence Dashboard", metric: "17 active protocols", description: "Protocol state, path health, next-hop analysis, and VRF visibility for high-consequence networks.", image: "assets/devopty-productshot2.png" },
    { tag: "Assets", title: "Asset Intelligence Dashboard", metric: "18.4k managed devices", description: "Hardware lifecycle, vendor spread, model risk, and refresh planning built from real inventory evidence.", image: "assets/devopty-azure-report.png" },
    { tag: "Wireless", title: "Wireless Operations Dashboard", metric: "702 live SSIDs tracked", description: "AP health, site coverage, controller insights, and WLAN exception tracking at scale.", image: "assets/devopty-engineershot3.png" },
    { tag: "Governance", title: "Infrastructure Compliance Dashboard", metric: "97% coverage", description: "Control adherence, audit evidence, drift hotspots, and executive-ready assurance reporting.", image: "assets/devopty-azure-report.png" }
  ],
  enterpriseFeatures: [
    { icon: "auth", title: "Role-based access", description: "Scoped access for engineering, operations, and leadership teams." },
    { icon: "audit", title: "Audit logging", description: "Full operational traceability across logins, changes, and workflow runs." },
    { icon: "nodes", title: "API integrations", description: "Connect to CMDBs, ticketing, monitoring, messaging, and internal systems." },
    { icon: "asset", title: "Multi-tenant support", description: "Operate separate brands, environments, or customer estates with clear isolation." },
    { icon: "chart", title: "High scalability", description: "Built for distributed inventories, large estates, and sustained collection volumes." },
    { icon: "pulse", title: "Reporting engine", description: "Generate operational summaries, audit packs, and leadership snapshots quickly." },
    { icon: "shield", title: "Secure architecture", description: "Enterprise-grade controls around data handling, access, and workflow execution." },
    { icon: "auth", title: "Enterprise authentication", description: "Support mature identity patterns and controlled access across teams." }
  ],
  useCases: [
    { icon: "pulse", title: "Healthcare", description: "Protect clinical uptime with visibility across campus, branch, and medical network infrastructure." },
    { icon: "asset", title: "Enterprise", description: "Standardise multi-site operations, reduce drift, and accelerate infrastructure delivery." },
    { icon: "radar", title: "Education", description: "Gain oversight of distributed campuses, wireless estates, and high-change environments." },
    { icon: "shield", title: "Government", description: "Support accountable change, operational assurance, and secure observability for critical estates." },
    { icon: "chart", title: "Finance", description: "Improve control, evidence, and resilience for regulated networks and security-sensitive platforms." },
    { icon: "map", title: "Multi-site organisations", description: "Manage branches, warehouses, remote offices, and central services from one platform." }
  ],
  about: {
    title: "Built by infrastructure professionals",
    body: "DEVOPTY is shaped by real operational constraints: multi-vendor complexity, incomplete visibility, change risk, and the need for tooling that engineers can trust under pressure.",
    team: [
      {
        label: "Network Operations",
        name: "Operations Engineering",
        description: "Infrastructure practitioners focused on visibility, topology, pre-change validation, and reliable day-two operations.",
        image: "assets/devopty-engineershot2.png"
      },
      {
        label: "Security Operations",
        name: "Security & Firewall Review",
        description: "Teams using DEVOPTY to validate policy posture, URL risk, and pre-check evidence before operational change.",
        image: "assets/devopty-engineershot1.png"
      },
      {
        label: "Field Delivery",
        name: "Upgrade & Readiness",
        description: "Engineers coordinating hardware upgrades, access validation, and rollout readiness from live infrastructure evidence.",
        image: "assets/devopty-engineershot3.png"
      }
    ],
    stats: [
      { label: "Years of infrastructure delivery", value: "15+" },
      { label: "Environments managed", value: "400+" },
      { label: "Technologies supported", value: "30+" }
    ]
  },
  contact: {
    title: "Modernise Network Operations",
    subtitle: "Bring automation, observability, compliance, and AI-assisted operations into one enterprise control surface.",
    email: "hello@devopty.com",
    actions: [
      { label: "Book a Demo", href: "mailto:hello@devopty.com", variant: "primary" },
      { label: "Contact", href: "mailto:hello@devopty.com", variant: "secondary" },
      { label: "Visit devopty.com", href: "https://devopty.com", variant: "ghost" }
    ],
    socials: [
      { label: "Website", href: "https://devopty.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/devopty" },
      { label: "GitHub", href: "https://github.com/devopty" },
      { label: "Email", href: "mailto:hello@devopty.com" }
    ]
  }
};