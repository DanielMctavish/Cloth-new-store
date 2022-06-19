const items = [
    {
        ID: 0,
        descricao: "Short masculino bege",
        valor: 54.50,
        disponivel: 10,
        quantidade: 0,
        img: "bermuda01.png",
        descri: `
            O short é confecionado em tactel. A peça possue cintura média, 
            cos aplicado, tag da marca aplicada, bolsos laterais, caimento reto, comprimento curto e 
            acabamento pespontado.
        `,
        medidasShort: [
            {
                tam: "P",
                cintura: 82,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 90,
                quadril: 110
            },
            {
                tam: "G",
                cintura: 98,
                quadril: 118
            }
        ]
    },
    {
        ID: 1,
        descricao: "Bermuda masculina cinza",
        valor: 64.50,
        disponivel: 10,
        quantidade: 0,
        img: "bermuda02.webp",
        descri: `
        A bermuda é confeccionada em moleton. A peça possue cintura média, cos elástico com cordão embutido para ajuste,
        bolsos frontais de modelo faca, tag aplicada, shape justo, caimento reto e acabamento pespontado.
    `,
        medidasShort: [
            {
                tam: "P",
                cintura: 82,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 90,
                quadril: 110
            },
            {
                tam: "G",
                cintura: 98,
                quadril: 118
            }
        ]
    },
    {
        ID: 2,
        descricao: "Bermuda masculina preta",
        valor: 44.74,
        disponivel: 10,
        quantidade: 0,
        img: "bermuda03.webp",
        descri: `
            A bermuda é confeccionada em sarja. A peça possue cintura média, cos elástico com cordão embutido para ajuste,
            bolsos frontais de modelo faca, shape justo, caimento reto e acabamento pespontado.
        `,
        medidasShort: [
            {
                tam: "P",
                cintura: 82,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 90,
                quadril: 110
            },
            {
                tam: "G",
                cintura: 98,
                quadril: 118
            }
        ]
    },
    {
        ID: 3,
        descricao: "Calça preta tática",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "calca_01.webp",
        descri: `
            A calça preta tática é confeccionada em moleton com superfício em relevo, A peça de modelo jogger possue cintura 
            média, cos elástico com cordão de amarração embutido, bolsos na parte lateral, comprimento longo, ajuste na altura
            do tornozelo, caimento solto e acabamento pespontado.
        `,
        medidasCalca: [
            {
                tam: "P",
                cintura: 82,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 90,
                quadril: 110
            },
            {
                tam: "G",
                cintura: 98,
                quadril: 118
            }
        ]
    },
    {
        ID: 4,
        descricao: "Camisa social preta Masc",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa01_.png",
        descri: `
            A camisa preta é confeccionada com tecido leve com toque de linho. A peça colarinho americano, mangas longas com
            abotoamento, pregas aplicadas na parte posterior, caimento reto, acabamento pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 5,
        descricao: "Camisa social escritório Masc",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa02_.jpg",
        descri: `
        A camisa social é confeccionada com tecido leve com toque de linho. A peça colarinho americano, bolso na parte frontal,
         mangas longas com
        abotoamento, pregas aplicadas na parte posterior, caimento reto, acabamento pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 6,
        descricao: "Camisa social rosa listrada",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa03.webp",
        descri: `
        A camisa social rosa é confeccionada com tecido leve com toque de linho. 
        A peça colarinho americano, padronagem listrada, mangas longas com
        abotoamento, pregas aplicadas na parte posterior, caimento reto, 
        acabamento pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 7,
        descricao: "Camisa social azul textura",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa04_.jpg",
        descri: `
            A camisa social azul é confeccionada com tecido leve com toque de linho. 
            A peça colarinho americano, mangas longas com
            abotoamento, pregas aplicadas na parte posterior, 
            caimento reto, acabamento pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 8,
        descricao: "Camisa xadrez",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa05.webp",
        descri: `
            A camisa preta é confeccionada com tecido leve com toque de linho.
             A peça colarinho americano, padronagem xadrez, mangas longas com
            abotoamento, pregas aplicadas na parte posterior,
             caimento reto, acabamento pespontado e fechamento frontal por botões.
         `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 9,
        descricao: "Camisa Jeans Masc",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa06_.png",
        descri: `
            A camisa Jeans Masc é confeccionada em tecido jeans. A peça colarinho americano, mangas longas com
            abotoamento, pregas aplicadas na parte posterior, bolsos na parte frontal, caimento reto, 
            acabamento pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 10,
        descricao: "Moleton Dark",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "moleton-dark.jpg",
        descri: `
        O casaco preto é confeccionada em moletom. A peça possui 
        capuz aplicado com cordão para ajuste, mangas 
        longas, bolsos frontais modelo canguru, 
        caimento reto e acabamento canelado.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 11,
        descricao: "Camisa Chef Clean",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "chefe-clean.jpg",
        descri: `
        A camisa branca é confeccionada em linho misto. 
        A peça possui colarinho simples, 
        mangas curtas, caimento reto, 
        acabamento pespontado e 
        fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
    {
        ID: 12,
        descricao: "Camisa social vinho",
        valor: 174.75,
        disponivel: 10,
        quantidade: 0,
        img: "camisa-vinho.png",
        descri: `
        A camisa slim vinho é confeccionada em tricoline. 
        A peça possui colarinho simples, 
        mangas longas com punho abotoado, 
        barra arredondada, detalhe de prega 
        posterior, shape justo, 
        caimento reto, acabamento 
        pespontado e fechamento frontal por botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 48,
                torax: 114
            },
            {
                tam: "M",
                ombro: 50,
                torax: 118
            },
            {
                tam: "G",
                ombro: 52,
                torax: 122
            }
        ]
    },
]

const totaldb = {
    geral: 0
}


const btnCarrinho = document.getElementById("icon-carrinho")
const produtos = document.getElementById("produtos")
const carrinho = document.getElementById("carrinho")
const contentCarrinho = document.getElementById("content-carrinho");


inicializar = () => {
    produtos.innerHTML = "";
    items.map(el => {
        produtos.innerHTML += `
        <div id = "card-produtos">
            <h3> ${el.descricao}</h3>
            <div>disponíveis: ${el.disponivel}</div>
            <div id = "price">R$${el.valor}</div>
            <img src="./public/mídias/galeria/masc/${el.img}" class = "card-photos" key = ${el.ID} style = "cursor:pointer">
        </div>
        `
    })

}
inicializar();

removerItem = () => {
    const btnRemove = document.querySelectorAll("#btn-del");
    btnRemove.forEach(el => {
        el.addEventListener("click", () => {
            let id = el.getAttribute("key")
            if (items[id].quantidade > 0) {
                items[id].quantidade--
                items[id].disponivel++
                totaldb.geral -= items[id].valor
                updateCarrinho();
                removerItem();
                inicializar();
                addCarrinho();
                updateTotal();
                //console.log(totaldb.geral.toFixed(2));
            }
        })
    })
}

confirmarCompra = () => {
    let btnComprar = document.getElementById("btn-buy");
    btnComprar.addEventListener("click", () => {
        addCarrinho();
        updatePay = () => {
            let slotpay = document.getElementById("slot-pay");
            slotpay.innerHTML = "";
            slotpay.innerHTML = `
            <form action="" id="pagamento">
                <button id = "close-pay">fechar</button>
                <h2>Formas de pagamento</h2>
                <input type="text" placeholder="seu nome" required>
                <input type="text" placeholder="seu email" required>
                <div>seu cartão</div>
                <div id="card-slot" style="width: 300px;"></div>
                <div style = "font-weight: bolder" style="width: 300px;">TOTAL A SER PAGO: R$ ${totaldb.geral.toFixed(2)}</div>
                <button id = "pay">Pagar</button>
            </form>
            `
            let close = document.getElementById("close-pay");
            close.addEventListener("click", () => {
                slotpay.innerHTML = "";
            })
        }
        updatePay();
        //------stripe API----------------------------------------
        const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        var elements = stripe.elements();
        var cardElement = elements.create("card");
        cardElement.mount("#card-slot")
    })


}


addCarrinho = () => {
    const btnAdd = document.querySelectorAll("#btn-add")
    btnAdd.forEach(el => {
        el.addEventListener("click", () => {
            let key = el.getAttribute("key");
            if (items[key].disponivel > 0) {
                items[key].quantidade++
                items[key].disponivel--
                totaldb.geral += items[key].valor
                updateTotal();
                // console.log(totaldb.geral.toFixed(2));
            }
            updateCarrinho = () => {
                contentCarrinho.innerHTML = "";
                items.map(item => {
                    if (item.quantidade > 0) {
                        contentCarrinho.innerHTML += `
                        <div>
                            <hr>
                            <div>${item.descricao}</div>
                            <div> quantidade: ${item.quantidade}</div>
                            <div>R$ ${item.valor}</div>
                            <input type = "button" value = "remover" id = "btn-del" key = ${item.ID}>
                        </div>
                    `
                    }
                })
            }
            updateCarrinho();
            removerItem();
            confirmarCompra();
            descricaoInit();
            carrinhoCount();
        })
    })
}

addCarrinho();


updateTotal = () => {
    let total = document.getElementById("total")
    total.innerHTML = `TOTAL: R$ ${totaldb.geral.toFixed(2)}`
    descricaoInit();
    carrinhoCount();
}

cancelarCompra = () => {
    let btnCancel = document.getElementById("btn-cancel");
    btnCancel.addEventListener("click", () => {
        btnCancel.style.boxShadow = "2px 2px 8px black";
        btnCancel.style.background = "red"
        setTimeout(() => {
            btnCancel.style.boxShadow = "2px 2px 5px rgb(31, 31, 31)";
            btnCancel.style.background = "rgb(231, 83, 63)"
            btnCancel.style.transition = ".1s"
        }, 100);
        console.log("cancelando!");
        items.map(el => {
            el.disponivel += el.quantidade;
            el.quantidade = 0;
            inicializar();
        })
        totaldb.geral = 0;
        addCarrinho();
        updateTotal();
        if (document.getElementById("btn-del")) {
            updateCarrinho();
        }
    })
}
cancelarCompra();


//DESCRIÇÂO DETALHADA------------------------------------------------------
descricaoInit = () => {
    let cardPhotos = document.querySelectorAll(".card-photos");

    cardPhotos.forEach(el => {
        el.addEventListener("click", () => {
            console.log("clicou");
            let key = el.getAttribute("key");
            //console.log(items[key]);
            produtos.innerHTML = "";
            produtos.innerHTML = `<div id="descri-produtos"></div>`;
            let descriProdutos = document.getElementById("descri-produtos")
            descriProdutos.innerHTML += `
            <div id = "products-block01">
                <img src="./public/mídias/galeria/masc/${items[key].img}" id = "products-img">
                <div>
                    <h1>${items[key].descricao}</h1>
                        <div id = "descri-text-01">${items[key].descri}</div>
                    <input type = "button" value = "voltar" class = "btn-back-descri">
                    <input type = "button" value = "adicionar ao carrinho" id = "btn-add" key = ${items[key].ID} style = "width: 18vh">
                </div>
            <div>
            `
            descriProdutos.innerHTML += `<div id="products-block02"></div>`;
            let productsBlock02 = document.getElementById("products-block02")
            if (items[key].medidasCamisa) { //BLOCO DE CAMISAS
                productsBlock02.innerHTML += `
                <div id = "descri-dome">
                    <h3>camisas:</h3>
                    <select id = "select-tam">
                        <option>escolha seu tamanho</option>
                        <option>tamano P</option>
                        <option>tamanho M</option>
                        <option>tamanho G</option>
                    </select>
                    <div id = "descri-itens-block"> 
                        <div>
                            tamanho: ${items[key].medidasCamisa[0].tam} <br>
                            ombro: ${items[key].medidasCamisa[0].ombro} cm <br>
                            torax: ${items[key].medidasCamisa[0].torax} cm <br>
                        </div>
                        <div>
                            tamanho: ${items[key].medidasCamisa[1].tam} <br>
                            ombro: ${items[key].medidasCamisa[1].ombro} cm <br>
                            torax: ${items[key].medidasCamisa[1].torax} cm <br>
                        </div>
                        <div>
                            tamanho: ${items[key].medidasCamisa[2].tam} <br>
                            ombro: ${items[key].medidasCamisa[2].ombro} cm <br>
                            torax: ${items[key].medidasCamisa[2].torax} cm<br>
                        </div> 
                    </div>
                </div>
            `
            }

            if (items[key].medidasCalca) {//BLOCOS DE CALÇA
                productsBlock02.innerHTML += `
                <div id = "descri-dome">   
                    <h3>calças: </h3>
                    <select id = "select-tam">
                        <option>escolha seu tamanho</option>
                        <option>tamano P</option>
                        <option>tamanho M</option>
                        <option>tamanho G</option>
                    </select>
                    <div id = "descri-itens-block"> 
                        <div>
                            tamanho: ${items[key].medidasCalca[0].tam}<br>
                            cintura: ${items[key].medidasCalca[0].cintura} cm <br>
                            quadril: ${items[key].medidasCalca[0].quadril} cm  <br>
                        </div>
                        <div>
                            tamanho: ${items[key].medidasCalca[1].tam}<br>
                            cintura: ${items[key].medidasCalca[1].cintura} cm<br> 
                            quadril: ${items[key].medidasCalca[1].quadril} cm <br>
                        </div>
                        <div>
                            tamanho: ${items[key].medidasCalca[2].tam}<br>
                            cintura: ${items[key].medidasCalca[2].cintura} cm<br> 
                            quadril: ${items[key].medidasCalca[2].quadril} cm<br> 
                        </div> 
                    </div>
                </div>
                 `
            }


            if (items[key].medidasShort) {//BLOCO DE SHORT
                productsBlock02.innerHTML += `
                <div id = "descri-dome">  
                    <h2>Shorts:</h2> 
                    <select id = "select-tam">
                        <option>escolha seu tamanho</option>
                        <option>tamano P</option>
                        <option>tamanho M</option>
                        <option>tamanho G</option>
                    </select>
                    <div id = "descri-itens-block">
                        <div> 
                            tamanho: ${items[key].medidasShort[0].tam}<br>
                            cintura: ${items[key].medidasShort[0].cintura} cm<br> 
                            quadril: ${items[key].medidasShort[0].quadril} cm<br> 
                        </div>
                        <div>
                            tamanho: ${items[key].medidasShort[1].tam}<br>
                            cintura: ${items[key].medidasShort[1].cintura} cm<br> 
                            quadril: ${items[key].medidasShort[1].quadril} cm<br>
                        </div>
                        <div> 
                            tamanho: ${items[key].medidasShort[2].tam}<br>
                            cintura: ${items[key].medidasShort[2].cintura} cm<br> 
                            quadril: ${items[key].medidasShort[2].quadril} cm<br>
                        </div>
                    </div>
                </div>
                `
            }



            addCarrinho();
            let btnBack = document.querySelector(".btn-back-descri");
            btnBack.addEventListener("click", () => {
                inicializar();
                descricaoInit();
                addCarrinho();
            })

        })
    })
}

let cardExist = document.getElementById("card-produtos")
if (cardExist) {
    descricaoInit();
} else {
    console.log("não foi possível iniciar função");
}



btnCarrinho.addEventListener("click", () => {
    carrinho.classList.toggle("active")
})


//contador do carrinho----------------------------------------------------
carrinhoCount = () => {
    let countIcon = document.getElementById("countShop");
    countIcon.classList.add("active")
    totaldb.quantGeral = 0;
    items.forEach(el => {
        totaldb.quantGeral += el.quantidade;
    })
    //console.log(totaldb);
    countIcon.innerHTML = `${totaldb.quantGeral}`
    if (totaldb.quantGeral == 0) {
        countIcon.classList.remove("active")
    }
}


