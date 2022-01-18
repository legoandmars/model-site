<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/PrivacyFooter.svelte';

    import ModelList from '../components/ModelList.svelte';
</script>

<Navbar />
<ModelList modelFiltering="wall" />
<Footer />