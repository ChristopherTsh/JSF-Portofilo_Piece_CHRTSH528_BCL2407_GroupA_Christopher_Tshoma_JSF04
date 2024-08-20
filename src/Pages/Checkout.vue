
  <template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Cart
            </span>
          </li>
  
          <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
            <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Checkout
            </span>
          </li>
  
          <li class="flex shrink-0 items-center">
            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Order summary
          </li>
        </ol>
  
        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div class="min-w-0 flex-1 space-y-8">
            <div class="space-y-4">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
  
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                  <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                </div>
  
                <div>
                  <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email*</label>
                  <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                </div>
  
                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">Country*</label>
                  </div>
                  <select id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option selected>United States</option>
                    <option value="AS">Australia</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
  
                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label for="select-city-input-3" class="block text-sm font-medium text-gray-900 dark:text-white">City*</label>
                  </div>
                  <select id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <option selected>San Francisco</option>
                    <option value="NY">New York</option>
                    <option value="LA">Los Angeles</option>
                    <option value="CH">Chicago</option>
                    <option value="HU">Houston</option>
                  </select>
                </div>
  
                <div>
                  <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number*</label>
                  <div class="flex items-center">
                    <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                      <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                        <mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                        </mask>
                        <g mask="url(#a)">
                          <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                        </g>
                      </svg>
                      <span>+1</span>
                      <svg class="ms-3 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </button>
                    <div id="dropdown-phone-3" class="z-10 hidden absolute w-32 rounded-lg border bg-white shadow dark:border-gray-700 dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button-3">
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+44</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+49</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+39</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">+1</a>
                        </li>
                      </ul>
                    </div>
                    <input type="text" id="phone-input-3" class="block w-full rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="000 0000 0000" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-8 flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 lg:mt-0 lg:max-w-xs">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</h2>
  
            <div class="flex justify-between text-gray-900 dark:text-white">
              <span>Subtotal</span>
              <span>$499.00</span>
            </div>
            <div class="flex justify-between text-gray-900 dark:text-white">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div class="flex justify-between text-gray-900 dark:text-white">
              <span>Total</span>
              <span>$509.00</span>
            </div>
            <a href="#checkout" class="mt-4 inline-flex items-center rounded-lg border border-primary-600 bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:border-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-600">
              <svg class="mr-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Checkout
            </a>
          </div>
        </div>
      </form>
    </section>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>

  </style>
  
  