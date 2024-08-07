<template>
    <div class="loading-container flex justify-center items-center h-screen">
      <svg class="loading-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="none" />
        <circle cx="50" cy="50" r="35" stroke="blue" stroke-width="4" stroke-dasharray="164.93361431346415 56.97787143782138" fill="none">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" />
        </circle>
      </svg>
    </div>
  </template>
  
  <style>
  /**
   * Styles for the loading component.
   */
  
  /* Container for the loading animation. Centers the SVG both vertically and horizontally */
  .loading-container {
    background-color: #f3f4f6;
  }
  
  /* Styles for the SVG used for the loading animation. Sets the width and height */
  .loading-svg {
    width: 50px;
    height: 50px;
  }
  </style>
  