import { siteConfig } from '../data/siteConfig';

const titleize = (value) => value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
const list = (items = []) => items.map(item => `<li class="flex gap-3 text-sm text-gray-700 leading-relaxed"><i data-lucide="check" class="mt-0.5 h-4 w-4 shrink-0 text-academic-gold"></i><span>${item}</span></li>`).join('');
const statCards = (items = []) => `
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
    ${items.map(item => `
      <div class="bg-academic-navy text-white p-5 sm:p-6 border-t-4 border-academic-gold min-h-36">
        <div class="text-3xl sm:text-4xl font-display font-black text-academic-gold break-words">${item.value}</div>
        <div class="mt-2 text-xs font-bold uppercase tracking-widest text-white">${item.label}</div>
        <p class="mt-3 text-xs leading-relaxed text-gray-300">${item.detail || ''}</p>
      </div>
    `).join('')}
  </div>
`;
const sectionHeading = (eyebrow, title, copy = '') => `
  <div class="mb-10 max-w-4xl">
    <p class="text-xs font-black uppercase tracking-[0.28em] text-academic-gold">${eyebrow}</p>
    <h2 class="mt-3 text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-academic-navy break-words">${title}</h2>
    ${copy ? `<p class="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">${copy}</p>` : ''}
  </div>
`;

function getSection(sectionTitle, currentPath) {
  const normalized = sectionTitle.toLowerCase();
  return siteConfig.menu.find(item => item.title.toLowerCase() === normalized) || siteConfig.menu.find(item => currentPath.startsWith(item.path) && item.path !== '/') || siteConfig.menu[0];
}

function renderOverview(section) {
  const intro = {
    HOME: 'A command-center view of the professor, research group, recent activity, and fast paths into the archive.',
    ABOUT: 'Credentials, appointments, leadership, awards, and the biography behind the research program.',
    RESEARCH: 'Active grants, research themes, collaborations, projects, and measurable impact.',
    'PUBLICATIONS & RESOURCES': 'Journal papers, books, conference activity, public profiles, and downloadable resources.',
    'TEACHING & STUDENTS': 'Courses, supervision, training programs, doctoral culture, and student outcomes.',
    'NEWS & EVENTS': 'Announcements, public events, gallery records, and consultancy activity.',
    CONTACT: 'Direct contact details, academic profiles, and professional channels.'
  }[section.title] || 'A focused archive of academic work and institutional records.';

  return `
    ${sectionHeading('Section Overview', `${section.title} Directory`, intro)}
    ${statCards(siteConfig.metrics)}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      ${section.subItems.map((item, index) => {
        const href = section.path === '/' ? `/${item.id}/` : `${section.path}${item.id}/`;
        return `
          <a href="${href}" class="group bg-white border border-gray-200 hover:border-academic-gold p-6 sm:p-7 shadow-sm transition-colors min-h-56 flex flex-col">
            <div class="flex items-center justify-between gap-4">
              <span class="text-5xl font-display font-black text-gray-100">${String(index + 1).padStart(2, '0')}</span>
              <i data-lucide="arrow-up-right" class="h-6 w-6 text-academic-gold"></i>
            </div>
            <h3 class="mt-6 text-xl font-display font-black uppercase tracking-wide text-academic-navy break-words">${item.title}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600 grow">Open the dedicated record for ${item.title.toLowerCase()} with curated data, summaries, and supporting evidence.</p>
            <span class="mt-6 text-xs font-black uppercase tracking-widest text-academic-blue group-hover:text-academic-gold">Enter archive</span>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

function renderProfileSummary() {
  return `
    ${sectionHeading('Profile Summary', siteConfig.author.name, 'A compressed dossier for visitors who need to understand his authority fast.')}
    ${statCards(siteConfig.metrics)}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-white border border-gray-200 p-8 sm:p-10">
        ${siteConfig.profileSummary.map(p => `<p class="mb-5 text-lg leading-loose text-gray-700">${p}</p>`).join('')}
      </div>
      <div class="bg-academic-navy text-white border-t-4 border-academic-gold p-8">
        <h3 class="text-xl font-display font-black text-white uppercase tracking-widest mb-6">Academic Signature</h3>
        <ul class="space-y-4">${list(['Trustworthy AI systems', 'Clinical and edge deployment', 'Neuro-symbolic reasoning', 'Doctoral mentorship at scale'])}</ul>
      </div>
    </div>
  `;
}

function renderResearchHighlights() {
  return `
    ${sectionHeading('Research Highlights', 'High-Pressure Research Portfolio', 'Projects with grants, outputs, partnerships, and deployment consequences.')}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      ${siteConfig.projects.map(project => `
        <article class="bg-white border border-gray-200 border-l-4 ${project.status === 'Ongoing' ? 'border-l-academic-gold' : 'border-l-gray-400'} p-7 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <h3 class="text-xl font-display font-black text-academic-navy leading-tight">${project.title}</h3>
            <span class="w-max bg-academic-navy text-white px-3 py-1 text-[11px] font-black uppercase tracking-widest">${project.status}</span>
          </div>
          <p class="mt-3 text-sm font-black uppercase tracking-widest text-academic-gold">${project.funding}</p>
          <p class="mt-4 text-gray-700 leading-relaxed">${project.description}</p>
          <ul class="mt-5 space-y-2">${list(project.outputs)}</ul>
        </article>
      `).join('')}
    </div>
  `;
}

function renderNews() {
  return `
    ${sectionHeading('Latest News', 'Recent Signals From The Lab', 'Announcements framed like an active research office, not a dormant profile page.')}
    <div class="space-y-5">
      ${siteConfig.news.map(news => `
        <article class="bg-white border border-gray-200 p-6 sm:p-7 flex flex-col md:flex-row md:items-start gap-5">
          <div class="md:w-44 shrink-0">
            <span class="block text-xs font-black uppercase tracking-widest text-gray-500">${news.date}</span>
            <span class="mt-3 inline-block bg-academic-gold/20 text-academic-navy border border-academic-gold px-3 py-1 text-[11px] font-black uppercase tracking-widest">${news.tag}</span>
          </div>
          <div>
            <h3 class="text-xl font-display font-black text-academic-navy">${news.title}</h3>
            <p class="mt-3 text-gray-700 leading-relaxed">${news.summary}</p>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderQuickLinks() {
  return `
    ${sectionHeading('Quick Links', 'Fast Access For Serious Visitors', 'Make recruiters, collaborators, reviewers, and students find the important material immediately.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      ${siteConfig.quickLinks.map(link => `
        <a href="${link.url}" class="bg-white border border-gray-200 hover:border-academic-gold p-6 min-h-52 transition-colors group">
          <i data-lucide="${link.icon}" class="h-8 w-8 text-academic-gold"></i>
          <h3 class="mt-5 text-xl font-display font-black text-academic-navy uppercase tracking-wide">${link.title}</h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">${link.description}</p>
          <span class="mt-5 inline-flex items-center text-xs font-black uppercase tracking-widest text-academic-blue group-hover:text-academic-gold">Open <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i></span>
        </a>
      `).join('')}
    </div>
  `;
}

function renderBiography() {
  return `
    ${sectionHeading('Biography', 'A Research Career Built For Scrutiny', 'The public narrative behind the record.')}
    <div class="bg-white border border-gray-200 p-8 sm:p-12 relative overflow-hidden">
      <i data-lucide="quote" class="absolute right-8 top-8 h-24 w-24 text-gray-100"></i>
      <p class="relative text-xl leading-loose font-serif text-gray-800">${siteConfig.biography}</p>
      <div class="relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">${siteConfig.metrics.slice(0, 3).map(m => `<div class="bg-gray-50 border border-gray-100 p-5"><div class="text-3xl font-black text-academic-gold">${m.value}</div><div class="text-xs font-black uppercase tracking-widest text-academic-navy">${m.label}</div></div>`).join('')}</div>
    </div>
  `;
}

function renderEducation() {
  return `
    ${sectionHeading('Education', 'Academic Formation', 'A timeline of formal training, research apprenticeship, and early excellence.')}
    <div class="space-y-6">
      ${siteConfig.education.map(edu => `
        <article class="bg-white border border-gray-200 border-l-4 border-l-academic-navy p-7 sm:p-8">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
            <div><h3 class="text-2xl font-display font-black text-academic-navy">${edu.degree}</h3><p class="mt-2 font-bold uppercase tracking-widest text-academic-gold text-sm">${edu.institution}</p></div>
            <span class="w-max bg-gray-100 border border-gray-200 px-4 py-2 text-sm font-black text-academic-navy">${edu.year}</span>
          </div>
          <p class="mt-5 text-gray-700 leading-relaxed">${edu.description}</p>
          <ul class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">${edu.achievements.map(a => `<li class="bg-gray-50 border border-gray-100 p-4 text-sm font-semibold text-gray-700">${a}</li>`).join('')}</ul>
        </article>
      `).join('')}
    </div>
  `;
}

function renderExperience() {
  return `
    ${sectionHeading('Experience', 'Appointments And Institutional Power', 'A role-by-role record of academic leadership, research delivery, and curriculum influence.')}
    <div class="space-y-6">
      ${siteConfig.experience.map(exp => `
        <article class="bg-white border border-gray-200 p-7 sm:p-8">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div><h3 class="text-2xl font-display font-black text-academic-navy">${exp.role}</h3><p class="mt-2 text-sm font-black uppercase tracking-widest text-academic-gold">${exp.organization}</p></div>
            <span class="w-max bg-academic-navy text-white px-4 py-2 text-xs font-black uppercase tracking-widest">${exp.year}</span>
          </div>
          <p class="mt-5 text-gray-700 leading-relaxed">${exp.description}</p>
          <ul class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">${exp.highlights.map(h => `<li class="bg-academic-ivory border border-gray-100 p-4 text-sm font-semibold text-gray-700">${h}</li>`).join('')}</ul>
        </article>
      `).join('')}
    </div>
  `;
}

function renderMemberships() {
  return `
    ${sectionHeading('Memberships', 'Professional Standing', 'Signals of peer recognition, service, and international scholarly citizenship.')}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${siteConfig.memberships.map(member => `<article class="bg-white border border-gray-200 p-7"><i data-lucide="badge-check" class="h-7 w-7 text-academic-gold"></i><h3 class="mt-5 text-xl font-display font-black text-academic-navy">${member.name}</h3><p class="mt-3 text-gray-600 leading-relaxed">${member.detail}</p></article>`).join('')}
    </div>
  `;
}

function renderAwards() {
  return `
    ${sectionHeading('Awards', 'Recognitions That Travel', 'A record of honors from teaching, research, supervision, and field leadership.')}
    <div class="space-y-5">
      ${siteConfig.awards.map(award => `<article class="bg-white border border-gray-200 p-6 sm:p-7 flex flex-col md:flex-row gap-5"><div class="text-4xl font-display font-black text-academic-gold md:w-28">${award.year}</div><div><h3 class="text-xl font-display font-black text-academic-navy">${award.title}</h3><p class="mt-1 text-sm font-black uppercase tracking-widest text-academic-blue">${award.organization}</p><p class="mt-3 text-gray-700 leading-relaxed">${award.description}</p></div></article>`).join('')}
    </div>
  `;
}

function renderLeadership() {
  return `
    ${sectionHeading('Leadership', 'Academic Governance And Program Building', 'The roles that show capacity beyond individual research output.')}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      ${siteConfig.leadership.map(lead => `<article class="bg-white border border-gray-200 border-t-4 border-t-academic-gold p-7"><span class="text-xs font-black uppercase tracking-widest text-gray-500">${lead.duration}</span><h3 class="mt-3 text-xl font-display font-black text-academic-navy">${lead.role}</h3><p class="mt-2 text-sm font-bold text-academic-gold uppercase tracking-widest">${lead.organization}</p><p class="mt-4 text-gray-700 leading-relaxed">${lead.scope}</p></article>`).join('')}
    </div>
  `;
}

function renderResearchInterests() {
  return `
    ${sectionHeading('Research Interests', 'Where The Lab Applies Pressure', 'Each theme connects theory, implementation, deployment, and accountability.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${siteConfig.researchInterests.map((item, i) => `<article class="bg-white border border-gray-200 p-7 min-h-56"><div class="text-5xl font-display font-black text-gray-100">${String(i + 1).padStart(2, '0')}</div><h3 class="mt-4 text-xl font-display font-black text-academic-navy">${item.title}</h3><p class="mt-3 text-gray-700 leading-relaxed">${item.description}</p></article>`).join('')}</div>
  `;
}

function renderProjects() { return renderResearchHighlights(); }

function renderGrants() {
  return `
    ${sectionHeading('Grants', 'Funded Research Record', 'A portfolio that reads like infrastructure, not decoration.')}
    <div class="overflow-x-auto bg-white border border-gray-200">
      <table class="min-w-[860px] w-full text-left text-sm">
        <thead class="bg-academic-navy text-white uppercase tracking-widest text-xs"><tr><th class="p-4">Project</th><th class="p-4">Agency</th><th class="p-4">Amount</th><th class="p-4">Period</th><th class="p-4">Role</th></tr></thead>
        <tbody>${siteConfig.grants.map(grant => `<tr class="border-b border-gray-100 align-top"><td class="p-4"><strong class="block text-academic-navy">${grant.title}</strong><span class="mt-2 block text-gray-600">${grant.impact}</span></td><td class="p-4 text-gray-700">${grant.agency}</td><td class="p-4 font-black text-academic-gold">${grant.amount}</td><td class="p-4 text-gray-600 whitespace-nowrap">${grant.period}</td><td class="p-4 font-bold text-academic-navy">${grant.role}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  `;
}

function renderCollaborations() {
  return `
    ${sectionHeading('Collaborations', 'International Research Network', 'Partnerships that make the work harder to ignore.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${siteConfig.collaborations.map(c => `<article class="bg-white border border-gray-200 p-7"><div class="flex items-center gap-3"><i data-lucide="globe-2" class="h-6 w-6 text-academic-gold"></i><span class="text-xs font-black uppercase tracking-widest text-gray-500">${c.region}</span></div><h3 class="mt-5 text-xl font-display font-black text-academic-navy">${c.partner}</h3><p class="mt-3 text-gray-700 leading-relaxed">${c.topic}</p><p class="mt-4 text-sm font-bold text-academic-blue">Outcome: ${c.outcome}</p></article>`).join('')}</div>
  `;
}

function renderImpact() {
  return `
    ${sectionHeading('Research Impact', 'Evidence Of Reach', siteConfig.researchImpact.statement)}
    ${statCards(siteConfig.researchImpact.numbers.map(n => ({ ...n, detail: 'Measured across lab releases, partners, and public outputs.' })))}
    <div class="bg-white border border-gray-200 p-8"><ul class="grid grid-cols-1 md:grid-cols-2 gap-5">${siteConfig.researchImpact.points.map(point => `<li class="flex gap-4"><i data-lucide="zap" class="h-6 w-6 shrink-0 text-academic-gold"></i><span class="text-gray-700 leading-relaxed">${point}</span></li>`).join('')}</ul></div>
  `;
}

function renderPublications() {
  return `
    ${sectionHeading('Journal Articles', 'Peer-Reviewed Publication Record', 'Dense, recent, and built to look like a scholar who is very much in motion.')}
    <div class="space-y-4">${siteConfig.publications.articles.map((article, i) => `<article class="bg-white border border-gray-200 hover:border-academic-gold p-6 flex gap-5"><div class="hidden sm:block text-4xl font-display font-black text-gray-100">${String(i + 1).padStart(2, '0')}</div><div><span class="inline-block bg-academic-navy text-white px-3 py-1 text-xs font-black uppercase tracking-widest">${article.year}</span><p class="mt-4 text-base sm:text-lg leading-relaxed font-serif text-academic-navy">${article.citation}</p><a href="${article.link}" class="mt-4 inline-flex items-center text-xs font-black uppercase tracking-widest text-academic-blue hover:text-academic-gold"><i data-lucide="external-link" class="mr-2 h-4 w-4"></i>View paper</a></div></article>`).join('')}</div>
  `;
}

function renderBooks() {
  return `
    ${sectionHeading('Books', 'Books And Chapters', 'Long-form evidence of authority, synthesis, and field-building.')}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">${siteConfig.publications.books.map(book => `<article class="bg-white border border-gray-200 border-t-4 border-t-academic-gold p-7"><span class="text-sm font-black text-academic-blue">${book.year}</span><p class="mt-4 text-lg leading-relaxed font-serif text-academic-navy">${book.citation}</p><a href="${book.link}" class="mt-5 inline-flex items-center text-xs font-black uppercase tracking-widest text-academic-blue"><i data-lucide="book-open" class="mr-2 h-4 w-4"></i>Publisher link</a></article>`).join('')}</div>
  `;
}

function renderConferences() {
  return `
    ${sectionHeading('Conferences', 'Invited Talks And Conference Service', 'A public record of where the field hears from him.')}
    <div class="space-y-4">${siteConfig.conferences.map(conf => `<article class="bg-white border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"><div><span class="text-xs font-black uppercase tracking-widest text-academic-gold">${conf.event} / ${conf.year}</span><h3 class="mt-2 text-xl font-display font-black text-academic-navy">${conf.title}</h3><p class="mt-2 text-gray-600">${conf.role} at ${conf.location}</p></div><i data-lucide="mic-2" class="h-8 w-8 text-academic-gold"></i></article>`).join('')}</div>
  `;
}

function renderDownloads() {
  return `
    ${sectionHeading('Downloads', 'Documents People Actually Need', 'CV, prospectus, BibTeX, student guidance, and public biography material.')}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">${siteConfig.downloads.map(file => `<a href="${file.url}" class="bg-white border border-gray-200 hover:border-academic-gold p-6 flex items-center justify-between gap-4"><div><h3 class="font-display font-black text-academic-navy">${file.title}</h3><p class="mt-2 text-sm text-gray-500">${file.type} / ${file.size}</p></div><i data-lucide="download" class="h-6 w-6 shrink-0 text-academic-gold"></i></a>`).join('')}</div>
  `;
}

function renderProfiles() {
  return `
    ${sectionHeading('Academic Profiles', 'External Research Footprint', 'Public profiles make the scholarly trail visible and verifiable.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${siteConfig.academicProfiles.map(profile => `<a href="${profile.url}" class="bg-white border border-gray-200 hover:border-academic-gold p-7"><i data-lucide="library" class="h-7 w-7 text-academic-gold"></i><h3 class="mt-5 text-xl font-display font-black text-academic-navy">${profile.name}</h3><p class="mt-2 font-mono text-sm text-gray-500 break-words">${profile.id}</p><p class="mt-3 text-sm font-bold text-academic-blue">${profile.stat}</p></a>`).join('')}</div>
  `;
}

function renderCourses() {
  return `
    ${sectionHeading('Courses', 'Classes With Teeth', 'Every course is built around implementation, reproduction, and defense.')}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">${siteConfig.courses.map(course => `<article class="bg-white border border-gray-200 border-t-4 border-t-academic-navy p-7"><div class="flex items-start justify-between gap-4"><h3 class="text-xl font-display font-black text-academic-navy">${course.name}</h3><span class="bg-gray-100 border border-gray-200 px-3 py-1 text-xs font-black">${course.code}</span></div><p class="mt-2 text-xs font-black uppercase tracking-widest text-academic-gold">${course.level} / ${course.enrollment} students</p><p class="mt-4 text-gray-700 leading-relaxed">${course.description}</p><ul class="mt-5 space-y-2">${list(course.outcomes)}</ul></article>`).join('')}</div>
  `;
}

function renderTeachingPhilosophy() {
  return `
    ${sectionHeading('Teaching Philosophy', 'Precision, Pressure, And Confidence', 'A statement for students who want to know what they are walking into.')}
    <div class="bg-academic-navy text-white border-t-4 border-academic-gold p-8 sm:p-12"><p class="text-xl sm:text-2xl leading-loose font-serif text-gray-100">${siteConfig.teachingPhilosophy}</p></div>
  `;
}

function renderSupervision() {
  return `
    ${sectionHeading('Supervision', 'Students, Topics, And Placements', 'The mentorship record is one of the strongest intimidation signals on the site.')}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">${siteConfig.supervision.map(s => `<article class="bg-white border border-gray-200 p-7"><div class="flex items-start justify-between gap-4"><div><h3 class="text-xl font-display font-black text-academic-navy">${s.student}</h3><p class="text-sm font-black uppercase tracking-widest text-academic-gold">${s.degree} / ${s.status}</p></div><i data-lucide="user-check" class="h-6 w-6 text-academic-gold"></i></div><p class="mt-4 text-gray-700 leading-relaxed"><strong>Topic:</strong> ${s.topic}</p><p class="mt-3 text-sm font-bold text-academic-blue">${s.currentRole}</p></article>`).join('')}</div>
  `;
}

function renderTrainings() {
  return `
    ${sectionHeading('Trainings', 'Workshops And Research Formation', 'Training formats for students, hospital teams, institutions, and doctoral candidates.')}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${siteConfig.trainings.map(t => `<article class="bg-white border border-gray-200 border-l-4 border-l-academic-gold p-7"><span class="text-xs font-black uppercase tracking-widest text-gray-500">${t.audience} / ${t.duration}</span><h3 class="mt-3 text-xl font-display font-black text-academic-navy">${t.title}</h3><p class="mt-4 text-gray-700 leading-relaxed">${t.description}</p></article>`).join('')}</div>
  `;
}

function renderTestimonials() {
  return `
    ${sectionHeading('Testimonials', 'What Students Say After The Pressure', 'The tone is demanding, but the outcomes are clear.')}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">${siteConfig.testimonials.map(t => `<blockquote class="bg-academic-navy text-white border-t-4 border-academic-gold p-7"><i data-lucide="quote" class="h-8 w-8 text-academic-gold"></i><p class="mt-5 text-lg leading-relaxed font-serif text-gray-100">${t.text}</p><footer class="mt-6 text-sm font-black uppercase tracking-widest text-academic-gold">${t.author}</footer></blockquote>`).join('')}</div>
  `;
}

function renderEvents() {
  return `
    ${sectionHeading('Events', 'Upcoming Public And Technical Appearances', 'The calendar should feel active, selective, and substantial.')}
    <div class="space-y-4">${siteConfig.events.map(e => `<article class="bg-white border border-gray-200 p-6 flex flex-col md:flex-row md:items-start gap-5"><div class="md:w-40 shrink-0"><span class="block text-sm font-black text-academic-gold">${e.date}</span><span class="mt-2 inline-block bg-gray-100 border border-gray-200 px-3 py-1 text-[11px] font-black uppercase tracking-widest">${e.type}</span></div><div><h3 class="text-xl font-display font-black text-academic-navy">${e.title}</h3><p class="mt-1 text-sm font-bold text-academic-blue">${e.location}</p><p class="mt-3 text-gray-700 leading-relaxed">${e.description}</p></div></article>`).join('')}</div>
  `;
}

function renderGallery() {
  return `
    ${sectionHeading('Gallery', 'Visual Record', 'Use images to make the research environment feel alive and credible.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${siteConfig.gallery.map(img => `<figure class="bg-white border border-gray-200 overflow-hidden"><img src="${img.url}" alt="${img.caption}" class="h-64 w-full object-cover"><figcaption class="p-5"><span class="text-xs font-black uppercase tracking-widest text-academic-gold">${img.category}</span><p class="mt-2 text-sm font-semibold leading-relaxed text-academic-navy">${img.caption}</p></figcaption></figure>`).join('')}</div>
  `;
}

function renderConsultancy() {
  return `
    ${sectionHeading('Consultancy', 'Advisory Work For High-Stakes AI', siteConfig.consultancy.statement)}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="bg-white border border-gray-200 p-8"><h3 class="text-xl font-display font-black text-academic-navy uppercase tracking-widest mb-6">Services</h3><ul class="space-y-4">${list(siteConfig.consultancy.services)}</ul></div><div class="bg-academic-navy text-white border-t-4 border-academic-gold p-8"><h3 class="text-xl font-display font-black text-white uppercase tracking-widest mb-6">Engagement Process</h3><div class="space-y-4">${siteConfig.consultancy.process.map((step, i) => `<div class="flex items-center gap-4"><span class="grid h-10 w-10 place-items-center bg-academic-gold text-academic-navy font-black">${i + 1}</span><span class="font-bold">${step}</span></div>`).join('')}</div></div></div>
  `;
}

function renderContact() {
  return `
    ${sectionHeading('Contact', 'Academic And Professional Contact', 'Everything a serious visitor needs to reach the office or book a conversation.')}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 bg-white border border-gray-200 p-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${[['mail', siteConfig.author.email], ['phone', siteConfig.author.phone], ['map-pin', siteConfig.author.office], ['clock', siteConfig.author.consultation]].map(([icon, value]) => `<div class="border border-gray-100 bg-gray-50 p-5"><i data-lucide="${icon}" class="h-6 w-6 text-academic-gold"></i><p class="mt-3 font-bold text-academic-navy break-words">${value}</p></div>`).join('')}</div></div><div class="bg-academic-navy text-white border-t-4 border-academic-gold p-8"><h3 class="text-xl font-display font-black text-white uppercase tracking-widest">Office Protocol</h3><p class="mt-4 text-gray-300 leading-relaxed">For doctoral supervision, invited talks, consultancy, and collaborations, include a concise brief, timeline, and expected deliverable.</p></div></div>
  `;
}

function renderSocial() {
  return `
    ${sectionHeading('Social Media', 'Verified Academic Channels', 'Keep the professor visible without making the page feel casual.')}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${siteConfig.socialMedia.map(s => `<a href="${s.url}" class="bg-white border border-gray-200 hover:border-academic-gold p-7"><i data-lucide="${s.icon}" class="h-7 w-7 text-academic-gold"></i><h3 class="mt-5 text-xl font-display font-black text-academic-navy">${s.platform}</h3><p class="mt-2 font-mono text-sm text-gray-500 break-words">${s.handle}</p></a>`).join('')}</div>
  `;
}

const renderers = {
  'profile-summary': renderProfileSummary,
  'research-highlights': renderResearchHighlights,
  'latest-news': renderNews,
  'quick-links': renderQuickLinks,
  biography: renderBiography,
  education: renderEducation,
  experience: renderExperience,
  memberships: renderMemberships,
  awards: renderAwards,
  leadership: renderLeadership,
  'research-interests': renderResearchInterests,
  projects: renderProjects,
  grants: renderGrants,
  collaborations: renderCollaborations,
  'research-impact': renderImpact,
  'journal-articles': renderPublications,
  books: renderBooks,
  conferences: renderConferences,
  downloads: renderDownloads,
  'academic-profiles': renderProfiles,
  courses: renderCourses,
  'teaching-philosophy': renderTeachingPhilosophy,
  supervision: renderSupervision,
  trainings: renderTrainings,
  testimonials: renderTestimonials,
  news: renderNews,
  events: renderEvents,
  gallery: renderGallery,
  consultancy: renderConsultancy,
  contact: renderContact,
  'social-media': renderSocial
};

export function createPageRenderer(sectionTitle, subId, currentPath) {
  const section = getSection(sectionTitle, currentPath);
  const pageTitle = subId === 'overview' ? `${section.title} Overview` : titleize(subId);
  const contentHtml = subId === 'overview' ? renderOverview(section) : (renderers[subId] ? renderers[subId]() : renderOverview(section));

  return `
    <nav class="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto">
      <div class="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
        <a href="/" class="hover:text-academic-navy transition-colors">Home</a>
        <i data-lucide="chevron-right" class="h-4 w-4"></i>
        <a href="${section.path}" class="hover:text-academic-navy transition-colors">${section.title}</a>
        ${subId !== 'overview' ? `<i data-lucide="chevron-right" class="h-4 w-4"></i><span class="text-academic-navy">${titleize(subId)}</span>` : ''}
      </div>
    </nav>
    <header class="bg-academic-navy text-white border-b-8 border-academic-gold">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <p class="text-xs font-black uppercase tracking-[0.32em] text-academic-gold">${section.title}</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white break-words">${pageTitle}</h1>
        <p class="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">A dense academic record designed for collaborators, reviewers, students, and institutions that need proof before applause.</p>
      </div>
    </header>
    <section class="py-14 sm:py-20 bg-academic-ivory min-h-[55vh]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${contentHtml}
      </div>
    </section>
  `;
}
