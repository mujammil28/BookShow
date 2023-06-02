import './footer.css';

const body = document.querySelector('body');
const footer = document.createElement('footer');
body.append(footer);

footer.innerHTML = '<div class="license">© Created by mujammil momin<a href="https://github.com/mujammil28">  all license approved.</div>';

export default footer;