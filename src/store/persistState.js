export default function persistState() {
    return (store) => {
      console.log('Persist State Plugin Initialized');
  
      const savedState = localStorage.getItem('store');
      if (savedState) {
        console.log('Restoring State:', JSON.parse(savedState));
        store.replaceState(Object.assign(store.state, JSON.parse(savedState)));
      }
  
      store.subscribe((mutation, state) => {
        console.log('State Changed:', state);
        localStorage.setItem('store', JSON.stringify(state));
      });
    };
  }
