const items = [
    {
        ID: 0,
        descricao: "Camisa feminina",
        valor: 80.50,
        disponivel: 40,
        quantidade: 0,
        img: "camisa-fem-01.webp",
        descri: `
            A camisa verde militar é confeccionada em tricoline. A peça possue gola canoa, mangas curtas, leve franzido
            na altura da gola e caimento fluído.
          `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ]
    },
    {
        ID: 1,
        descricao: `Camisa Manga Longa`,
        valor: 125.35,
        disponivel: 80,
        quantidade: 0,
        img: "camisa-fem-02.jpg",
        descri: `
            A camisa branca é confecionada em tricoline. A peça possue colarinho francês, mangas longas
            com abotoamento, recorte posterior vazado com tiras para amarração, comprimento cropped,
            caímento reto e fechamento frontal com  botões.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ]
    },
    {
        ID: 2,
        descricao: "conjunto feminino colors",
        valor: 152.95,
        disponivel: 250,
        quantidade: 0,
        img: "conj-fem-01.webp",
        descri: `
            O conjunto bi-color é confecionado em malha encorpada, a blusa possue gola alta,
            mangas curtas e caimento amplo. A calça possue modelagem pantalona, cintura alta
            com elástico, bolsos laterais e caimento reto.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ],
        medidasCalca: [
            {
                tam: "P",
                cintura: 74,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 78,
                quadril: 106
            },
            {
                tam: "G",
                cintura: 82,
                quadril: 110
            }
        ]
    },
    {
        ID: 3,
        descricao: "conjunto feminino estampado",
        valor: 1294.70,
        disponivel: 10,
        quantidade: 0,
        img: "conj-fem-02.webp",
        descri: `
            Conjunto Feminino estampado é confecionado em malha encorpada, a camisa possue gola canoa, mangas curtas,
            caimento amplo, estampa nas variações de cores verde escuro, verde claro e magenta. A calça possue
            modelagem pantalona, fechamento por ziper lateral e caimento amplo. Peça acompanha cinto.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ],
        medidasCalca: [
            {
                tam: "P",
                cintura: 74,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 78,
                quadril: 106
            },
            {
                tam: "G",
                cintura: 82,
                quadril: 110
            }
        ]
    },
    {
        ID: 4,
        descricao: "conjunto feminino verão",
        valor: 7825.45,
        disponivel: 100,
        quantidade: 0,
        img: "conj-fem-04.png",
        descri: `
            O conjunto verão é confecionado em tricoline. A blusa possue decote ombro a ombro, caimento amplo com comprimento
            cropped, lastex na altura da cintura deixando leve franzido. O short possue comprimento mini, cós elástico com detalhe em 
            cordão aplicado, shape justo, comprimento curto e acabamento canelado.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ],
        medidasShort: [
            {
                tam: "P",
                cintura: 74,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 78,
                quadril: 106
            },
            {
                tam: "G",
                cintura: 82,
                quadril: 110
            }
        ]
    },
    {
        ID: 5,
        descricao: "conjunto feminino alfaiataria",
        valor: 2770.29,
        disponivel: 165,
        quantidade: 0,
        img: "conj-fem-03.webp",
        descri: `
            o conjunto alfataria é confecionado em linho. A camisa possue calorinho simples,
            mangas curtas, shape solto e comprimento na altura do quadril. A calça possue cintura alta, bolsos frontais modelo faca,
            barra ajustada com pregas aplicadas, caimento reto e fechamento frontal por colchetes e zíper.
        `,
        medidasCamisa: [
            {
                tam: "P",
                ombro: 41,
                torax: 102
            },
            {
                tam: "M",
                ombro: 43,
                torax: 106
            },
            {
                tam: "G",
                ombro: 45,
                torax: 108
            }
        ],
        medidasCalca: [
            {
                tam: "P",
                cintura: 74,
                quadril: 102
            },
            {
                tam: "M",
                cintura: 78,
                quadril: 106
            },
            {
                tam: "G",
                cintura: 82,
                quadril: 110
            }
        ]
    },
    {
        ID: 6,
        descricao: "vestido xadrez",
        valor: 459.25,
        disponivel: 40,
        quantidade: 0,
        img: "vestido-01.jpg",
        descri: `
            vestido curto xadrez é confeccionado em tecido leve. A peça decote quadrado, 
            alças médias, padronagem xadrez com cores constrastantes, aplicação de lastex na cintura, comprimento curto, 
            shape solto e fechamento posterior por zíper.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 7,
        descricao: "vestido verde petróleo",
        valor: 8200.40,
        disponivel: 150,
        quantidade: 0,
        img: "vestido-02.jpg",
        descri: `
            vestido longo é confecionado em linho misto, a peça possue decote "V", manga longas com elástico aplicado nos punhos. 
            Elástico aplicado na altura da cintura, comprimento longo, shape solto, caimento fluído e acabamento pespontado.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 8,
        descricao: "vestido estampa flores",
        valor: 350.15,
        disponivel: 10,
        quantidade: 0,
        img: "vestido-03.jpg",
        descri: `
            Este vestido é confecionado em tecido leve com textura de linho, a peça possue decote coração, 
            modelo tomara que caia, estampa de flores, shape solto, caimento amplo e comprimento curto.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 9,
        descricao: "vestido off-white",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "vestido-04.jpg",
        descri: `
            O vestido é confecionado em linho misto, A peça possue decote "V" profundo, mangas 7/8 levemente bufante com aplicação 
            de ombreiras, fechamento por ziper na parte posterior, comprimento midi e acabamemto pespontado.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 10,
        descricao: "vestido celeste",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "vestido-celeste.png",
        descri: `
        O vestido verde claro é confeccionado em tecido leve. A peça possui 
        decote em V, alças finas, elástico embutido na altura da cintura com aplicação de laço, 
        comprimento longo, caimento reto com aplicação de drapeado 
        ao logo de toda saia e acabamento pespontado.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 11,
        descricao: "vestido estampado rosa",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "Vestido-estampado-rodas.png",
        descri: `
        O vestido estampado rosas é confeccionado em tecido leve. A 
        peça possui decote em V profundo, mangas longas com leve 
        ajuste nos punhos, elástico embutido na 
        altura da cintura, comprimento longo, 
        caimento reto e acabamento pespontado.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 12,
        descricao: "Camisa fit preta",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "camiseta-fit-preta.jpg",
        descri: `
        A camiseta preta é confeccionada em tecido leve. A peça 
        possui decote redondo com acabamento canelado, 
        mangas curtas, logo da marca aplicado na parte frontal 
        em silk e cor contrastante, shape solto, 
        caimento reto e acabamento pespontado.
        `,
        medidasVestido: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 13,
        descricao: "Camisa azul fino",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "camisa-azul-fino.jpg",
        descri: `
        A camisa azul é confeccionado em sarja com lavagem em jeans. 
        A peça possui colarinho simples, mangas longas com abotoamento, 
        recortes frontais e posteriores, 
        bolsos frontais, shape solto, caimento reto, 
        acabamento pespontado e fechemento frontal por botões de pressão.
        `,
        medidasCamisa: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    {
        ID: 14,
        descricao: "Camisa azul fino",
        valor: 3450.55,
        disponivel: 10,
        quantidade: 0,
        img: "Bata-militar-verde.jpg",
        descri: `
        A bata verde militar é confeccionada em tecido leve. 
        A peça possui decote V com fechamento por cordão 
        aplicado, mangas longas, shape solto, 
        caimento reto e acabamento pespontado.
        `,
        medidasCamisa: [
            {
                tam: "P",
                busto: 84,
                cintura: 72,
                quadril: 88
            },
            {
                tam: "M",
                busto: 88,
                cintura: 76,
                quadril: 92
            },
            {
                tam: "G",
                busto: 92,
                cintura: 80,
                quadril: 96
            }
        ]
    },
    
]

const totaldb = {
    geral: 0,
    quantGeral: 0
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
            <img src="./public/mídias/galeria/fem/${el.img}" class = "card-photos" key = ${el.ID} style = "cursor:pointer">
        </div>
        `
    })
}
inicializar()

removerItem = () => {
    const btnRemove = document.querySelectorAll("#btn-del");
    btnRemove.forEach(el => {
        el.addEventListener("click", () => {
            let id = el.getAttribute("key")
            if (items[id].quantidade > 0) {
                items[id].quantidade--
                items[id].disponivel++
                totaldb.geral -= items[id].valor
                totaldb.quantGeral--
                updateCarrinho();
                removerItem();
                updateTotal();
                descricaoInit();
                carrinhoCount();
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

        items.map(el => {
            el.disponivel += el.quantidade;
            el.quantidade = 0;
            inicializar();
        })
        totaldb.geral = 0;
        totaldb.quantGeral = 0;
        addCarrinho();
        updateTotal();
        carrinhoCount();
        if (document.getElementById("btn-del")) {
            updateCarrinho();
        }
    })
}
cancelarCompra();

btnCarrinho.addEventListener("click", () => {
    carrinho.classList.toggle("active")
})



//DESCRIÇÂO DETALHADA------------------------------------------------------
descricaoInit = () => {
    let cardPhotos = document.querySelectorAll(".card-photos");
    
    cardPhotos.forEach(el => {
        el.addEventListener("click", () => {
            let key = el.getAttribute("key");
            //console.log(items[key]);
            produtos.innerHTML = "";
            produtos.innerHTML = `<div id="descri-produtos"></div>`;
            let descriProdutos = document.getElementById("descri-produtos")
            descriProdutos.innerHTML += `
            <div id = "products-block01">
                <img src="./public/mídias/galeria/fem/${items[key].img}" id = "products-img">
                <div>
                    <h1>${items[key].descricao}</h1>
                        <div id = "descri-text-01">${items[key].descri}</div>
                    <input type = "button" value = "voltar" class = "btn-back-descri">
                    <input type = "button" value = "adicionar ao carrinho" id = "btn-add" key = ${items[key].ID}>
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
                let imgdisplaydescribes = document.getElementById("products-img");
                imgdisplaydescribes.classList.add("marginDistanceOn");
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

            if (items[key].medidasVestido) {//BLOCOS DE VESTIDO
                productsBlock02.innerHTML += `
                <div id = "descri-dome">   
                    <h2>Vestido:</h2>
                    <select id = "select-tam">
                        <option>escolha seu tamanho</option>
                        <option>tamano P</option>
                        <option>tamanho M</option>
                        <option>tamanho G</option>
                    </select>
                    <div id = "descri-itens-block"> 
                    <div>
                        tamanho: ${items[key].medidasVestido[0].tam}<br>
                        busto: ${items[key].medidasVestido[0].busto} cm<br>
                        cintura: ${items[key].medidasVestido[0].cintura} cm<br>
                        quadril: ${items[key].medidasVestido[0].quadril} cm <br>
                    </div>
                    <div>
                        tamanho: ${items[key].medidasVestido[1].tam}<br>
                        busto: ${items[key].medidasVestido[1].busto} cm<br>
                        cintura: ${items[key].medidasVestido[1].cintura} cm<br>
                        quadril: ${items[key].medidasVestido[1].quadril} cm <br>
                    </div>
                    <div>
                        tamanho: ${items[key].medidasVestido[2].tam}<br>
                        busto: ${items[key].medidasVestido[2].busto} cm<br>
                        cintura: ${items[key].medidasVestido[2].cintura} cm<br>
                        quadril: ${items[key].medidasVestido[2].quadril} cm <br>
                    </div>
                    </div>
                </div>   
                `
            }

            if (items[key].medidasShort) {//BLOCO DE SHORT
                let imgdisplaydescribes = document.getElementById("products-img");
                imgdisplaydescribes.classList.add("marginDistanceOn");
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

