<script lang="ts" context="module">  
    export const changeOpacity = () => {
        const contacts = document.getElementById("contacts") as HTMLDivElement 
        contacts.style.opacity = contacts.style.opacity === '1'? '0': '1'
    }

</script>

<div class="contacts" id="contacts">
    <div class="social-network">
        <img src='/static/images/github.png' alt='github-logo'/>
        <a href='https://github.com/macoyshev'>Github</a>
    </div>
    <div class='social-network'>
        <img src='/static/images/google.png' alt="gmail-logo" class='social-network__logo'/>
        <a href='mailto:make.oynoshev@gmail.com'>Gmail</a>
    </div>
    <div class='social-network'>
        <img src='/static/images/telegram.png' alt="telegram-logo" class='social-network__logo'/>
        <a href='https://t.me/Macoyshev'>Telegram</a>
    </div>
</div> 

<style>
    .social-network {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .social-network img{
        width: 40px;
        height: 40px;
    }

    .social-network a {
        text-decoration: None;
        color: black;
        font-weight: bold;
        transition: all 0.2s linear 0s;
    }

    .social-network a:hover {
        font-weight: bold;
        color: #8167A9;
        transition: all 0.2s linear 0s;
    }

    .contacts {
        position: absolute;
        padding-left: 2em;
        left: 56%;
        top: 8%;
    
        width: 200px;
        height: 200px;

        opacity: 0%;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 1em;

        background-color: white;
        border-radius: 12%;
        box-shadow:  0px 0px 4px 0px #8167A9;

        transition: all 0.3s linear 0s;
    }
</style>