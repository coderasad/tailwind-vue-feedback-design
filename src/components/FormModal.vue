<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <div class="w-[480px] bg-white rounded-2xl overflow-hidden shadow">

            <div class="bg-primary-500 text-white h-16 flex items-center justify-between px-8">
                <div class="text-2xl font-medium tracking-wider ">Your Feedback</div>
                <div class="text-2xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
            </div>
            
            <div class="p-5">
                <p class="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div class="mt-2 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="orange" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star cursor-pointer"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star cursor-pointer"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star cursor-pointer"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star cursor-pointer"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star cursor-pointer"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
            </div>

            <form action="">
               <div class="p-5">
                    <label for="question_1" class="text-lg text-gray-700 block mb-3">What's your feedback?</label>
                    <textarea class="border border-gray-300 rounded-md p-4 w-full min-h-[120px] focus:outline-none focus:border-primary-500" id="question_1" placeholder="Write Here..." ></textarea>
               </div>
                
                <div class="bg-primary-50 p-5">
                    <div class="border border-dashed border-primary-500 bg-white rounded p-4 text-center cursor-pointer relative">
                        <div class="font-semibold text-xl text-gray-700">Take a screenshot</div>
                        <div class="font-medium text-md text-gray-400">Click and drag to save</div>
                        <input type="file" class="absolute w-full h-full left-0 top-0 opacity-0">
                    </div>                    

                    <input type="submit" class="bg-primary-300 text-white text-2xl w-full py-4 mt-4 rounded-md cursor-pointer focus:bg-primary-500">
                </div>                
            </form>

            <div class="text-center py-6 text-gray-700 text-lg flex justify-center items-center">
                Powered by
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target mx-3 text-primary-500"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                Roadmap
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
   
}
</script>
