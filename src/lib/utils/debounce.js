/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last time it was invoked.
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {boolean} [immediate=false] - Whether to invoke the function on the leading edge instead of the trailing edge
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait, immediate = false) {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    // The function to be executed after the debounce time has elapsed
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    // Determine whether to invoke the function on the leading edge
    const callNow = immediate && !timeout;
    
    // Reset the timer for each function call
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    // Invoke the function immediately if needed
    if (callNow) func.apply(context, args);
  };
}
