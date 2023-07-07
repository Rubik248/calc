





const count = document.querySelector('.count')
const country = document.querySelector('.country')
const price = document.querySelector('.price')
const logo = document.querySelector('.logo')

const btn = document.querySelector('.btn')

btn.addEventListener('click', event => {
    const countValue = count.value
    const countryValue = country.value
    const priceValue = price.value
    const logoValue = logo.value
    const wrapper = document.querySelector('.cost')
    if (countryValue == "UK" && logoValue == "yes") {
        const costFin = 35 + countValue * 1.5
        const deliveryCost = priceValue * 0.52
        wrapper.innerHTML = costFin + deliveryCost + Number(priceValue)
       
    }
    else if (countryValue == "UK" && logoValue == "no") {
        const deliveryCost = priceValue * 0.52
        wrapper.innerHTML = deliveryCost + Number(priceValue) 
    }
})




