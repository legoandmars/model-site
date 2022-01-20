<script>
    import ModelCard from '../components/ModelCard.svelte';

    export let modelFiltering;
</script>

<script context="module">
    export const prerender = true; // important for static sites
    import data from "../data/data.json";

    export const allData = data;
</script>

<div class="mx-auto w-[90%] 2xl:w-[75%] pt-32 pb-2 sm:pt-16 sm:pb-16">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8003053308644369"
    crossorigin="anonymous"></script>
    <!-- Responsive ad unit -->
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8003053308644369"
        data-ad-slot="3670690695"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>

<div class="grid mx-auto w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-[90%] 2xl:w-[75%] pb-0 gap-8 container">

    {#each allData as item}
        {#if item.hidden !== true}
            {#if item.type === modelFiltering || modelFiltering === 'all'}
                <ModelCard imageURL="{item.image_name}" imageAltText="{item.endpoint}" downloadLink="{item.file_name}" detailsLink="{item.endpoint}"></ModelCard>
            {/if}
        {/if}
    {/each}

</div>

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
        min-height: 100%;
    }

    p, button{
        font-family: 'Inter', sans-serif;
        color: white;
    }
</style>

<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    {#if modelFiltering == "all"}
        <title>Bobbie's Model Site</title>
        <meta name="description" content="Download Bobbie's model packs, notes, walls, and more!">

        <meta content="Bobbie's Model Site" property="og:title">
        <meta content="Download Bobbie's model packs, notes, walls, and more!" property="og:description">
    {:else}
        <title>{(modelFiltering.charAt(0).toUpperCase() + modelFiltering.slice(1)+"s").replace('Miscs', 'Misc Models')}</title>

        <meta content={(modelFiltering.charAt(0).toUpperCase() + modelFiltering.slice(1)+"s").replace('Miscs', 'Misc Models')} property="og:title">
        <meta name="description" content={`Download Bobbie's Custom ${(modelFiltering.charAt(0).toUpperCase() + modelFiltering.slice(1)+"s").replace('Miscs', 'Misc Models')} for Beat Saber.`}>
        <meta content="Download Bobbie's Custom {(modelFiltering.charAt(0).toUpperCase() + modelFiltering.slice(1)+"s").replace('Miscs', 'Misc Models')} for Beat Saber." property="og:description">
    {/if}    

    <meta content="https://bobbie.dev/bobbie.png" property="og:image">
    <meta content="bobbie.dev" property="og:site_name">
    <meta name="theme-color" content="#96e3ff">
    <meta name="twitter:card" value="summary">
</svelte:head>