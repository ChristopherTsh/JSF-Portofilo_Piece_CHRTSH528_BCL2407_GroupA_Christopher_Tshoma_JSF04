<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2
        class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"
      >
        Shopping Cart
      </h2>

      <ol
        class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base"
      >
        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Cart
          </span>
        </li>

        <li
          class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
        >
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
          >
            <svg
              class="me-2 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Checkout
          </span>
        </li>

        <li class="flex shrink-0 items-center">
          <svg
            class="me-2 h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Order summary
        </li>
      </ol>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <div
              v-if="cart.length === 0"
              class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
            >
              Your cart is empty.
            </div>
            <div v-else>
              <div
                v-for="product in cart"
                :key="product.id"
                class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
              >
                <div
                  class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
                >
                  <a :href="product.link" class="shrink-0 md:order-1">
                    <img
                      :src="product.image"
                      class="h-20 w-20"
                      :alt="product.title"
                    />
                  </a>

                  <label for="counter-input" class="sr-only"
                    >Choose quantity:</label
                  >
                  <div
                    class="flex items-center justify-between md:order-3 md:justify-end"
                  >
                    <div class="flex items-center">
                      <button
                        @click="decrementQuantity(product.id)"
                        type="button"
                        class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        v-model.number="product.quantity"
                        class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                        readonly
                      />
                      <button
                        @click="incrementQuantity(product.id)"
                        type="button"
                        class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div class="text-end md:order-4 md:w-32">
                      <p
                        class="text-base font-bold text-gray-900 dark:text-white"
                      >
                        ${{ (product.price * product.quantity).toFixed(2) }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md"
                  >
                    <a
                      :href="product.link"
                      class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                      >{{ product.title }}</a
                    >

                    <div class="flex items-center gap-4">
                      <button
                        @click="addToFavorites(product.id)"
                        type="button"
                        class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          class="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        Add to Favorites
                      </button>

                      <button
                        @click="removeFromCart(product.id)"
                        type="button"
                        class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        <svg
                          class="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div
            class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
          >
            <p class="text-xl font-semibold text-gray-900 dark:text-white">
              Order summary
            </p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt
                    class="text-base font-normal text-gray-500 dark:text-gray-400"
                  >
                    Total
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    ${{ discountedTotal.toFixed(2) }}
                  </dd>
                </dl>

                <div
                  v-if="discountItemsCount < 5"
                  class="text-sm text-green-600 dark:text-green-400"
                >
                  Discount Items: {{ discountItemsCount }}/5
                </div>
                <div v-else class="text-sm text-green-600 dark:text-green-400">
                  Discount Applied: 10% off
                </div>
              </div>

              <!-- Modified Checkout Button -->
              <button
                @click="goToCheckout"
                class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Proceed to Checkout
              </button>

              <div class="flex items-center justify-center gap-2">
                <span
                  class="text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  or
                </span>
                <router-link to="/">
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </router-link>
              </div>
            </div>

            <!-- Voucher Input Section -->
            <div
              class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
            >
              <form class="space-y-4">
                <div>
                  <label
                    for="voucher"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Voucher code"
                  />
                </div>
                <button
                  type="submit"
                  class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Voucher
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore, mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { useRouter } from "vue-router";

/**
 * @file CartComponent.vue
 * @description A Vue.js component representing a shopping cart page, displaying the cart items, order summary, and options to proceed to checkout or apply a voucher.
 * 
 * @template
 * @section
 * - Displays the shopping cart, order summary, and checkout options.
 * - If the cart is empty, a message is shown.
 * - Users can increase or decrease product quantities, add products to favorites, remove products from the cart, and proceed to checkout.
 * 
 * @script
 * @import { useStore, mapState, mapMutations, mapActions, mapGetters } from "vuex";
 * @import { useRouter } from "vue-router";
 * 
 * @setup
 * - Retrieves the Vuex store and router instances.
 * - Defines `goToCheckout` function to navigate to the checkout page.
 * - Retrieves the current user's cart from Vuex state.
 * 
 * @computed
 * @property {Array} cart - The current user's shopping cart.
 * @property {Function} discountedTotal - Calculates the total price with any applicable discounts.
 * @property {Function} discountItemsCount - Counts the number of items in the cart that are eligible for a discount.
 * 
 * @methods
 * @method incrementQuantity - Increments the quantity of a specified product in the cart.
 * @method decrementQuantity - Decrements the quantity of a specified product in the cart.
 * @method removeFromCart - Removes a specified product from the cart.
 * @method proceedToPayPal - Proceeds to PayPal for payment processing.
 * 
 * @return {Object} - Returns the necessary data and methods for the template.
 */

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const goToCheckout = () => {
      router.push("/checkout");
    };
    const userId = store.state.currentUser?.userId;
    const cart = userId ? store.state.usersData[userId].cart : [];

    return {
      goToCheckout,
      cart,
    };
  },
  computed: {
    ...mapGetters(["getCart"]),
    ...mapGetters(["cartTotal"]),
    discountedTotal() {
      const discount = this.discountItemsCount >= 5 ? 0.1 : 0;
      return this.cartTotal * (1 - discount);
    },
    discountItemsCount() {
      console.log(this.cart);
      return this.cart.length;
    },
  },
  methods: {
    ...mapMutations([
      "incrementQuantity",
      "decrementQuantity",
      "removeFromCart",
    ]),
    ...mapActions(["proceedToPayPal"]),
  },
};
</script>
