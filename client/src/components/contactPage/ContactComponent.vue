
<template>
    <q-page-container class="container">
        <div class="contact-info">
            <div class="info-container">
                <div class="info-data">
                    <span class="heading">Contact Us:</span>
                    <p class="paragraph">Contact us. We are open from 8:30am-7pm<br />
                        on weekdays and 9am-3pm at weekends.</p>
                    <div class="q-mt-xl">
                        <span class="heading-2 q-mt-lg">Info:</span><br />
                        <div class="data">
                            <q-icon class="fa fa-location-dot q-py-xs" style="color:gray" size="16px"></q-icon>
                            <p class="paragraph q-px-sm">34 Street Name, City Name<br /> Here, United States.</p>
                        </div>
                        <div class="data">
                            <q-icon class="fa fa-phone q-py-xs" style="color:gray" size="16px"></q-icon>
                            <p class="paragraph q-px-sm">+1 (222) 345 6789</p>
                        </div>
                        <div class="data">
                            <q-icon class="fa fa-envelope q-py-xs" style="color:gray" size="16px"></q-icon>
                            <p class="paragraph q-px-sm">info@mywebsite.com</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="contact-form">
            <div class="form">
                <form class="form-data">
                    <span class="form-heading">Get In Touch</span>
                    <div class="form-content q-mt-md">
                        <div class="form-names">
                            <div>
                                <p>First Name</p>
                                <input type="text" placeholder="Name" class="name q-mt-xs" required />
                            </div>
                            <div class="name">
                                <p>Last Name</p>
                                <input type="text" placeholder="Name" class="name q-mt-xs" required />
                            </div>
                        </div>
                        <p class="q-mt-md">Email</p>
                        <input type="text" placeholder="Email" class="email q-mt-xs" required />
                        <p class="q-mt-md">Phone</p>
                        <input type="text" placeholder="Phone" class="phone q-mt-xs" required />
                        <p class="q-mt-md">Service Type</p>
                        <select class="menu q-mt-xs">
                            <option value="">Select Service...</option>                            
                        </select>
                        <p class="q-mt-md">Message</p>
                        <textarea placeholder="Type your message" class="message q-mt-xs"></textarea>

                    </div>
                    <button class="q-mt-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </q-page-container>


</template>
<script>


</script>

<style lang="scss" scoped>
.container {
    // width: 100%;
    display: flex;

}

.contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}

.info-container {
    height: 402px;
    width: 400px;
    border-radius: 10px;
    background-color: #E6FAF6;
    display: flex;
    align-items: center;
    justify-content: center;
}



.heading {
    font-size: 36px;
    font-weight: 600;
}

.paragraph {
    font-size: 16px;
    color: #51545C;
}

.heading-2 {
    font-size: 22px;
    font-weight: 600;

}

.data {
    display: flex;
    padding-top: 10px;
}

.contact-form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    margin: 30px;
    width: 100%;

}

.form-heading {
    font-size: 32px;
    font-weight: 600;
}
.form-content{
    p{
        font-size: 16px;
        font-weight: 500;
        color: #51545C;
    }
    input{
        height: 48px;
        border-radius: 5px;
        border: 1px solid #D7DADB;
        padding: 14px 15px 14px 15px;
    }
}
.name{
    padding-left: 40px;
}
.form-names{
    display: flex;
    
}
.email,.phone,.menu,.message{
    width: 500px;
}
.menu{
    height:48px;
    width: 500px;
    border: 1px solid #D7DADB;
    border-radius: 5px;
}
.message{
    height: 99px;
    border-radius: 5px;
    border: 1px solid #D7DADB;
    border-radius: 5px;
}
button{
    background-color:$primary ;
    width: 134px;
    height: 52px;
    color: white;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 8px;
}

@media (min-width:768px) and (max-width:1023px) {
    .info-container {
            height: 375px;
            width: 375px;
        }
    .form-names{
        flex-direction: column;
    }
        .email,
        .phone,
        .menu,
        .message,.name {
            width: 350px;
        }
        .name{
            padding-left: 0px;
            margin-top: 10px;
        }
}
@media (max-width:767px) {
    .container{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .contact-info{
        width: 100%;
        margin-top:20px;
    }
    .info-container{
        margin:20px;
        width: 100%;
    }
    .info-data{
        margin: 20px;
    }
    .contact-form{
        width: 100%;
    }
        .form-names {
            flex-direction: column;
        }
    
        .email,
        .phone,
        .menu,
        .message,
        .name {
            width: 305px;
        }
        button{
            width: 305px;
        }
        .name {
            padding-left: 0px;
            margin-top: 10px;
        }
        .form{
            display: flex;
            justify-content: center;
            align-items: center;
        }
}
</style>
