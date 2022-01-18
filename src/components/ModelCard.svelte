<script>
    export let imageURL;
    export let imageAltText;
    export let downloadLink;
    export let detailsLink;
</script>

<div class="sm:max-w-sm max-w-[18rem] rounded-lg overflow-hidden shadow-lg">
    <div class="h-0 w-[100%] pb-[100%]">
        <button>
            <img class="w-full border-2 border-stone-800 rounded-t-lg border-b-0" src={imageURL} alt={imageAltText}>
        </button>
    </div>
    <div class="flex rounded-b-lg border-2 border-stone-800 bg-black">
        <a download href="/{downloadLink}" class="w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800 text-white">Download</a>
        <a href="/{detailsLink}" class="w-[50%] text-white bg-clear hover:bg-stone-800 focus:ring-4 focus:ring-blue-300 font-medium text-2xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white">Details</a>
    </div>
  </div>
