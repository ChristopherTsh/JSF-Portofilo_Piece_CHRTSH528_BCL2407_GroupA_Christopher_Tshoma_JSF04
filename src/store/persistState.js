/**
 * A Vuex plugin to persist and restore the state from localStorage.
 * @returns {Function} A function that takes a Vuex store instance and configures state persistence.
 */
export default function persistState() {
  return (store) => {
    console.log('Persist State Plugin Initialized');
  
    // Retrieve and apply saved state from localStorage, if available
    const savedState = localStorage.getItem('store');
    if (savedState) {
      console.log('Restoring State:', JSON.parse(savedState));
      store.replaceState(Object.assign(store.state, JSON.parse(savedState)));
    }
  
    // Subscribe to state changes and persist state to localStorage
    store.subscribe((mutation, state) => {
      console.log('State Changed:', state);
      localStorage.setItem('store', JSON.stringify(state));
    });
  };
}
