import { translate } from 'bing-translate-api';
translate('Hello world', null, 'es').then(res => {
  console.log('Bing success:', res.translation);
}).catch(err => {
  console.error('Bing error:', err);
});
