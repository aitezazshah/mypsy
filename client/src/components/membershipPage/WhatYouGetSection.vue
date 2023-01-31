<template>
    <div class="padding-y container main-container">
        <div class="content">
        <div class="left-content q-px-xs">
            <p class="left-heading">What You Get</p>
        </div>
        <div class="right-content q-px-xs">
            <p class="right-text q-px-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis
            aute irure dolor.</p>
            <p class="right-text-2 q-mt-md q-px-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            <ol class="right-text">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            </ol>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* .main-container{
    border: 1px solid red;
} */
.content{
    display: flex;
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
}
.left-content{
    /* border: 1px solid yellow; */
    width: 50%;
    height: 100%;
}
.right-content{
    /* border: 1px solid green; */
    width: 50%;
    height: 100%;
}
.left-heading{
    font-size: 48px;
    font-weight: 600;
}
.right-text{
    color: #51545C;
    font-size: 18px;
}
.right-text-2 {
    color: #1F2125;
    font-size: 18px;
    font-weight: 600;
}
@media (max-width:660px) {
    .content{
        flex-direction: column;
    }
    .left-content,.right-content{
        width: 100%;
    }
}
</style>
