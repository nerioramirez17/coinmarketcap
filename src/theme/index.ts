type Theme = {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      inversed: string;
    };
    button: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      negative: string;
      positive: string;
      warning: string;
    };
  };
  
  const theme: Theme = {
    background: {
      primary: '#1E213E',
      secondary: '#293156',
      tertiary: '#38436E',
      inversed: '#D3D3D3',
    },
    button: {
      primary: '#2FA3FF',
      secondary: '#1E213E',
      tertiary: '#767577',
    },
    text: {
      primary: '#E6E8ED',
      secondary: '#343A40',
      tertiary: '#6C757D',
      negative: '#D90429',
      positive: '#21BF73',
      warning: '#f8b84e',
    },
  };
  
  type BackgroundColorKeys = keyof Theme['background'];
  type TextColorKeys = keyof Theme['text'];
  
  export { theme, Theme, BackgroundColorKeys, TextColorKeys };
  