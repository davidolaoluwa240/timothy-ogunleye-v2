import '../style.css';
import { createIcons, icons } from 'lucide';
import { createNavbar } from '../components/Navbar';
import { createFooter } from '../components/Footer';
import { createPageRenderer } from '../components/PageRenderer';

const app = document.querySelector('#app');
app.innerHTML = `
  ${createNavbar()}
  <main class="min-h-screen">
    ${createPageRenderer('RESEARCH', 'overview', '/research/')}
  </main>
  ${createFooter()}
`;

createIcons({ icons, attrs: { class: 'lucide-icon', 'stroke-width': 2 }, nameAttr: 'data-lucide' });
