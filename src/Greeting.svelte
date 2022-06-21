<script lang="ts">
    function parseMediaType (sourcePath: string): string {
        let srcPathDetails: Array<string> = sourcePath.split('.')
        
        return srcPathDetails[srcPathDetails.length - 1]
    }

    async function setDogImage() {
        let res: Response = await fetch('https://random.dog/woof.json')
        let data: any = await res.json()
        
        let type = parseMediaType(data.url)

        while (type === 'mp4') {
            res = await fetch('https://random.dog/woof.json')
            data = await res.json()
            type = parseMediaType(data.url)
        }
        
        imageSrc = data.url
    }
    let imageSrc = '/static/images/loading.gif'

    setDogImage()
</script>


<div class="greeting">
    <div class="greeting__image">
        <img src="{imageSrc}" alt="" id='dog-image'/>
    </div>

    <div class='greeting__text'> 
        <h1>Hi, I'm Maksim</h1>
        <h3>A Web developer</h3>
    </div>
</div>

<style>
    .greeting{
    margin: auto;
    height: 40em;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    }

    .greeting__text {
        position: relative;
        margin-left: 205;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .greeting__text h3{
        color: #8167A9;
    }

    .greeting__image img {
        width: 200px;
        height: 200px;

        border-radius: 50%;
    }
</style>