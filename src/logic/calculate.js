import operate from './operate';

const Calculate = (dataObj, btnName) => {
  let {
    total,
    next,
    operation,
  } = dataObj;

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '.':
      total = `${total}.`;
      break;
    case '=':
      if (!total || !next || !operation) return 0;
      total = (total + operation + next).toString();
      break;
    case '+': case '-': case '*': case '/': case '%':
      total = operate(total, next, operation);
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (!total) total = btnName;
      if (total && !next) next = btnName;
      break;
    default:
      total = 'Error';
  }
  return dataObj;
};

export default Calculate;
