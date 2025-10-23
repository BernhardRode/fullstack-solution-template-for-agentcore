import { Mode } from '@cloudscape-design/global-styles';

const STORAGE_THEME_KEY = 'genaiid-agentcore-theme';

class StorageHelper {
  static getTheme() {
    try {
      const theme = localStorage.getItem(STORAGE_THEME_KEY);
      if (theme === Mode.Dark || theme === Mode.Light) {
        return theme;
      }
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
    }
    return Mode.Light;
  }

  static setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_THEME_KEY, theme);
      this.applyTheme(theme);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }

  static applyTheme(theme) {
    document.documentElement.style.setProperty('--app-color-scheme', theme === Mode.Dark ? 'dark' : 'light');
  }
}

export default StorageHelper;
