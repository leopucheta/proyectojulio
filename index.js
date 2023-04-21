<script src="js/js-cookie.js"></script>

// Función para manejar el evento del botón de aceptar cookies
const handleAcceptCookies = () => {
  // Se crean las cookies con sus valores y opciones correspondientes
  Cookies.set('cookie_sesion', '12345', { expires: 1, sameSite: 'strict' });
  Cookies.set('cookie_persistentes', '67890', { expires: 365, sameSite: 'strict' });

  // Se elimina el aviso de cookies
  const cookiesBanner = document.getElementById('cookies-banner');
  cookiesBanner.parentNode.removeChild(cookiesBanner);
}

// Función para manejar el evento del botón de rechazar cookies
const handleRejectCookies = () => {
  // Se eliminan todas las cookies
  Cookies.remove('cookie_sesion');
  Cookies.remove('cookie_persistentes');

  // Se elimina el aviso de cookies
  const cookiesBanner = document.getElementById('cookies-banner');
  cookiesBanner.parentNode.removeChild(cookiesBanner);
}

// Se obtienen los elementos de los botones de aceptar y rechazar cookies
const acceptCookiesButton = document.getElementById('accept-cookies');
const rejectCookiesButton = document.getElementById('reject-cookies');

// Se les añade a los botones el evento de click correspondiente
acceptCookiesButton.addEventListener('click', handleAcceptCookies);
rejectCookiesButton.addEventListener('click', handleRejectCookies);
