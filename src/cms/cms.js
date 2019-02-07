import CMS from 'netlify-cms';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import AlbumPreview from './preview-templates/AlbumPreview';
import '../styles/main.less';

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('album', AlbumPreview);
