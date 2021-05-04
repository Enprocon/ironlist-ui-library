export const getDefaultComponent = (variant) => {
  switch (variant) {
    case 'h1': {
      return 'h1';
    }
    case 'h2': {
      return 'h2';
    }
    case 'h3': {
      return 'h3';
    }
    case 'h4': {
      return 'h4';
    }
    case 'h5': {
      return 'h5';
    }
    case 'h6': {
      return 'h6';
    }
    case 'l1':
    case 'l2':
    case 'l3':
    case 'l4': {
      return 'span';
    }
    default: {
      return 'p';
    }
  }
};
