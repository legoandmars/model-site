<script context="module">
    export const prerender = true; // important for static sites
    import data from "../../data/data.json";

    export function load({ url, params }) {
		// const { slug } = page.params;
        // console.log(data);
        console.log(params.slug);
        // Find the post with the slug
		const filteredPostData = data.find((p) => {
			return p.endpoint === params.slug.replace(".html", "");
		});

		return {
			props: {
        // Tell page to load that post's module
                postData: filteredPostData
			}
		};
	};
</script>


<script>
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/PrivacyFooter.svelte';
    import FNFCredits from '../../components/FNFCredits.svelte';
    import FallGuysCredits from '../../components/FallGuysCredits.svelte';

	export let postData;

    function replaceLinks(content) {
        // Replace markdown links with HTML links
        return content.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" style="text-decoration: underline;">$1</a>');
    }
    
    function getShortenedDescription(){
        if(postData.model.description.length > 150){
            return(postData.model.description.substring(0, 146)+"...")
        }else{
            return postData.model.description;
        }
    }
</script>

<Navbar />


<div class="mx-auto w-[90%] 2xl:w-[75%] pt-32 pb-2 sm:pt-16 sm:pb-16" align="center">
    {#if postData.endpoint.toLowerCase() != "fallguys" && postData.endpoint.toLowerCase() != "dripnotes" && postData.endpoint.toLowerCase() != "minecraftwallpack"}
        <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8003053308644369"
        crossorigin="anonymous"></script> -->
        <!-- Responsive ad unit -->
        <!-- <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8003053308644369"
            data-ad-slot="3670690695"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script> -->
        <div id="953660264">

            <script type="text/javascript">
        
                try {
        
                    window._mNHandle.queue.push(function (){
        
                        window._mNDetails.loadTag("953660264", "970x250", "953660264");
        
                    });
        
                }
        
                catch (error) {}
        
            </script>
        </div>
    {/if}
</div>

<div class="mx-auto w-[85%] sm:w-[70%] max-h-lg flex flex-col items-start rounded-lg border shadow-md sm:flex-col border-2 border-stone-800 bg-black rounded-lg overflow-hidden">
    <div class="w-[100%] flex flex-col sm:flex-row items-start">
        <div class="w-[100%] sm:w-[50%] rounded-t-lg sm:rounded-l-lg">
            <img class=" object-cover w-full" src="/{postData.image_name}" alt="Thumbnail for {postData.model.name}">
        </div>

        <div class="flex flex-col justify-between p-4 sm:p-8 leading-normal w-[100%] sm:w-[50%]">
            <h5 class="mb-2 text-2xl sm:text-3xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white dark:text-white">{postData.model.name}</h5>
            <div class="w-[100%] bg-white h-[2px] mt-3 mb-3 mx-auto" />
    
            <p class="mb-3 font-normal text-lg sm:text-xl xl:text-4xl 2xl:text-5xl text-stone-300">{@html replaceLinks(postData.model.description)}</p>
            <div class="flex items-end">
            </div>
        </div>    
    </div>
    <div class="hidden sm:flex w-[100%] rounded-b-lg border-t-2 border-stone-800 bg-black" >
        {#if postData.pc_only != null}
            <p class="w-[50%] text-white bg-clear  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800"><u class="text-white">PC Only</u></p>
        {:else}
            <a href="https://quest.bobbie.dev/{postData.endpoint}" class="w-[50%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-bl-lg border-r border-stone-800"><p class="text-stone-600"><u class="text-white">PC</u> <b class="text-white">/</b> Quest</p></a>
        {/if}

        {#if postData.second_button != null}
            <a download href="/{postData.file_name}" class="w-[25%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white">Download</a>
            <a href="{postData.second_button.link}" class="w-[25%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white">{postData.second_button.text}</a>
        {:else}
            <a download href="/{postData.file_name}" class="w-[50%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-br-lg border-l border-stone-800 text-white">Download</a>
        {/if}
    </div>    
    <div class="flex sm:hidden w-[100%] border-t-2 border-stone-800 bg-black" >
        {#if postData.pc_only != null}
            <p class="w-[100%] text-white bg-clear  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-bl-lg border-stone-800"><u class="text-white">PC Only</u></p>
        {:else}
            <a href="https://quest.bobbie.dev/{postData.endpoint}" class="w-[100%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-bl-lg border-stone-800"><p class="text-stone-600"><u class="text-white">PC</u> <b class="text-white">/</b> Quest</p></a>
        {/if}
    </div>     

    {#if postData.second_button != null}
        <div class="flex sm:hidden w-[100%] rounded-b-lg border-t-2 border-stone-800 bg-black" >
            <a download href="{postData.second_button.link}" class="w-[100%] text-white bg-clear hover:bg-stone-800  font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center l border-stone-800 text-white">{postData.second_button.text}</a>
        </div>
    {/if}

    <div class="flex sm:hidden w-[100%] rounded-b-lg border-t-2 border-stone-800 bg-black" >
        <a download href="/{postData.file_name}" class="w-[100%] text-white bg-clear hover:bg-stone-800 font-medium text-lg sm:text-xl xl:text-4xl 2xl:text-5xl px-5 py-2 text-center rounded-br-lg l border-stone-800 text-white">Download</a>
    </div> 
</div>

{#if postData.fallguyscredits != null}
    <div class="w-[100%] pt-8"></div>
    <FallGuysCredits />
{/if}

{#if postData.fnfcredits != null}
    <div class="w-[100%] pt-8"></div>
    <FNFCredits />
{/if}

<Footer />

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .container{
        justify-content: center !important;
        justify-items: center !important;
        align-content: center !important;
        align-items: center !important;
    }

    body{
        background-color: #121212;
    }

    a {
        color: #78716C;
    }
    p, button, h5{
        font-family: 'Inter', sans-serif;
        color: white;
    }
</style>

<!-- metadata goes here! -->

<svelte:head>
    <meta charset="utf-8">

    <title>{postData.model.name}</title>

    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content={getShortenedDescription()}>

    <meta content="bobbie.dev" property="og:site_name">
    <meta content={postData.model.name} property="og:title">
    <meta content={getShortenedDescription()} property="og:description">
    <meta name="theme-color" content="#96e3ff">
    <meta name="twitter:card" value="summary">
    <meta content={"https://bobbie.dev/"+postData.image_name} property="og:image">
</svelte:head>