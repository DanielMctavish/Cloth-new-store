const button_register_productor = document.getElementById("button-register-productor")
const submit_productor_register = document.getElementById("button-productor-send")
const productor_section_01 = document.getElementById("productor-section-01")
const productor_section_02 = document.getElementById("productor-section-02")
const form_login_profuctor = document.getElementById('form-login-profuctor')

button_register_productor.addEventListener('click', async () => {
    console.log('teste!')
    productor_section_01.style.transition = '1.5s'
    productor_section_02.style.transition = '1.5s'
    productor_section_01.style.transform = 'translateX(-150vh)';
    productor_section_02.style.transform = 'translateX(100vh)';
    form_login_profuctor.style.opacity = '0'
    form_login_profuctor.style.transition = '1s'
    await setTimeout(() => {
        productor_section_01.style.opacity = '0'
        productor_section_02.style.opacity = '0'
        form_login_profuctor.style.display = 'none'
    }, 700);
})

submit_productor_register.addEventListener('click', async () => {
    const image_avatar = document.getElementById("shop-image-avatar")
    const shop_name = document.getElementById("shop-name")
    const shop_description = document.getElementById("shop-description")
    const productor_name = document.getElementById("productor-name")
    const productor_email = document.getElementById("productor-email")
    const productor_password = document.getElementById("productor-password")
    const productor_confirm_password = document.getElementById("productor-password-confirm")

    const response_register = {
        image_avatar: image_avatar.files[0],
        shop_name: shop_name.value,
        shop_description: shop_description.value,
        productor_name: productor_name.value,
        productor_email: productor_email.value,
        productor_password: productor_password.value,
        productor_confirm_password: productor_confirm_password.value
    }
    const formData = new FormData()
    formData.append('image_avatar', response_register.image_avatar)
    formData.append('shop_name', response_register.shop_name)
    formData.append('shop_description', response_register.shop_description)
    formData.append('productor_name', response_register.productor_name)

    await axios.post('/productor/register-productor', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(() => {

        setTimeout(() => {
            window.location.href = '/productor'
        }, 1000);
    })

})

//---------------------------miniatura do avatar da loja---------------------------------

const input = document.querySelector('#shop-image-avatar');


input.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = document.createElement('img');
    img.src = event.target.result;

    const preview = document.querySelector('#shop-avatar');
    preview.appendChild(img);
  };

  reader.readAsDataURL(file);
});
