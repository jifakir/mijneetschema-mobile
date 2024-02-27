import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mijneetApi = createApi({
  reducerPath: 'mijneetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userDetails.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'Subscription',
    'Auth',
    'Meal',
    'Trainer',
    'Product',
    'Calculator',
    'User',
    'Profile',
    'TrainerRating',
    'MealRating',
    'ProductRating',
    'Dietplan',
    'Weight',
    'Message',
    'Order',
    'Mealplan',
    'MealPrepares',
    'Ingredient',
    'unlistedIngredients',
    'DietGoal',
    'Orders',
    'Jobs',
  ],
  endpoints: (builder) => ({
    // Authentication
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/auth/register/user',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerTrainer: builder.mutation({
      query: (body) => ({
        url: '/auth/register/trainer',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    // +++++++++++ Profile ++++++++++++
    fetchProfile: builder.query({
      query: () => '/users/profile',
      providesTags: ['User', 'Trainer', 'MealPrepares', 'Profile', 'Auth'],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: `/users/profile`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: `/users/profile/updated-password`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    requestResetPassword: builder.mutation({
      query: (body) => ({
        url: `/users/profile/reset-password`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: `/users/profile/reset-password`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    uploadUserAvatar: builder.mutation({
      query: (body) => ({
        url: `/users/profile/upload-avatar`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    uploadUserCoverPhoto: builder.mutation({
      query: (body) => ({
        url: `/users/profile/upload-cover-img`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User', 'Trainer', 'MealPrepares', 'Profile'],
    }),
    removeFromConnectedUser: builder.mutation({
      query: (id) => ({
        url: `/profile/connected-users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User', 'Profile', 'Trainer'],
    }),
    // +++++++++++ Ingredients ++++++++++++
    fetchIngredients: builder.query({
      query: (body) => ({
        url: '/admin/ingredients',
        params: body,
      }),
      providesTags: ['Ingredient'],
    }),
    fetchIngredientsByKeyword: builder.query({
      query: (body) => ({
        url: '/admin/ingredients-by?limit=10',
        params: body,
      }),
    }),
    fetchIngredientsById: builder.query({
      query: (body) => ({
        url: '/admin/ingredients-by?limit=10',
        params: body,
      }),
    }),
    fetchAllUnlistedIngredients: builder.query({
      query: () => ({
        url: '/meals/mealplan/unlisted-ingredients',
      }),
      providesTags: ['unlistedIngredients'],
    }),
    addToUnlistedIngredients: builder.mutation({
      query: (body) => ({
        url: '/meals/mealplan/unlisted-ingredients',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['unlistedIngredients'],
    }),
    updateUnlistedIngredients: builder.mutation({
      query: (body) => ({
        url: '/meals/mealplan/unlisted-ingredients',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['unlistedIngredients'],
    }),
    addIngredient: builder.mutation({
      query: (body) => ({
        url: `/admin/ingredients`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Ingredient'],
    }),
    fetchIngredient: builder.query({
      query: ({ ingredientsId }) =>
        `/ingredients?ingredients_id=${ingredientsId}`,
      providesTags: ['Ingredient'],
    }),
    // ++++++++++++ Meals +++++++++++
    fetchMealCategory: builder.query({
      query: () => '/meals/category',
      providesTags: ['Meal'],
    }),
    fetchMeals: builder.query({
      query: (body) => ({
        url: '/meals',
        params: body,
      }),
      providesTags: ['Meal'],
    }),
    fetchMeal: builder.query({
      query: ({ mealId }) => `/meals/${mealId}`,
      providesTags: ['Meal'],
    }),
    addMeal: builder.mutation({
      query: (body) => ({
        url: '/meals',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Meal'],
    }),
    updateMeal: builder.mutation({
      query: ({ body, mealId }) => {
        return {
          url: `/admin/meals/${mealId}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['Meal'],
    }),
    removeFromMeals: builder.mutation({
      query: (id) => ({
        url: `/meals/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Meal'],
    }),
    fetchMealplan: builder.query({
      query: (body) => ({
        url: '/meals/mealplan',
        params: body,
      }),
      providesTags: ['Mealplan'],
    }),
    addToMealplan: builder.mutation({
      query: (body) => ({
        url: '/meals/mealplan',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Mealplan'],
    }),

    removeFromMealplan: builder.mutation({
      query: (body) => ({
        url: `/meals/mealplan`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Mealplan'],
    }),
    cleanMealplan: builder.mutation({
      query: () => ({
        url: `/meals/clean-mealplan`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Mealplan'],
    }),
    // ++++++++++++ Products +++++++++++
    fetchProductCategory: builder.query({
      query: () => '/products/category',
      providesTags: ['Product'],
    }),
    fetchProducts: builder.query({
      query: (body) => ({
        url: '/products',
        params: body,
      }),
      providesTags: ['Product'],
    }),
    fetchProduct: builder.query({
      query: ({ productId }) => `/products/product/${productId}`,
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    // ++++++++++++++++ Trainers ++++++++++++++
    fetchTrainers: builder.query({
      query: (data) => ({
        url: '/trainers',
        params: data,
      }),
      providesTags: ['Trainer'],
    }),
    fetchTrainer: builder.query({
      query: ({ trainerId }) => `/trainers/${trainerId}`,
      providesTags: ['Trainer'],
    }),
    updateTrainer: builder.mutation({
      query: ({ id, manData }) => ({
        url: `/trainers/${id}`,
        method: 'PATCH',
        body: manData,
      }),
      invalidatesTags: ['Trainer'],
    }),
    uploadVideo: builder.mutation({
      query: (body) => ({
        url: `/trainers/video`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Trainer'],
    }),
    fetchVideos: builder.query({
      query: (trainerId) => ({
        url: `/trainers/video`,
        method: 'GET',
        params: { trainerId },
      }),
      providesTags: ['Trainer'],
    }),

    //+++++++++++++++++ Users ++++++++++++++++++
    fetchUser: builder.query({
      query: ({ userId }) => `/users/user/${userId}`,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: ({ id, manData }) => ({
        url: `/users/user/${id}`,
        method: 'PATCH',
        body: manData,
      }),
      invalidatesTags: ['User'],
    }),

    fetchWeight: builder.query({
      query: (body) => ({
        url: `/users/user/weight`,
        params: body,
      }),
      providesTags: ['Weight'],
    }),
    addWeight: builder.mutation({
      query: (body) => ({
        url: `/users/user/weight`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Weight'],
    }),
    fetchDietGoal: builder.query({
      query: () => `/users/diet-goal`,
      providesTags: ['DietGoal'],
    }),
    addDietGoal: builder.mutation({
      query: (body) => ({
        url: `/users/diet-goal`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['DietGoal'],
    }),
    updateDietGoal: builder.mutation({
      query: (body) => ({
        url: `/users/diet-goal`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['DietGoal', 'Calculator', 'Dietplan'],
    }),
    // Orders
    fetchOrders: builder.query({
      query: () => `/users/orders`,
      providesTags: ['Orders'],
    }),
    fetchOrder: builder.query({
      query: (orderId) => `/orders/${orderId}`,
      providesTags: ['Orders'],
    }),
    fetchOrderMeals: builder.query({
      query: () => `/orders/meals`,
      providesTags: ['Orders'],
    }),
    // Ratings
    fetchTrainerRatings: builder.query({
      query: ({ trainerId }) => `/trainers/rating/${trainerId}`,
      providesTags: ['TrainerRating'],
    }),
    fetchMealRatings: builder.query({
      query: ({ mealId }) => `/trainers/rating/${mealId}`,
      providesTags: ['MealRating'],
    }),
    fetchProductRatings: builder.query({
      query: ({ productId }) => `/products/rating/${productId}`,
      providesTags: ['ProductRating'],
    }),

    rateTrainer: builder.mutation({
      query: (body) => ({
        url: '/trainers/rating',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TrainerRating'],
    }),
    rateMeal: builder.mutation({
      query: (body) => ({
        url: '/meals/rating',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['MealRating'],
    }),
    rateProduct: builder.mutation({
      query: (body) => ({
        url: '/products/rating',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ProductRating'],
    }),

    // Subscription
    trainerSubscription: builder.mutation({
      query: (body) => ({
        url: '/trainers/subscription',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    trainerSubsComplete: builder.mutation({
      query: (body) => ({
        url: '/trainers/subscription-complete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    userSubscription: builder.mutation({
      query: (body) => ({
        url: '/payment/user-subscription',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    userSubsComplete: builder.mutation({
      query: (body) => ({
        url: '/payment/user-subs-complete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    mandateCheckout: builder.mutation({
      query: (body) => ({
        url: `/subscription/mandate`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    subscribe: builder.mutation({
      query: (body) => ({
        url: `/subscription/subscribe`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Subscription'],
    }),
    getSubscription: builder.query({
      query: (userId) => ({
        url: `/subscriptions`,
        params: { userId },
      }),
      invalidatesTags: ['Subscription'],
    }),

    // Dietplan Calculator
    fetchDietplan: builder.query({
      query: (body) => ({
        url: '/calculator',
        params: body,
      }),
      providesTags: ['Calculator', 'Dietplan'],
    }),
    createDietplan: builder.mutation({
      query: (body) => ({
        url: '/dietplan',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Calculator'],
    }),
    saveCalculator: builder.mutation({
      query: (body) => ({
        url: '/calculator',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Calculator', 'DietGoal'],
    }),
    saveLeaddata: builder.mutation({
      query: (body) => ({
        url: '/leaddata',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Calculator'],
    }),

    // Dietplan Purchase
    purchaseDietplan: builder.mutation({
      query: (body) => ({
        url: '/dietplan/payment',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Dietplan'],
    }),
    purchaseDietplanComplete: builder.mutation({
      query: (body) => ({
        url: '/dietplan/payment-complete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Dietplan'],
    }),
    // Dietplan Purchase
    placeOrder: builder.mutation({
      query: (body) => ({
        url: '/order/payment',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),
    completeOrder: builder.mutation({
      query: (body) => ({
        url: '/order/payment-complete',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),

    // Fetch notifications
    fetchNotification: builder.query({
      query: () => '/notification',
    }),
    // Free Plan
    addToFreePlan: builder.mutation({
      query: (body) => ({
        url: '/trainers/freeplan',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Trainer'],
    }),
    removeFromFreePlan: builder.mutation({
      query: (body) => ({
        url: '/trainers/freeplan',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Trainer'],
    }),
    // News Letter
    subscribeForNewsletter: builder.mutation({
      query: (body) => ({
        url: '/newsletter',
        method: 'POST',
        body,
      }),
    }),
    // Messages
    fetchMessage: builder.query({
      query: (body) => ({
        url: '/messages',
        params: body,
      }),
      providesTags: ['Message'],
    }),
    fetchUnreadMessage: builder.query({
      query: () => '/messages/unread',
      providesTags: ['Message'],
    }),
    // Meal prepares
    fetchMealPrepares: builder.query({
      query: (data) => ({
        url: '/meal-prepares',
        params: data,
      }),
      providesTags: ['MealPrepares'],
    }),
    registerMealPrepares: builder.mutation({
      query: (body) => ({
        url: '/auth/register/meal-prepares',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    fetchMealPrepare: builder.query({
      query: ({ mealPrepareId }) => `/meal-prepares/${mealPrepareId}`,
      providesTags: ['MealPrepares'],
    }),
    // Jobs
    fetchJobs: builder.query({
      query: (data) => ({
        url: '/jobs',
        params: data,
      }),
      providesTags: ['Jobs'],
    }),
    fetchJob: builder.query({
      query: ({ jobId }) => `/jobs/${jobId}`,
      providesTags: ['Jobs'],
    }),
    applyJob: builder.mutation({
      query: (body) => ({
        url: '/jobs/apply',
        method: 'POST',
        body,
      }),
      providesTags: ['Jobs'],
    }),
  }),
});

export const {
  useFetchMealCategoryQuery,
  useFetchTrainersQuery,
  useFetchTrainerQuery,
  useFetchUserQuery,
  // Ingredients
  useFetchIngredientsByIdQuery,
  useFetchIngredientsByKeywordQuery,
  useFetchIngredientsQuery,
  useAddIngredientMutation,
  useFetchAllUnlistedIngredientsQuery,
  useAddToUnlistedIngredientsMutation,
  useUpdateUnlistedIngredientsMutation,
  useFetchIngredientQuery,
  //Profile
  useFetchProfileQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useRequestResetPasswordMutation,
  useResetPasswordMutation,
  useUploadUserAvatarMutation,
  useUploadUserCoverPhotoMutation,
  useRemoveFromConnectedUserMutation,
  useRemoveFromMealsMutation,

  // +++++++++ subscriptions +++++
  useMandateCheckoutMutation,
  useSubscribeMutation,
  useGetSubscriptionQuery,
  // Meals
  useFetchMealsQuery,
  useFetchMealQuery,
  useUpdateMealMutation,
  useFetchMealplanQuery,
  useAddToMealplanMutation,
  useCleanMealplanMutation,
  useRemoveFromMealplanMutation,
  useFetchProductsQuery,
  useFetchProductQuery,
  useFetchMealRatingsQuery,
  useFetchTrainerRatingsQuery,
  useFetchProductRatingsQuery,
  useLoginMutation,
  useRegisterUserMutation,
  useRegisterTrainerMutation,
  useRateMealMutation,
  useRateProductMutation,
  useRateTrainerMutation,
  useTrainerSubscriptionMutation,
  useTrainerSubsCompleteMutation,
  useUserSubscriptionMutation,
  useUserSubsCompleteMutation,
  useFetchDietplanQuery,
  useSaveCalculatorMutation,
  useSaveLeaddataMutation,
  useFetchNotificationQuery,
  useFetchProductCategoryQuery,
  usePurchaseDietplanMutation,
  useUpdateTrainerMutation,
  useUpdateUserMutation,
  useFetchWeightQuery,
  useAddWeightMutation,
  useAddToFreePlanMutation,
  useRemoveFromFreePlanMutation,
  useSubscribeForNewsletterMutation,
  usePurchaseDietplanCompleteMutation,
  useFetchMessageQuery,
  usePlaceOrderMutation,
  useCompleteOrderMutation,
  useAddProductMutation,
  useUploadVideoMutation,
  useFetchVideosQuery,
  useFetchUnreadMessageQuery,
  useCreateDietplanMutation,
  // Diet goal
  useFetchDietGoalQuery,
  useUpdateDietGoalMutation,
  useAddDietGoalMutation,
  // Mealprepaes
  useFetchMealPreparesQuery,
  useFetchMealPrepareQuery,
  useRegisterMealPreparesMutation,
  // Meals
  useAddMealMutation,
  // Orders
  useFetchOrdersQuery,
  useFetchOrderQuery,
  useFetchOrderMealsQuery,
  // Jobs
  useFetchJobsQuery,
  useFetchJobQuery,
  useApplyJobMutation,
} = mijneetApi;
