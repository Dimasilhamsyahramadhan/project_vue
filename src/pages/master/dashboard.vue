<template>
    <div class="w-screen h-screen flex">
        <!--Side Bar -->
        <div class="w-[220px] h-full bg-gray-200 text-white" v-show="showSide">
            <div class="h-[50px] bg-gray-800 flex justify-center items-center">
              <div class="font-semibold dark:text-white text-left">
                <img class="ml-7 mt-5 w-10 h-10 rounded-full border-2 border-gray-50" src="data:image/png;base64,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" alt="" >
                <h2>Administrator</h2>
                  </div>
            </div>
            <div class="bg-gray-800 h-[calc(100%-50px)] px-[20px] py-[20px]" >
            <div class="flex flex-col justify-between h-full">
              <div class="flex flex-col space-y-[10px]">
                    <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  Home
                </router-link>
                <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Profile
                   </router-link>
                   <router-link to="/books" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  Books
                   </router-link>
                   <router-link to="/download" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  Dwonload
                   </router-link>
                </div>
                
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-350">
          <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
              <!-- Menu -->
              <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
                </div>
                <!-- search bar -->
                <div class="w-[calc(100%-30px)] flex">
            <div class="w-[calc(100%-200px)] flex justify-center ">
              <form class="flex items-center w-[500px]">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                  <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                    </svg>
                  </router-link>
                </div>
              </form>
            </div>
            <!-- user login -->
            <div class="w-[200px] ">
              <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
                  <div class="mt-2">Dimas Ilhamsyah R</div>
                <div class="font-semibold dark:text-white text-left">
                </div>
              </div>
              <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1 text-left" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
            </div>
          <div class="h-[calc(100vh-50px)] bg-white"></div>
        </div> 
        <!-- Main -->
    </div>

</template>

<script>
export default{
  data() {
    return {
      showDropDown: false,
      showSide:true
    }
  },
  methods:{
    //hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    }
  }

}
</script>

<style>

</style>
