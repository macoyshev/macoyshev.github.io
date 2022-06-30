<script lang="ts">
    import SocialNetworks, {changeOpacity} from "$lib/SocialNetworks.svelte";
</script>

<nav class="menu">
    <a class="menu__link" href="/">Home</a>
    <a class="menu__link" href='/portfolio'>Portfolio</a>
    <button class="menu__link" on:click={changeOpacity}>Contacts</button>
    
    <SocialNetworks/>
</nav>


<style>
    .menu {
        display: flex;
        align-items: center;
        justify-content: center; 

        gap: 7em;
        padding: 1em;
        box-shadow: 0px 0px 3px 0px #8167A9;
    }

    .menu__link {
        text-decoration: none;
        border: none;
        background: none;
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.4em;

        transition: all 0.2s linear 0s;
    }

    .menu__link:hover {
        color: #8167A9;
        transition: all 0.2s linear 0s;
    }
</style>