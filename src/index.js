import '@babel/polyfill';
import createApp from './app/app';

const app = createApp();

app.listen(3000);
console.log(` 
█░█ █▀▀█ █░░ █▀▀ ░▀░ █▀▀▄ █▀▀█ 
█▀▄ █▄▄█ █░░ █▀▀ ▀█▀ █░░█ █░░█ 
▀░▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀░ ▀▀▀▀ 

　 　 █▀▀ █▀▀█ █▀▀█ █▀▀ █▀▀ 
　 　 ▀▀█ █░░█ █▄▄█ █░░ █▀▀ 
　 　 ▀▀▀ █▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ 

App is running at port 3000
`);