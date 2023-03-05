export const getCode = () => {
  let code = '';

  if (window.location.pathname.includes('/auth')) {
    code = new URLSearchParams(window.location.search.substring(1))
      .get('code');
  }

  return code;
};
