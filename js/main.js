import './util.js';
import './thumbnail.js';
import './form.js';
import './gallery.js';
import { renderGallery } from './gallery.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { initFilter } from './filters.js';

async function bootstrap() {
  try {
    const data = await loadPictures();
    renderGallery(data);
    initFilter(data); // 12
  } catch {
    showErrorMessage();
  }
}

bootstrap();
