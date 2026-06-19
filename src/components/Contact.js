import { siteConfig } from '../data/siteConfig';

export function createContact() {
  return `
    <section id="contact" class="py-24 bg-academic-ivory">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-academic-navy sm:text-4xl">Get in Touch</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
          <p class="mt-6 text-gray-600 max-w-2xl mx-auto">Open to research collaborations, speaking engagements, and prospective PhD student inquiries.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          <!-- Contact Info Box -->
          <div class="bg-academic-navy p-10 text-white relative overflow-hidden">
            <div class="absolute -bottom-16 -right-16 w-64 h-64 border-4 border-academic-gold/20 rounded-full"></div>
            <div class="absolute top-8 right-8 w-16 h-16 bg-academic-gold/20 rounded-full blur-xl"></div>
            
            <h3 class="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <ul class="space-y-8 relative z-10">
              <li class="flex items-start">
                <i data-lucide="map-pin" class="w-6 h-6 mr-4 text-academic-gold shrink-0"></i>
                <div>
                  <p class="font-medium text-lg">Office Location</p>
                  <p class="text-gray-400 mt-1">${siteConfig.author.office}</p>
                </div>
              </li>
              <li class="flex items-start">
                <i data-lucide="mail" class="w-6 h-6 mr-4 text-academic-gold shrink-0"></i>
                <div>
                  <p class="font-medium text-lg">Email Address</p>
                  <a href="mailto:${siteConfig.author.email}" class="text-gray-400 hover:text-white transition-colors mt-1 block">${siteConfig.author.email}</a>
                </div>
              </li>
              <li class="flex items-start">
                <i data-lucide="phone" class="w-6 h-6 mr-4 text-academic-gold shrink-0"></i>
                <div>
                  <p class="font-medium text-lg">Phone</p>
                  <p class="text-gray-400 mt-1">${siteConfig.author.phone}</p>
                </div>
              </li>
            </ul>
            
            <div class="mt-16 relative z-10">
              <p class="font-medium mb-4">Connect Professionally</p>
              <div class="flex space-x-4">
                ${siteConfig.socialMedia.map(social => `
                  <a href="${social.url}" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-academic-gold transition-colors group" aria-label="${social.platform}">
                    <span class="inline-block w-5 h-5 text-gray-300 group-hover:text-academic-navy transition-colors">
                      ${social.iconSvg}
                    </span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="p-10">
            <h3 class="text-2xl font-bold text-academic-navy mb-8">Send a Message</h3>
            <form class="space-y-6" onsubmit="event.preventDefault(); alert('Form submission mocked successfully!');">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-academic-blue focus:border-academic-blue transition-colors" placeholder="Jane" required>
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-academic-blue focus:border-academic-blue transition-colors" placeholder="Doe" required>
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-academic-blue focus:border-academic-blue transition-colors" placeholder="jane@example.com" required>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select id="subject" name="subject" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-academic-blue focus:border-academic-blue transition-colors bg-white">
                  <option>Research Collaboration</option>
                  <option>Prospective Student</option>
                  <option>Speaking Engagement</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-academic-blue focus:border-academic-blue transition-colors" placeholder="How can I help you?" required></textarea>
              </div>
              
              <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-academic-navy text-white font-semibold rounded-md hover:bg-academic-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-academic-blue shadow-sm">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
